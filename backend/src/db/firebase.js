const admin = require('firebase-admin');
const serviceAccount = require('./frutasexportacion-9c6db-414d96644e62.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;