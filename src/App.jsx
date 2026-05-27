import { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskSummary from './components/TaskSummary'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import ApuntesRapidos from './components/ApuntesRapidos'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { useTareas } from './hooks/useTareas'
import './App.css'

function App() {
  const { tareas, cargando, error, agregarTarea, completarTarea, editarTitulo, borrarTarea } = useTareas()

  const [filtro, setFiltro] = useState('todas')
  const [textoBusqueda, setTextoBusqueda] = useState('')
  const [mostrarModal, setMostrarModal] = useState(false)
  const [tareaAEliminar, setTareaAEliminar] = useState(null)
  const [nombre, setNombre] = useState('Isadora')

  // filtra por estado y por texto al mismo tiempo
  const tareasFiltradas = tareas.filter((tarea) => {
    const coincideEstado =
      filtro === 'completadas' ? tarea.completed :
      filtro === 'pendientes' ? !tarea.completed :
      true
    const coincideTexto = tarea.title.toLowerCase().includes(textoBusqueda.toLowerCase())
    return coincideEstado && coincideTexto
  })

  // actualiza el titulo de la pestaña segun cuantas tareas quedan pendientes
  useEffect(() => {
    const pendientes = tareas.filter((t) => !t.completed).length
    document.title = pendientes > 0 ? `TaskCampus (${pendientes} pendientes)` : 'TaskCampus'
  }, [tareas])

  function pedirConfirmacion(id) {
    setTareaAEliminar(id)
    setMostrarModal(true)
  }

  function confirmarEliminar() {
    borrarTarea(tareaAEliminar)
    setMostrarModal(false)
    setTareaAEliminar(null)
  }

  function cancelarEliminar() {
    setMostrarModal(false)
    setTareaAEliminar(null)
  }

  return (
    <div className="app-container">
      <Header
        title="TaskCampus"
        description="Gestión de tareas académicas"
        nombreUsuario={nombre}
      />

      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.75rem 2rem 0' }}>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => setNombre('Estudiante Anonimo')}
        >
          Cambiar usuario
        </button>
      </div>

      <TaskForm onAgregarTarea={agregarTarea} />

      <TaskSummary tareas={tareas} tareasFiltradas={tareasFiltradas} />

      <TaskList
        tareas={tareasFiltradas}
        cargando={cargando}
        error={error}
        filtro={filtro}
        setFiltro={setFiltro}
        textoBusqueda={textoBusqueda}
        setTextoBusqueda={setTextoBusqueda}
        onCompletar={completarTarea}
        onEliminar={pedirConfirmacion}
        onEditarTitulo={editarTitulo}
      />

      <ApuntesRapidos />

      <Footer />

      {mostrarModal && (
        <Modal
          mensaje="¿Segura que quieres eliminar esta tarea?"
          onConfirmar={confirmarEliminar}
          onCancelar={cancelarEliminar}
        />
      )}
    </div>
  )
}

export default App
