# To-Do App — Frontend

Frontend construido con **React**, utilizando **Hooks**, **Fetch API** para comunicarse con el backend y **Bootstrap** para los estilos.

## Tecnologías y librerías

- **React** (funcional, Hooks)
- **Fetch API** para requests HTTP
- **Bootstrap** para estilos
- **Vite** como herramienta de desarrollo (si corresponde)

## Estructura del proyecto

```
frontend/
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   └── TaskItem.jsx
│   ├── services/
│   │   └── task.js
|   ├── utils/
|   |   └── api.js
│   └── App.jsx
├── index.html
└── package.json
```

## Componentes

### **App.jsx**

- Maneja el estado principal de las tareas.
- Carga inicial de tareas desde el backend.
- Renderiza `TaskForm` y la lista de `TaskItem`.

### **TaskForm.jsx**

- Formulario para crear nuevas tareas.
- Envía los datos al servicio `task.js`.

### **TaskItem.jsx**

- Representa una tarea individual.
- Permite marcarla como completada o eliminarla.

### **services/task.js**

- Contiene funciones para interactuar con el backend (`getAll`, `create`, `update`, `remove`).

## Scripts

```bash
npm install   # instalar dependencias
npm run dev   # entorno de desarrollo
npm run build # construir para producción
```

## Mejoras pendientes

- Loader visual mientras se realizan solicitudes
- Manejo de errores más claro en UI
- Filtros de tareas (completadas, activas, todas)
- Mejoras en diseño (componentes propios o uso de un framework más moderno)
- Implementar custom hooks para separar lógica

## Notas

El frontend asume que el backend corre en `http://localhost:3001` o la URL configurada en `task.js`. Ajustar según despliegue.
