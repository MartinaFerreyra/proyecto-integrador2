const express = require('express')
const router = express.Router()
const postsController = require('../controllers/postsController')

router.get('/',                 postsController.getAll)
router.get('/:id',              postsController.getById)
router.get('/author/:authorId', postsController.getByAuthor)
router.post('/',                postsController.create)
router.put('/:id',             postsController.update)
router.delete('/:id',           postsController.remove)

module.exports = router