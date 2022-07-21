const { Router } = require('express');
const { getProducts, getProductById } = require('../controllers/product.controller');

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductById);

module.exports = router;
