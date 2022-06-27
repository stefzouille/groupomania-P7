const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth');

const postCtrl = require('../controllers/post_controller');

// creer routes pour les posts
// router.get('/', postCtrl.getAll);
// router.get('/:id', postCtrl.getOne);
router.post('/', postCtrl.create);
// router.put('/:id', postCtrl.update);
// router.delete('/:id', postCtrl.delete);

module.exports = router;