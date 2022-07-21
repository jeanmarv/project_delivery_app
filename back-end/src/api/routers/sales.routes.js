const { Router } = require('express');
const salesController = require('../controllers/sales.controller');

const router = Router();

router.post('/seller/orders', salesController.createSalesController);
router.get('/seller/orders', salesController.getAllSalesController);
router.get('/seller/orders/:id', salesController.getSalesByIdController);
router.put('/seller/orders/:id', salesController.updateStatusSalesController);


module.exports = router; 