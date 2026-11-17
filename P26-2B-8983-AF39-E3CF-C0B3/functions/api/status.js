/**
 * Cloudflare Pages Function — /api/status
 * Diagnóstico do projeto e persistência do livro de receitas em Cloudflare D1.
 */
export async function onRequest(context) {
  const { request, env } = context;
  const chave = "P26-2B-8983-AF39-E3CF-C0B3";
  const projectId = 28;
  const projectTitle = "Livro de Receitas Colaborativo com Escalonador de Porções";

  const cookieHeader = request.headers.get("Cookie") || "";
  let sessionUser = null;
  const sessionMatch = cookieHeader.match(/discord_session=([^;]+)/);
  if (sessionMatch) {
    try {
      sessionUser = JSON.parse(decodeURIComponent(atob(sessionMatch[1])));
    } catch {
      sessionUser = null;
    }
  }

  if (request.method === "GET") {
    let dbConnected = false;
    let ultimosRegistros = [];

    if (env.DB) {
      try {
        await env.DB.prepare(
          "CREATE TABLE IF NOT EXISTS project_records (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id TEXT NOT NULL, username TEXT NOT NULL, chave_projeto TEXT NOT NULL, conteudo TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)"
        ).run();
        const listRes = await env.DB.prepare(
          "SELECT id, user_id, username, conteudo, created_at FROM project_records ORDER BY id DESC LIMIT 10"
        ).all();
        dbConnected = true;
        ultimosRegistros = listRes.results || [];
      } catch {
        dbConnected = false;
      }
    }

    return Response.json({
      ok: true,
      chave,
      projectId,
      projectTitle,
      d1Connected: dbConnected,
      discordOAuthConfigured: Boolean(env.DISCORD_CLIENT_ID),
      sessionUser,
      ultimosRegistros,
      serverTimestamp: new Date().toISOString(),
    });
  }

  if (request.method === "POST") {
    const body = await request.json().catch(() => ({}));
    const userId = String(body.userId || "manual-user").trim().slice(0, 64);
    const username = String(body.username || "Chef Local").trim().slice(0, 80);
    const conteudo = String(body.conteudo || "").trim().slice(0, 500);

    if (!conteudo) {
      return Response.json({ ok: false, error: "Conteúdo obrigatório." }, { status: 400 });
    }

    if (env.DB) {
      await env.DB.prepare(
        "CREATE TABLE IF NOT EXISTS project_records (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id TEXT NOT NULL, username TEXT NOT NULL, chave_projeto TEXT NOT NULL, conteudo TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)"
      ).run();
      await env.DB.prepare(
        "INSERT INTO project_records (user_id, username, chave_projeto, conteudo) VALUES (?, ?, ?, ?)"
      ).bind(userId, username, chave, conteudo).run();
    }

    return Response.json({
      ok: true,
      saved: Boolean(env.DB),
      chave,
      serverTimestamp: new Date().toISOString(),
    }, { status: 201 });
  }

  return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
