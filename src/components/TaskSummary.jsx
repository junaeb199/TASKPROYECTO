import Card from './Card'

function TaskSummary({ tareas, tareasFiltradas }) {
  const total = tareas.length
  const completadas = tareas.filter((t) => t.completed).length
  const pendientes = tareas.filter((t) => !t.completed).length
  const mostrando = tareasFiltradas.length
  const porcentaje = total > 0 ? Math.round((completadas / total) * 100) : 0

  return (
    <Card>
      <h2 className="section-title">Resumen</h2>
      <div className="summary-stats">
        <div className="stat-chip stat-total">
          <span className="stat-num">{total}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-chip stat-completadas">
          <span className="stat-num">{completadas}</span>
          <span className="stat-label">Completadas</span>
        </div>
        <div className="stat-chip stat-pendientes">
          <span className="stat-num">{pendientes}</span>
          <span className="stat-label">Pendientes</span>
        </div>
        <div className="stat-chip stat-mostrando">
          <span className="stat-num">{mostrando}</span>
          <span className="stat-label">Mostrando</span>
        </div>
      </div>

      {total > 0 && (
        <div className="progress-wrap">
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${porcentaje}%` }} />
          </div>
          <span className="progress-label">{porcentaje}% completado</span>
        </div>
      )}
    </Card>
  )
}

export default TaskSummary
