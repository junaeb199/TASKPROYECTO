function Button({ label, variante = 'primary', onClick, icono, disabled = false }) {
  return (
    <button
      className={`btn btn-${variante}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icono && <span className="btn-icono">{icono}</span>}
      {label}
    </button>
  )
}

export default Button
