import Card from './Card'
import Button from './Button'
import TaskItem from './TaskItem'
import EmptyState from './EmptyState'

const FILTROS = [
  { valor: 'todas', label: 'Todas' },
  { valor: 'pendientes', label: 'Pendientes' },
  { valor: 'completadas', label: 'Completadas' },
]

function TaskList({ tareas, cargando, error, filtro, setFiltro, onCompletar, onEliminar, onEditarTitulo }) {
  if (cargando) {
    return (
      <Card>
        <p className="loading-text">Cargando tareas...</p>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <p className="error-text">Error: {error}</p>
      </Card>
    )
  }

  return (
    <Card>
      <h2 className="section-title">Lista de tareas</h2>

      <div className="filter-buttons">
        {FILTROS.map((f) => (
          <Button
            key={f.valor}
            label={f.label}
            variante={filtro === f.valor ? 'active' : 'outline'}
            onClick={() => setFiltro(f.valor)}
          />
        ))}
      </div>

      {tareas.length === 0 ? (
        <EmptyState
          icono="📭"
          mensaje="No hay tareas para mostrar en este filtro."
        />
      ) : (
        <div className="task-list">
          {tareas.map((tarea) => (
            <TaskItem
              key={tarea.id}
              tarea={tarea}
              onCompletar={onCompletar}
              onEliminar={onEliminar}
              onEditarTitulo={onEditarTitulo}
            />
          ))}
        </div>
      )}
    </Card>
  )
}

export default TaskList
