function ActionButton({ label, onClick }) {
  function manejarClic() {
    if (onClick) {
      onClick()
    } else {
      alert(`Acción ejecutada: ${label}`)
    }
  }

  return (
    <button className="btn btn-primary" onClick={manejarClic}>
      {label}
    </button>
  )
}

export default ActionButton
