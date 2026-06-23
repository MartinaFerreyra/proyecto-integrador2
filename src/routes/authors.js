const express = require("express");
const router = express.Router();

const authorsController = require("../controllers/authorsController");
const { validateAuthor } = require("../middlewares/validation");

// GET
router.get("/", authorsController.getAll);
router.get("/:id", authorsController.getById);

// CREATE (AQUÍ ESTÁ EL ERROR)
router.post("/", validateAuthor, authorsController.create);

// UPDATE (recomendado también validar)
router.put("/:id", validateAuthor, authorsController.update);

// DELETE
router.delete("/:id", authorsController.remove);

module.exports = router;