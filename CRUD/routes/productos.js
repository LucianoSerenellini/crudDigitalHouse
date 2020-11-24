const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController');

// formulario de creación, en este caso de productos
router.get('/crear', productController.crear);
router.post('/crear', productController.store);


module.exports = router;