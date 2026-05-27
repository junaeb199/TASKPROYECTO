function Badge({ estado, onClick }) {
  const clases = {
    completada: 'badge badge-completada',
    pendiente: 'badge badge-pendiente',
    'en-progreso': 'badge badge-en-progreso',
  }

  const etiquetas = {
    completada: 'Completada',
    pendiente: 'Pendiente',
    'en-progreso': 'En progreso',
  }

  return (
    <span
      className={clases[estado] || 'badge badge-pendiente'}
      onClick={onClick}
      title={onClick ? 'Clic para cambiar estado' : undefined}
      style={onClick ? { cursor: 'pointer' } : undefined}
    >
      {etiquetas[estado] || estado}
    </span>
  )
}

export default Badge
