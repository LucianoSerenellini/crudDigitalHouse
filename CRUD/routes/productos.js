const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController');

// formulario de creación, en este caso de productos
router.get('/crear', productController.crear);
router.post('/crear', productController.store);


// formulario de edición, en este caso de productos
router.get('/editar/:id', productController.editar);
router.post('/editar/:id', productController.update);

// eliminar
router.get('/eliminar/:id', productController.eliminar);

// ver lista de productos
router.get('/lista', productController.lista);


module.exports = router;