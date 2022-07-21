const { Router } = require('express');
const { getAllUsers, registerUser, deleteUser } = require('../controllers/admin.controller');
const validateToken = require('../middlewares/token.auth');

const router = Router();

router.get('/admin/manage', validateToken, getAllUsers);
router.post('/admin/manage', validateToken, registerUser);
router.delete('/admin/manage', validateToken, deleteUser);

module.exports = router;