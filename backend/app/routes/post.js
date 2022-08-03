const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const postCtrl = require('../controllers/post_controller');

// creer routes pour les posts
router.get('/', auth, postCtrl.getAll);
router.get('/:id', auth, postCtrl.getOne);
router.get("/published", auth, postCtrl.getAllPublished);
router.post('/', auth, postCtrl.create);
//id du post pas de l user !!
router.put('/:id', auth, postCtrl.update);
router.delete('/:id', auth, postCtrl.deleteOne);
router.delete('/', auth, postCtrl.deleteAll);



module.exports = router;