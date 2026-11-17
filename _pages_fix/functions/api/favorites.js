export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === "GET") {
    const favorites = [];
    if (env.DB) {
      try {
        const rows = await env.DB.prepare(
          "SELECT recipe_id, recipe_name FROM favorite_recipes ORDER BY id DESC LIMIT 20"
        ).all();
        rows.results.forEach((row) => favorites.push({ recipeId: row.recipe_id, recipeName: row.recipe_name }));
      } catch {
        // fallback sem banco
      }
    }
    return Response.json({ ok: true, favorites });
  }

  if (request.method === "POST") {
    const body = await request.json().catch(() => ({}));
    const userId = String(body.userId || "manual-user").trim();
    const recipeId = String(body.recipeId || "").trim();
    const recipeName = String(body.recipeName || recipeId).trim();
    const action = String(body.action || "toggle").trim();

    if (!recipeId || !userId) {
      return Response.json({ ok: false, error: "Dados obrigatórios faltando." }, { status: 400 });
    }

    if (env.DB) {
      try {
        await env.DB.prepare(
          "CREATE TABLE IF NOT EXISTS favorite_recipes (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id TEXT NOT NULL, recipe_id TEXT NOT NULL, recipe_name TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, UNIQUE(user_id, recipe_id))"
        ).run();

        if (action === "remove") {
          await env.DB.prepare("DELETE FROM favorite_recipes WHERE user_id = ? AND recipe_id = ?").bind(userId, recipeId).run();
          return Response.json({ ok: true, removed: true, recipeId });
        }

        await env.DB.prepare(
          "INSERT INTO favorite_recipes (user_id, recipe_id, recipe_name) VALUES (?, ?, ?) ON CONFLICT(user_id, recipe_id) DO UPDATE SET recipe_name = excluded.recipe_name"
        ).bind(userId, recipeId, recipeName).run();
      } catch {
        return Response.json({ ok: false, error: "Falha ao persistir favorito no D1." }, { status: 500 });
      }
    }

    return Response.json({ ok: true, saved: Boolean(env.DB), recipeId });
  }

  return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
