const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');

// creér routes POST pour les users 
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/:id', userCtrl.delete);
router.put('/:id', userCtrl.update);




module.exports = router;