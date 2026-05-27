import { useState } from 'react'
import Button from './Button'
import Card from './Card'

function TaskForm({ onAgregarTarea }) {
  const [titulo, setTitulo] = useState('')

  function manejarSubmit(e) {
    e.preventDefault()
    if (!titulo.trim()) return
    onAgregarTarea(titulo.trim())
    setTitulo('')
  }

  return (
    <Card>
      <h2 className="section-title">Nueva tarea</h2>
      <form className="task-form" onSubmit={manejarSubmit}>
        <div className="task-form-bar">
          <input
            type="text"
            placeholder="Escribe el título de la tarea..."
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <Button label="Agregar" variante="primary" icono="+" />
        </div>
      </form>
    </Card>
  )
}

export default TaskForm
