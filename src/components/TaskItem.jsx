import { useState, useRef, useEffect } from 'react'
import Badge from './Badge'
import Button from './Button'

function TaskItem({ tarea, onCompletar, onEliminar, onEditarTitulo }) {
  const [editando, setEditando] = useState(false)
  const [inputValue, setInputValue] = useState(tarea.title)
  const inputRef = useRef(null)

  useEffect(() => {
    if (editando && inputRef.current) {
      inputRef.current.focus()
    }
  }, [editando])

  function guardarEdicion() {
    const nuevoTitulo = inputValue.trim()
    if (nuevoTitulo && nuevoTitulo !== tarea.title) {
      onEditarTitulo(tarea.id, nuevoTitulo)
    }
    setEditando(false)
  }

  function manejarKeyDown(e) {
    if (e.key === 'Enter') guardarEdicion()
    if (e.key === 'Escape') {
      setInputValue(tarea.title)
      setEditando(false)
    }
  }

  const estadoBadge = tarea.completed ? 'completada' : 'pendiente'

  return (
    <div className={`task-item${tarea.completed ? ' completada' : ''}`}>
      <div className="task-info">
        {editando ? (
          <input
            ref={inputRef}
            className="task-input-edicion"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={guardarEdicion}
            onKeyDown={manejarKeyDown}
          />
        ) : (
          <span
            className={`task-title${tarea.completed ? ' tachado' : ''}`}
            onDoubleClick={() => setEditando(true)}
            title="Doble clic para editar"
          >
            {tarea.title}
          </span>
        )}
      </div>
      <div className="task-actions">
        <Badge
          estado={estadoBadge}
          onClick={() => onCompletar(tarea.id)}
        />
        <Button
          label={tarea.completed ? 'Reabrir' : 'Completar'}
          variante={tarea.completed ? 'secondary' : 'success'}
          icono={tarea.completed ? '↩' : '✓'}
          onClick={() => onCompletar(tarea.id)}
        />
        <Button
          label="Eliminar"
          variante="danger"
          icono="✕"
          onClick={() => onEliminar(tarea.id)}
        />
      </div>
    </div>
  )
}

export default TaskItem
