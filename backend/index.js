// Traer todas las funciones en un objeto
const dbF = require('./src/db/crud.js');
const express = require('express');
const app = express();
const port = 3000;

// las peticiones deben estar antes de iniciar el servidor

app.use(express.json()); // le decimos a express que use json para las configuraciones

/**
 *  CRUD DEL PROYECTO
 */

// De la coleccion fruits

// Crear una fruta en la bd
app.post('/fruits/add', function(req, res){
    const fruit = req.body;
    dbF.addFruit(fruit, function(status){
        res.json(status);
    })
})

// Traer todos las frutas
app.get('/fruits', function(req,res){
    dbF.getFruits(function(arrayFruits){
        res.json(arrayFruits)
    })
})

// Trae una fruta por nombre
app.get('/fruits/search/:name', function(req, res){
    const name = req.params.name;
    dbF.searchFruitByName(name, function(fruit){
        res.json(fruit);
    })
})

// Actualizar totalmente una fruta por id
app.put('/fruits/:id', function(req, res){
    const uid = req.params.id;
    const fruit = req.body;
    dbF.updateFruitTotal(uid, fruit, function(status){
        res.json(status);
    })
})

// Actualizar parcialmente una fruta por id
app.patch('/fruits/:id', function(req, res){
    const uid = req.params.id;
    const fruit = req.body;
    dbF.updateFruitPartial(uid, fruit, function(status){
        res.json(status);
    })
})

// Borrar una fruta de la bd
app.delete('/fruits/:id', function(req, res){
    const uid = req.params.id;
    dbF.deleteFruit(uid, function(status){
        res.json(status);
    })
})

// De la coleccion buyers

// Crear un buyer en la bd
app.post('/buyers/add', function(req, res){
    const buyer = req.body;
    dbF.addBuyer(buyer, function(status){
        res.json(status);
    })
})

// Traer todos los buyers
app.get('/buyers', function(req,res){
    dbF.getBuyers(function(arrayBuyers){
        res.json(arrayBuyers)
    })
})

// Trae un buyer por nombre
app.get('/buyers/search/:names', function(req, res){
    const names = req.params.names;
    dbF.searchBuyersByName(names, function(buyer){
        res.json(buyer);
    })
})

// Actualizar totalmente un buyer por id
app.put('/buyers/:id', function(req, res){
    const uid = req.params.id;
    const buyer = req.body;
    dbF.updateBuyerTotal(uid, buyer, function(status){
        res.json(status);
    })
})

// Actualizar parcialmente un buyer por id
app.patch('/buyers/:id', function(req, res){
    const uid = req.params.id;
    const buyer = req.body;
    dbF.updateBuyerPartial(uid, buyer, function(status){
        res.json(status);
    })
})

// Borrar un buyer de la bd
app.delete('/buyers/:id', function(req, res){
    const uid = req.params.id;
    dbF.deleteBuyer(uid, function(status){
        res.json(status);
    })
})

// De la coleccion paymentDetails

// Agregar un detalle de compra
app.post('/paymentDetails/add', function(req, res){
    const paymentDetails = req.body;
    dbF.addPaymentDetails(paymentDetails, function(status){
        res.json(status);
    })
})

// Leer todos los detalles de compra
app.get('/paymentDetails', function(req,res){
    dbF.getPaymentDetails(function(arrayPaymentDetails){
        res.json(arrayPaymentDetails)
    })
})

// Buscar un detalle de compra por nombre                       //------------------------------
app.get('/paymentDetails/search/:fullName', function(req, res){
    const name = req.params.fullName;
    dbF.searchPaymentDetails(name, function(paymentDetails){
        res.json(paymentDetails);
    })
})

// Actualizar totalmente un detalle de compra por id
app.put('/paymentDetails/:id', function(req, res){
    const uid = req.params.id;
    const paymentDetails = req.body;
    dbF.updatePaymentDetailsTotal(uid, paymentDetails, function(status){
        res.json(status);
    })
})

// Actualizar parcialmente un detalle de compras por id
app.patch('/paymentDetails/:id', function(req, res){
    const uid = req.params.id;
    const paymentDetails = req.body;
    dbF.updatePaymentDetailsPartial(uid, paymentDetails, function(status){
        res.json(status);
    })
})

// Borrar un detalle de compra por id
app.delete('/paymentDetails/:id', function(req, res){
    const uid = req.params.id;
    dbF.deletePaymentDetails(uid, function(status){
        res.json(status);
    })
})

/*Cart */
// Agregar un carrito de compra
app.post('/cart/add', function(req, res){
    const cart = req.body;
    dbF.addCart(cart, function(status){
        res.json(status);
    })
})

// Consultar todos los carritos de compra ???
app.get('/cart', function(req,res){
    dbF.getCart(function(arrayCart){
        res.json(arrayCart)
    })
})

// Consultar un carrito de compra por nombre
app.get('/cart/search/:buyer', function(req, res){
    const name = req.params.buyer;
    dbF.searchCart(name, function(cart){
        res.json(cart);
    })
})

// Actualizar totalmente un carrito de compra por id
app.put('/cart/:id', function(req, res){
    const uid = req.params.id;
    const cart = req.body;
    dbF.updateCartTotal(uid, cart, function(status){
        res.json(status);
    })
})

// Actualizar parcialmente un carrito de compras por id
app.patch('/cart/:id', function(req, res){
    const uid = req.params.id;
    const cart = req.body;
    dbF.updateCartPartial(uid, cart, function(status){
        res.json(status);
    })
})

// Borrar un carrito de compras por id
app.delete('/cart/:id', function(req, res){
    const uid = req.params.id;
    dbF.deleteCart(uid, function(status){
        res.json(status);
    })
})

// Bandera para indicar que el servidor está corriendo
app.listen(port,() => {
    console.log('Running on port ' + port);
})