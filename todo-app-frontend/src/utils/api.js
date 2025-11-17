// Helper genérico para hacer peticiones y obtener JSON
// Simplifica el uso de fetch en toda la app
export const fetchJSON = async (url, options = {}) => {
  const res = await fetch(url, options)

  // Si la respuesta no es exitosa, lanza un error
  if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)

  // En un DELETE no se espera JSON, así que devolvemos true
  if(options.method === 'DELETE') return true

  // En el resto de los casos parseamos la respuesta como JSON
  return res.json()
}