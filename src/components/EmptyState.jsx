function EmptyState({ mensaje, icono }) {
  return (
    <div className="empty-state">
      {icono && <div className="empty-icon">{icono}</div>}
      <p>{mensaje}</p>
    </div>
  )
}

export default EmptyState
