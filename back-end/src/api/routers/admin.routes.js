const { Router } = require('express');
const adminController = require('../controllers/admin.controller');
const validateToken = require('../middlewares/token.auth');

const router = Router();

router.get('/admin/manage', validateToken, adminController.getAllUsers);
router.post('/admin/manage', validateToken, adminController.registerUser);
router.delete('/admin/manage', validateToken, adminController.deleteUser);

module.exports = router;