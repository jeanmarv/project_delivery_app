const { Router } = require('express');
const { getAllUsers, registerUser, deleteUser } = require('../controllers/admin.controller');
const validateToken = require('../middlewares/token.auth');

const router = Router();
const adminRota = '/admin/manage';

router.get(adminRota, validateToken, getAllUsers);
router.post(adminRota, validateToken, registerUser);
router.delete(adminRota, validateToken, deleteUser);

module.exports = router;