import { useEffect, useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskItem from "./components/TaskItem"
import taskService from "./services/tasks"

// Indagar en loader/spinner, agregar ultimos detalles (filtros, más estilos, etc.)          
const App = () => {
  // Estado principal que contiene todas las tareas
  const [tasks, setTasks] = useState([])

  // Carga inicial de datos al montar el componente
  useEffect(() => {
    taskService.getAll()
      .then(data => setTasks(data))
  }, []) 

  // Crear una nueva tarea
  const addTask = async (title) => {
    try{
      // Llama al backend para crear la tarea
      const newTask = await taskService.create(title)
      // Agrega la nueva tarea al estado local
      setTasks(tasks.concat(newTask))
    }catch(err){
      console.error(err,err.message)
    }
    
  }  

  // Cambiar el estado 'done' de una tarea
  const toggleTaskDone = async id => {
    // Buscar tarea original
    const task = tasks.find(t => t.id === id)
    // Crear una copia cambiando su estado
    const changedTask = { ...task, done: !task.done }

    // Actualizar en backend
    const updatedTask = await taskService.update(id, changedTask)

    // Reemplazar la tarea en el estado
    const updatedTasks = tasks.map(t => t.id !== id ? t : updatedTask)
    setTasks(updatedTasks)
  }

  // Eliminar tarea por ID
  const removeTask = async id => {
    const response = await taskService.erase(id)
    if(response) {
      const updatedTasks = tasks.filter(t => t.id !== id)
      setTasks(updatedTasks)
    }
  }


  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 text-primary fw-bold">📝 To Do App</h1>

      {/* Formulario para crear nuevas tareas */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">          
          <TaskForm createTask={addTask}  />
        </div>
      </div>

      {/* Lista de tareas */}
      <ul className="list-group mb-4">
        {tasks.length === 0 ? (
          <p className="text-center text-muted mt-3">No hay tareas pendientes.</p>
        ) : (
          tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTaskDone={() => toggleTaskDone(task.id)}
              removeTask={() => removeTask(task.id)}
            />
          ))
        )}
      </ul>

      {/* Botón para limpiar toda la lista */}
      {tasks.length > 0 && (
        <div className="text-center">
          <button
            onClick={() => setTasks([])}
            className="btn btn-outline-secondary mt-3"
          >
            Limpiar todo
          </button>
        </div>
      )}

      <footer className="text-center mt-4 text-muted small">Luis Gutierrez App</footer>
    </div>
  )
}

export default App