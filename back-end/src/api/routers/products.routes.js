const { Router } = require('express');
const { getProducts, getProductById } = require('../controllers/product.controller');
const validateToken = require('../middlewares/token.auth');

const router = Router();

router.get('/products', validateToken, getProducts);
router.get('/products/:id', validateToken, getProductById);

module.exports = router;
