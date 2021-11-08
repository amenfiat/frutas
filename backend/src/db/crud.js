const db = require('./firebase.js');

// CRUD Users
// Get all users

function getUsers(){
    db.collection("users").get().then((documentos) => {
        documentos.forEach((usuarios) => {
            console.log(usuarios.data());
        })
    });
}

module.exports = getUsers;
