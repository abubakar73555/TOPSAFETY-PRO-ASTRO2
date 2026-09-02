export async function onRequestGet(context) {
  const { CLIENT_ID, CLIENT_SECRET } = context.env;
  const url = new URL(context.request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response("Missing code", { status: 400 });
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenRes.json();

  if (tokenData.error) {
    return new Response(`Auth error: ${tokenData.error_description}`, { status: 400 });
  }

  const script = `
    <script>
      (function() {
        function receiveMessage(e) {
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify({
              token: "TOKEN_PLACEHOLDER",
              provider: "github",
            })}',
            e.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  `;

  const finalScript = script.replace("TOKEN_PLACEHOLDER", tokenData.access_token);

  return new Response(finalScript, {
    headers: { "Content-Type": "text/html" },
  });
}