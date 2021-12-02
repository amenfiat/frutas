const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key'); //* => Firebase KEY

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const dbF = admin.firestore();

module.exports = dbF;
