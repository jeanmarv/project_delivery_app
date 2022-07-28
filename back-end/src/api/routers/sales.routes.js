const { Router } = require('express');
const salesController = require('../controllers/sales.controller');
const validateToken = require('../middlewares/token.auth');

const router = Router();

router.post('/seller/orders', validateToken, salesController.createSalesController);
router.get('/seller/orders', validateToken, salesController.getAllSellerSalesController);
router.get('/custumer/orders', validateToken, salesController.getAllCustumerSalesController);
router.get('/seller/orders/:id', validateToken, salesController.getSalesByIdController);
router.put('/seller/orders/:id', validateToken, salesController.updateStatusSalesController);

module.exports = router;
