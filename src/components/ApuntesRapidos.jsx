import { useState, useEffect } from 'react'
import Card from './Card'

// seccion para anotar cosas rapido sin tener que crear una tarea
function ApuntesRapidos() {
  const [texto, setTexto] = useState('')

  useEffect(() => {
    const guardado = localStorage.getItem('taskcampus-apuntes')
    if (guardado) setTexto(guardado)
  }, [])

  // guarda solo mientras el componente sigue montado
  useEffect(() => {
    localStorage.setItem('taskcampus-apuntes', texto)
  }, [texto])

  function limpiarApuntes() {
    if (texto.trim() === '') return
    setTexto('')
  }

  return (
    <Card>
      <div className="apuntes-header">
        <h2 className="section-title">Mis apuntes rapidos</h2>
        {texto && (
          <button className="btn btn-outline btn-sm" onClick={limpiarApuntes}>
            Limpiar
          </button>
        )}
      </div>
      <textarea
        className="apuntes-textarea"
        placeholder="Anota aqui lo que necesites recordar, una formula, una fecha, lo que sea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={4}
      />
      <p className="apuntes-hint">Se guarda automaticamente en tu navegador</p>
    </Card>
  )
}

export default ApuntesRapidos
