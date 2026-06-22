const pool = require("../db");

// GET ALL
const getAll = async () => {
  const result = await pool.query(
    "SELECT * FROM posts ORDER BY id DESC"
  );
  return result.rows;
};

// GET BY ID
const getById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM posts WHERE id = $1",
    [id]
  );
  return result.rows[0];
};

// GET BY AUTHOR
const getByAuthor = async (authorId) => {
  const result = await pool.query(
    "SELECT * FROM posts WHERE author_id = $1 ORDER BY created_at DESC",
    [authorId]
  );
  return result.rows;
};

// CREATE
const create = async ({ author_id, title, content, published }) => {
  const result = await pool.query(
    `INSERT INTO posts (author_id, title, content, published)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [author_id, title, content, published]
  );
  return result.rows[0];
};

// UPDATE
const update = async (id, { title, content, published }) => {
  const result = await pool.query(
    `UPDATE posts
     SET title=$1, content=$2, published=$3
     WHERE id=$4
     RETURNING *`,
    [title, content, published, id]
  );
  return result.rows[0];
};

// DELETE
const remove = async (id) => {
  await pool.query("DELETE FROM posts WHERE id = $1", [id]);
};

module.exports = {
  getAll,
  getById,
  getByAuthor,
  create,
  update,
  remove,
};