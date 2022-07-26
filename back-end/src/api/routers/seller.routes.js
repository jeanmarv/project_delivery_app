const { Router } = require('express');
const { getAllSeller } = require('../controllers/seller.controller');
const validateToken = require('../middlewares/token.auth');

const router = Router();

router.get('/seller', validateToken, getAllSeller);

module.exports = router; 
