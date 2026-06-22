const postsService = require("../services/postsServices");

// GET ALL
const getAll = async (req, res) => {
  try {
    const posts = await postsService.getAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener posts" });
  }
};

// GET BY ID
const getById = async (req, res) => {
  try {
    const post = await postsService.getById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post no encontrado" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener post" });
  }
};

// GET BY AUTHOR
const getByAuthor = async (req, res) => {
  try {
    const posts = await postsService.getByAuthor(req.params.authorId);
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener posts del autor" });
  }
};

// CREATE
const create = async (req, res) => {
  try {
    const post = await postsService.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: "Error al crear post" });
  }
};

// UPDATE
const update = async (req, res) => {
  try {
    const post = await postsService.update(req.params.id, req.body);
    if (!post) return res.status(404).json({ error: "Post no encontrado" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar post" });
  }
};

// DELETE
const remove = async (req, res) => {
  try {
    await postsService.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar post" });
  }
};

module.exports = {
  getAll,
  getById,
  getByAuthor,
  create,
  update,
  remove,
};