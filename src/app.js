require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// rutas
const authorsRoutes = require('./routes/authors')
const postsRoutes = require('./routes/posts')

app.use('/authors', authorsRoutes)
app.use('/posts', postsRoutes)

// health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' })
})

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Error interno del servidor' })
})

module.exports = app