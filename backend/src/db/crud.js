const dbF = require('./firebase.js');

/**
 *  CRUD DEL PROYECTO
 */
// De la coleccion fruits

// Crear una fruta en la bd
function addFruit(fruit, callback){
    return dbF.collection("fruits").add(fruit)
    .then(() => {
        callback("Success");
    })
    .catch((error) => {
        callback(`Error to add fruit ${error}`)
    })
}

// Del proyecto - Trae todas las frutas
function getFruits(callback){
    return dbF.collection("fruits").get()
        .then((docs) => {
        var arrayFruits = []
        docs.forEach((fruits) => {
            arrayFruits.push(fruits.data());
        })
        // cuando llegamos aquí, se deve enviar la respuesta al GET REQUEST
        callback(arrayFruits);
    });
}

// Del proyecto - Trae una fruta por nombre
function searchFruitByName(fruit, callback){
    return dbF.collection('fruits').where("name", "==", fruit).get()
    .then((fruits) => {
        var arrayFruits = [];
        fruits.forEach(fruit => {                
            arrayFruits.push(fruit.data());
        })
        callback(arrayFruits);
    })
    .catch((error) => {
        callback(`Error to search fruit ${error}`)
    })
}

// Actualizar una fruta totalmente por id
function updateFruitTotal(uid, fruit, callback){
    return dbF.collection("fruits").doc(uid).set(fruit)
    .then(() => {
        callback("Success");
    })
    .catch((error) => {
        console.log(`Error to update fruit ${error}`);
    })
}

// Actualizar una fruta parcialmente por id
function updateFruitPartial(uid, fruit, callback){
    return dbF.collection("fruits").doc(uid).update(fruit)
    .then(() => {
        callback("Success");
    })
    .catch((error) => {
        console.log(`Error to update fruit ${error}`);
    })
}

// Borrar una fruta de la bd por id
function deleteFruit(uid, callback){
    return dbF.collection("fruits").doc(uid).delete()
    .then(() => {
        callback("Success")
    })
    .catch((error) => {
        console.log(`Error to delete fruit ${error}`);
    })
}

// De la coleccion buyers

// Crear un buyer en la bd
function addBuyer(buyer, callback){ // buyer = objeto con datos del comprador
    return dbF.collection("buyers").add(buyer)
    .then(() => {
        callback("Success");
    })
    .catch((error) => {
        callback(`Error to add buyers ${error}`)
    })
}

// Trae todos los buyers
function getBuyers(callback){
    return dbF.collection("buyers").get()
        .then((docs) => {
        var arrayBuyers = []
        docs.forEach((buyers) => {
            arrayBuyers.push(buyers.data());
        })
        callback(arrayBuyers);
    });
}

// Trae un Buyer por nombre
function searchBuyersByName(buyerName, callback){
    return dbF.collection('buyers').where("names", "==", buyerName).get()
    .then((buyers) => {
        var arrayBuyers = [];
        buyers.forEach(buyer => {                
            arrayBuyers.push(buyer.data());
        })
        callback(arrayBuyers);
    })
    .catch((error) => {
        callback(`Error to search buyer ${error}`)
    })
}

// Actualizar un buyer totalmente por id
function updateBuyerTotal(uid, buyer, callback){ // uid = unique id  
    return dbF.collection("buyer").doc(uid).set(buyer)
    .then(() => {
        callback("Success");
    })
    .catch((error) => {
        console.log(`Error to update buyer ${error}`);
    })
}

// Actualizar un buyer parcialmente
function updateBuyerPartial(uid, buyer, callback){ // uid = unique id
    return dbF.collection("buyers").doc(uid).update(buyer)
    .then(() => {
        callback("Success");
    })
    .catch((error) => {
        console.log(`Error to update buyer ${error}`);
    })
}

// Borrar un buyer de la bd por id
function deleteBuyer(uid, callback){
    return dbF.collection("buyers").doc(uid).delete()
    .then(() => {
        callback("Success")
    })
    .catch((error) => {
        console.log(`Error to delete buyer ${error}`);
    })
}

// --------------

// De la coleccion de paymentDetails

// Agregar un nuevo detalle de compra
function addPaymentDetails(paymentDetails, callback){
    return dbF.collection("paymentDetails").add(paymentDetails)
    .then(() => {
        callback("Success");
    })
    .catch((error) => {
        callback(`Error to add Payment Details ${error}`)
    })
}

// Leer todos los detalles de compra ??? PARA REVISAR
function getPaymentDetails(callback){
    return dbF.collection("paymentDetails").get()
        .then((docs) => {
        var arrayPaymentDetails = []
        docs.forEach((paymentDetails) => {
            arrayPaymentDetails.push(paymentDetails.data());
        })
        callback(arrayPaymentDetails);
    });
}

// Leer un detalle de compra por nombre
function searchPaymentDetails(fullName, callback){
    return dbF.collection('paymentDetails').where("fullName", "==", fullName).get()
    .then((paymentDetails) => {
        var arrayPaymentDetails = [];
        paymentDetails.forEach(paymentDetail => {                
            arrayPaymentDetails.push(paymentDetail.data());
        })
        callback(arrayPaymentDetails);
    })
    .catch((error) => {
        callback(`Error to search Payment Details ${error}`)
    })
}

// Actualizar totalmente un detalle de compra por id
function updatePaymentDetailsTotal(uid, paymentDetails, callback){
    return dbF.collection("paymentDetails").doc(uid).set(paymentDetails)
    .then(() => {
        callback("Success");
    })
    .catch((error) => {
        console.log(`Error to update Payment Details ${error}`);
    })
}

// Actualizar parcialmente un detalle de compra por id
function updatePaymentDetailsPartial(uid, paymentDetails, callback){
    return dbF.collection("paymentDetails").doc(uid).update(paymentDetails)
    .then(() => {
        callback("Success");
    })
    .catch((error) => {
        console.log(`Error to update Payment Details ${error}`);
    })
}

// Borrar un detalle de compra por id
function deletePaymentDetails(uid, callback){
    return dbF.collection("paymentDetails").doc(uid).delete()
    .then(() => {
        callback("Success")
    })
    .catch((error) => {
        console.log(`Error to delete Payment Details ${error}`);
    })
}


/* Cart*/

// Crear un nuevo carrito de compra
function addCart(cart, callback){
    return dbF.collection("paymentDetails").add(cart)
    .then(() => {
        callback("Success");
    })
    .catch((error) => {
        callback(`Error to add cart ${error}`)
    })
}

// Leer todos los carritos de compra  ??? PARA REVISAR
function getCart(callback){
    return dbF.collection("cart").get()
        .then((docs) => {
        var arrayCart = []
        docs.forEach((cart) => {
            arraycart.push(cart.data());
        })
        
        callback(arrayCart);
    });
}

// Buscar un carrito de compra por nombre
function searchCart(cartName, callback){
    return dbF.collection('cart').where("buyer", "==", cartName).get()
    .then((carts) => {
        var arrayCart = [];
        carts.forEach(cart => {                
            arrayCart.push(cart.data());
        })
        callback(arrayCart);
    })
    .catch((error) => {
        callback(`Error to search cart ${error}`)
    })
}

// Actualizar totalmente un carrito de compra por id
function updateCartTotal(uid, cart, callback){
    return dbF.collection("cart").doc(uid).set(cart)
    .then(() => {
        callback("Success");
    })
    .catch((error) => {
        console.log(`Error to update cart ${error}`);
    })
}

// Actualizar parcialmente un carrito de compra por id
function updateCartPartial(uid, cart, callback){
    return dbF.collection("cart").doc(uid).update(cart)
    .then(() => {
        callback("Success");
    })
    .catch((error) => {
        console.log(`Error to update cart ${error}`);
    })
}

// Borrar un carrito de compra por id
function deleteCart(uid, callback){
    return dbF.collection("cart").doc(uid).delete()
    .then(() => {
        callback("Success")
    })
    .catch((error) => {
        console.log(`Error to delete cart ${error}`);
    })
}


module.exports = {
    searchFruitByName,
    getFruits,
    updateFruitTotal,
    updateFruitPartial,
    addFruit,
    deleteFruit,
    searchPaymentDetails,
    getPaymentDetails,
    updatePaymentDetailsTotal,
    updatePaymentDetailsPartial,
    addPaymentDetails,
    deletePaymentDetails,
    searchCart,
    getCart,
    updateCartTotal,
    updateCartPartial,
    addCart,
    deleteCart,
    searchBuyersByName,
    getBuyers,
    updateBuyerTotal,
    updateBuyerPartial,
    addBuyer,
    deleteBuyer
};

