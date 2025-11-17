const TaskItem = ({task, toggleTaskDone, removeTask}) => {
    
    return(
        <>
            <li 
                className={`list-group-item d-flex justify-content-between 
                    align-items-center`}
            >
                {/* Bloque izquierdo: checkbox + título */}
                <div className={`d-flex align-items-center gap-2 
                        ${task.done ? 'bg-light text-muted text-decoration-line-through' : ''}`}
                    >
                    <input
                    type="checkbox"
                    className="form-check-input"
                    checked={task.done}
                    onChange={toggleTaskDone}
                    />
                    <span>{task.title}</span>
                </div>

                {/* Botón para eliminar tarea */}
                <button
                    onClick={removeTask}
                    className="btn btn-sm btn-outline-danger rounded-circle"
                    title="Eliminar tarea"
                >
                    ✕
                </button>
            </li>
        </>
    )
}

export default TaskItem