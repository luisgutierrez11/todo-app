const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const tasksRouter = require('./controllers/tasks')
const config = require('./utils/config')

const middleware = require('./utils/middleware')
const logger = require('./utils/logger')

// Configura Mongoose para evitar warnings del modo estricto
mongoose.set('strictQuery', false)

// Intento de conexión a MongoDB Atlas utilizando la URI del archivo de configuración
logger.info('connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((err) => {
    logger.error('error connecting to MongoDB:', err.message)
  })

// Middleware para convertir automáticamente JSON en objetos JS
app.use(express.json())

// Habilita CORS para permitir que el frontend acceda al backend
app.use(cors())

// Servir frontend
app.use(express.static('dist'))

// Middleware personalizado para registrar las solicitudes entrantes
app.use(middleware.requestLogger)

// Ruta raíz opcional (útil al entrar al backend desde el navegador)
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de Tareas 🚀")
})

// Rutas principales del proyecto (controlador de tasks)
app.use('/api/tasks', tasksRouter)

// Middleware para manejar errores lanzados por rutas o controladores
app.use(middleware.errorHandler)

// Middleware que responde si la ruta no existe
app.use(middleware.unknownEndpoint)

module.exports = app

