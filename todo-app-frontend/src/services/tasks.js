import { fetchJSON } from '../utils/api'

// Base URL del endpoint de tareas
const baseUrl = '/api/tasks'

// Obtiene todas las tareas desde el backend
const getAll =  () => fetchJSON(baseUrl) 

// Crea una nueva tarea enviando solo el título
const create = async title => fetchJSON(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title })
      })

      // Actualiza una tarea existente usando su ID y el objeto actualizado
const update = async (id, newObject) => fetchJSON(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
        },
      body: JSON.stringify(newObject)
    })

// Borra una tarea según su ID
const erase = async id => fetchJSON(`${baseUrl}/${id}`, {
      method: "DELETE"
    })

// Exporta todas las funciones agrupadas
export default { getAll, create, update, erase }