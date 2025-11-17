const tasksRouter = require('express').Router()
const Task = require('../models/task')

// Obtener todas las tareas
// Busca todas las tareas en la base de datos y las devuelve en formato JSON.
tasksRouter.get('/', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.json(tasks)
    } catch (err) {
        // Error de servidor al consultar la base de datos
        res.status(500).json({ error: "Error al obtener las tareas" })
    }
})

// Crear nueva tarea
// Valida que el título exista y luego crea una instancia del modelo Task.
tasksRouter.post('/', async (req, res) => {
    try {
        const body = req.body

        // Validación: el título no puede ser vacío
        if (!body.title || body.title.trim() === "")
        return res.status(400).json({ error: 'title missing' })

        // Nueva tarea con estado inicial "done: false"
        const task = new Task({
            title: body.title,
            done: false
        })

        // Guardar en la base de datos
        const savedTask = await task.save()
        console.log(savedTask ? savedTask : "Fallo al guardar")
        res.status(201).json(savedTask)
    } catch (err) {
        console.error("Error al guardar:", err.message)
        res.status(400).json({ error: "Error al guardar la tarea" })
    }
})


// Actualizar tarea
// Recibe un ID y actualiza los campos title y done.
tasksRouter.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title: req.body.title, done: req.body.done },
            { new: true, runValidators: true } // new: retorna la tarea actualizada
        )
        res.json(updatedTask)
    } catch (err) {
        console.error("Error al actualizar: ", err.message)
        res.status(400).json({ error: "Error al actualizar la tarea" })
    }
})

// Eliminar tarea
// Borra la tarea cuyo ID se recibe por parámetro.
tasksRouter.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.status(204).end() // 204 = eliminado sin contenido
    } catch (err) {
        console.error("Error al eliminar:", err.message)
        res.status(400).json({ error: "Error al eliminar la tarea" })
    }
})

module.exports = tasksRouter