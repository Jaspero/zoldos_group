import * as functions from 'firebase-functions';
import * as express from 'express';
import * as simpleOauth from 'simple-oauth2';
import * as randomstring from 'randomstring';

const credentials = functions.config().oauth;
const oauth_provider = credentials.provider || 'github';

function getScript(mess: string, content: any) {
  return `<!doctype html><html><body><script>
  (function() {
    function receiveMessage(e) {
      console.log('receiveMessage %o', e)
      window.opener.postMessage(
        'authorization:github:${mess}:${JSON.stringify(content)}',
        e.origin
      )
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false)
    console.log('Sending message: %o', 'github')
    window.opener.postMessage('authorizing:github', '*')
    })()
  </script></body></html>`;
}

const oauth2 = simpleOauth.create({
  client: {
    id: credentials.client_id,
    secret: credentials.client_secret
  },
  auth: {
    tokenHost: credentials.git_hostname || 'https://github.com',
    tokenPath: credentials.token_path || '/login/oauth/access_token',
    authorizePath: credentials.authorize_path || '/login/oauth/authorize'
  }
});

const oauthApp = express();

oauthApp.get('/auth', (req, res) => {
  const authorizationUri = oauth2.authorizationCode.authorizeURL({
    redirect_uri: credentials.redirect_url,
    scope: credentials.scopes || 'repo,user',
    state: randomstring.generate(32)
  });

  res.redirect(authorizationUri);
});

oauthApp.get('/callback', (req, res) => {
  const options: any = {
    code: req.query.code
  };

  if (oauth_provider === 'gitlab') {
    options.client_id = credentials.client_id;
    options.client_secret = credentials.client_secret;
    options.grant_type = 'authorization_code';
    options.redirect_uri = credentials.redirect_url;
  }

  return oauth2.authorizationCode
    .getToken(options)
    .then(result => {
      const token = oauth2.accessToken.create(result);
      return res.send(
        getScript('success', {
          token: token.token.access_token as string,
          provider: oauth_provider
        })
      );
    })
    .catch(error => {
      console.error('Access Token Error', error.message);
      res.send(getScript('error', error));
    });
});

oauthApp.get('/success', (req, res) => {
  res.send('');
});

oauthApp.get('/', (req, res) => {
  res.redirect(301, `/oauth/auth`);
});

export const oauth = functions
  .region('europe-west2')
  .https.onRequest(oauthApp);
