function Modal({ mensaje, onConfirmar, onCancelar }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Confirmar acción</h3>
        <p>{mensaje}</p>
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onCancelar}>
            Cancelar
          </button>
          <button className="btn btn-danger" onClick={onConfirmar}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
