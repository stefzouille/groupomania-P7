const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth');

const postCtrl = require('../controllers/post_controller');

// creer routes pour les posts
router.get('/', postCtrl.getAll);
router.get('/:id', postCtrl.getOne);
router.get("/published", postCtrl.getAllPublished);
router.post('/', postCtrl.create);
//id du post pas de l user !!
router.put('/:id', postCtrl.update);
router.delete('/:id', postCtrl.deleteOne);
router.delete('/', postCtrl.deleteAll);

module.exports = router;