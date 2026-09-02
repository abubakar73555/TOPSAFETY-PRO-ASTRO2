export async function onRequestGet(context) {
  const { CLIENT_ID } = context.env;
  const authorizeUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo,user`;
  return Response.redirect(authorizeUrl, 302);
}