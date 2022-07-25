const { Router } = require('express');
const { getAllUsers, registerUser, deleteUser } = require('../controllers/admin.controller');
const validateToken = require('../middlewares/token.auth');
const { validateEmail, validatePassword, validateName} = require ('../middlewares/userValidation');

const router = Router();
const adminRota = '/admin/manage';

router.get(adminRota, validateToken, getAllUsers);
router.post(adminRota, validateEmail, validatePassword, validateName, validateToken, registerUser);
router.delete(adminRota, validateToken, deleteUser);

module.exports = router;