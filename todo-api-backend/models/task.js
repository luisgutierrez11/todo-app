const mongoose = require('mongoose')

// Esquema de la colección "Task"
// Define cómo se almacenan las tareas en MongoDB.
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true // El título es obligatorio
  },
  done: Boolean // Estado de la tarea (completada o no)
})

// Configuración para modificar el formato del JSON que devuelve Mongoose
// Reemplaza _id por id y oculta __v
// Esto ordena el objeto final y lo hace más amigable al frontend.
taskSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// Modelo Task basado en el esquema definido
const Task = mongoose.model('Task', taskSchema)

module.exports = Task