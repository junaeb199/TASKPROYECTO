import Card from './Card'

function TaskSummary({ tareas, tareasFiltradas }) {
  const total = tareas.length
  const completadas = tareas.filter((t) => t.completed).length
  const pendientes = tareas.filter((t) => !t.completed).length
  const mostrando = tareasFiltradas.length

  return (
    <Card>
      <h2 className="section-title">Resumen</h2>
      <div className="summary-stats">
        <p><strong>Total:</strong> {total}</p>
        <p><strong>Completadas:</strong> {completadas}</p>
        <p><strong>Pendientes:</strong> {pendientes}</p>
        <p><strong>Mostrando:</strong> {mostrando}</p>
      </div>
    </Card>
  )
}

export default TaskSummary
