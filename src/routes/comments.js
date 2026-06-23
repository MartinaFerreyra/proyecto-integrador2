const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/commentsController')
const { validateComment } = require('../middlewares/validation')

router.get('/post/:postId', commentsController.getByPost)
router.post('/',            validateComment, commentsController.create)

module.exports = router