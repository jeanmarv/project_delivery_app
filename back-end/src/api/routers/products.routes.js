const { Router } = require('express');
const productController = require('../controllers/product.controller');

const router = Router();

router.get('/products', productController);

module.exports = router;
