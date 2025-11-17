# To-Do App — Backend

Backend construido con **Node.js**, **Express** y **MongoDB Atlas**, siguiendo la estructura clásica utilizada en tus otros proyectos backend. Maneja almacenamiento, actualización y eliminación de tareas.

## Tecnologías y librerías

- **Node.js** + **Express**
- **MongoDB Atlas** como base de datos
- **Mongoose** para modelos y validación
- **cors** para permitir requests desde el frontend
- **dotenv** para configuración de variables de entorno

## Estructura del proyecto

```
backend/
├── controllers/
│   └── tasks.js
├── models/
│   └── task.js
├── utils/
│   ├── logger.js
|   ├── config.js
│   └── middleware.js
├── app.js
├── index.js
├── .env (no incluido)
└── package.json
```

## Endpoints

El backend expone la API en `/api/tasks`.

### **GET /api/tasks**

Devuelve un array con todas las tareas guardadas.

### **POST /api/tasks**

Crea una nueva tarea.
Body esperado:

```json
{
  "title": "Texto de la tarea"
}
```

### **PUT /api/tasks/:id**

Actualiza una tarea existente (por ejemplo, cambiar el campo `completed`).

### **DELETE /api/tasks/:id**

Elimina una tarea por su ID.

## Model

### **Task.js**

Ejemplo de estructura básica del modelo:

```js
{
   title: {
      type:String,
      required: true
   },
   completed: Boolean
}
```

Puedes tener validaciones adicionales según tu implementación.

## Configuración

Crear un archivo `.env` en la carpeta `backend` con:

```
MONGODB_URI=tu_uri_de_mongo
PORT=3001
```

## Scripts

```bash
npm install   # instalar dependencias
npm start     # iniciar servidor
nodemon index.js  # si usas nodemon en desarrollo
```

## Mejoras pendientes

- Implementar autenticación (JWT)
- Tests con Jest + Supertest
- Validaciones más robustas en el modelo
- Mejor manejo de errores y middlewares
- División más clara de controladores según crezca el proyecto

## Notas

El backend está diseñado para funcionar con el frontend del proyecto, pero puede utilizarse de forma independiente como API REST. Asegurate de permitir CORS si tu frontend está en otro dominio.
