/**
 * Cloudflare Pages Function — /api/auth/discord
 * Inicia o fluxo de autenticação Discord OAuth2.
 */
export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (!env.DISCORD_CLIENT_ID) {
    const fallbackUrl = new URL("/", url.origin);
    fallbackUrl.searchParams.set("auth_demo", "1");
    return Response.redirect(fallbackUrl.href, 302);
  }

  const redirectUri = new URL("/api/auth/discord/callback", url.origin).href;
  const authorizeUrl = new URL("https://discord.com/api/oauth2/authorize");
  authorizeUrl.searchParams.set("client_id", env.DISCORD_CLIENT_ID);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("scope", "identify");

  return Response.redirect(authorizeUrl.href, 302);
}
