const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts')
const mergeController = require('../controllers/lists')

router.get('/', (req,res) => {
  res.status(200).send("hello world")
})
router.get('/getpost', postController.getPost)

router.get('/merge', mergeController.mergePost)




module.exports = router;