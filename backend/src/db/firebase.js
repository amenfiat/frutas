const admin = require("firebase-admin");
var serviceAccount = "";
try {
  serviceAccount = require("./frutasexportacion-9c6db-414d96644e62.json"); //* => Firebase KEY
} catch (error) {
  console.log("File not found, so use environment variables");
  serviceAccount = {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  };
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const dbF = admin.firestore();

module.exports = dbF;
