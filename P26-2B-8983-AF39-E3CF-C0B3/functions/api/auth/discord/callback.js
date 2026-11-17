/**
 * Cloudflare Pages Function — /api/auth/discord/callback
 * Recebe o `code` do Discord e cria a sessão do usuário localmente.
 */
export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (error || !code) {
    const redirect = new URL("/", url.origin);
    redirect.searchParams.set("auth_error", error || "missing_code");
    return Response.redirect(redirect.href, 302);
  }

  if (!env.DISCORD_CLIENT_ID || !env.DISCORD_CLIENT_SECRET) {
    const payload = JSON.stringify({
      userId: "demo-discord-user",
      username: "Chef Local",
      avatar: "https://cdn.discordapp.com/embed/avatars/0.png"
    });
    const encoded = btoa(encodeURIComponent(payload));

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/?login=success&demo=1",
        "Set-Cookie": `discord_session=${encoded}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400; Secure`
      }
    });
  }

  const redirectUri = new URL("/api/auth/discord/callback", url.origin).href;

  try {
    const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: env.DISCORD_CLIENT_ID,
        client_secret: env.DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri
      })
    });

    if (!tokenResponse.ok) {
      const redirect = new URL("/", url.origin);
      redirect.searchParams.set("auth_error", "token_exchange_failed");
      return Response.redirect(redirect.href, 302);
    }

    const tokenData = await tokenResponse.json();
    const userResponse = await fetch("https://discord.com/api/users/@me", {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    });

    if (!userResponse.ok) {
      const redirect = new URL("/", url.origin);
      redirect.searchParams.set("auth_error", "fetch_user_failed");
      return Response.redirect(redirect.href, 302);
    }

    const discordUser = await userResponse.json();
    const userId = discordUser.id;
    const username = discordUser.global_name || discordUser.username;
    const avatar = discordUser.avatar
      ? `https://cdn.discordapp.com/avatars/${userId}/${discordUser.avatar}.png`
      : "https://cdn.discordapp.com/embed/avatars/0.png";

    if (env.DB) {
      try {
        await env.DB.prepare(
          "CREATE TABLE IF NOT EXISTS discord_users (user_id TEXT PRIMARY KEY, username TEXT NOT NULL, avatar TEXT, updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)"
        ).run();
        await env.DB.prepare(
          "INSERT INTO discord_users (user_id, username, avatar, updated_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP) ON CONFLICT(user_id) DO UPDATE SET username = excluded.username, avatar = excluded.avatar, updated_at = CURRENT_TIMESTAMP"
        ).bind(userId, username, avatar).run();
      } catch {
        // falha silenciosa em ambientes de diagnóstico local
      }
    }

    const sessionPayload = JSON.stringify({ userId, username, avatar });
    const encodedSession = btoa(encodeURIComponent(sessionPayload));

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/?login=success",
        "Set-Cookie": `discord_session=${encodedSession}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400; Secure`
      }
    });
  } catch {
    const redirect = new URL("/", url.origin);
    redirect.searchParams.set("auth_error", "exception");
    return Response.redirect(redirect.href, 302);
  }
}
