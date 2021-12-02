const admin = require("firebase-admin");
var serviceAccount = "";
try {
  serviceAccount = require("./frutasexportacion-9c6db-414d96644e62.json"); //* => Firebase KEY
} catch (error) {
  console.log("File not found, so use environment variables");
  serviceAccount = JSON.parse(process.env.SERVICEACCOUNT);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const dbF = admin.firestore();

module.exports = dbF;
