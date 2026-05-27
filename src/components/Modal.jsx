import Button from './Button'

function Modal({ mensaje, onConfirmar, onCancelar }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Confirmar acción</h3>
        <p>{mensaje}</p>
        <div className="modal-actions">
          <Button
            label="Cancelar"
            variante="secondary"
            icono="✕"
            onClick={onCancelar}
          />
          <Button
            label="Eliminar"
            variante="danger"
            icono="🗑"
            onClick={onConfirmar}
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
