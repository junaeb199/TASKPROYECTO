import { useState, useEffect } from 'react'

function Reloj() {
  const [hora, setHora] = useState(new Date())

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date())
    }, 1000)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <span className="reloj">
      {hora.toLocaleTimeString('es-CL')}
    </span>
  )
}

export default Reloj
