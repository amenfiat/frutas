const admin = require("firebase-admin");
const serviceAccount = require("./frutasexportacion-9c6db-414d96644e62.json"); //* => Firebase KEY

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const dbF = admin.firestore();

module.exports = dbF;
