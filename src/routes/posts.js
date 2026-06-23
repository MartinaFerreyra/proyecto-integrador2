const express = require("express");
const router = express.Router();

const postsController = require("../controllers/postsController");
const { validatePost, validatePostUpdate } = require("../middlewares/validation");

// GET ALL
router.get("/", postsController.getAll);
// GET BY ID
router.get("/:id", postsController.getById);

// GET BY AUTHOR
router.get("/author/:authorId", postsController.getByAuthor);

// CREATE
router.post("/", validatePost, postsController.create);

// UPDATE
router.put("/:id", validatePostUpdate, postsController.update);

// DELETE
router.delete("/:id", postsController.remove);

module.exports = router;