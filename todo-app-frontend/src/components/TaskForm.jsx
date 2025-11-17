import { useState } from "react";

const TaskForm = ({createTask}) => {
  // Estado local para el input
  const [newTask, setNewTask] = useState('')

  // Maneja el envío del formulario
  const addTask = (event) => {
    event.preventDefault()

    // Validación: no permitir strings vacíos
    if (!newTask.trim()) return

    // Crear la tarea mediante función recibida por props
    createTask(newTask)

    // Limpiar el input
    setNewTask('')
  }

  return(
    <>
      <form onSubmit={addTask} className="d-flex gap-2">
        <input 
          type="text"
          className="form-control"
          placeholder="Escribe una nueva tarea..."
          value={newTask}
          onChange={event => setNewTask(event.target.value)}
        />
        <button type="submit" className="btn btn-primary px-4">
          Agregar
        </button>
      </form>
    </>
  )
}

export default TaskForm