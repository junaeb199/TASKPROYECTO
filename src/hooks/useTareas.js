import { useState, useEffect } from 'react'
import {
  getTareas,
  crearTarea,
  actualizarTarea,
  editarTituloTarea,
  eliminarTarea,
} from '../services/tareasService'

const CLAVE_LS = 'taskcampus-tareas'
const VERSION_LS = 'taskcampus-v2'

export function useTareas() {
  const [tareas, setTareas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  // al montar: si ya habia tareas guardadas las cargo, sino voy a la api
  useEffect(() => {
    // si hay datos de una version anterior los borramos para cargar los nuevos
    if (!localStorage.getItem(VERSION_LS)) {
      localStorage.removeItem(CLAVE_LS)
      localStorage.setItem(VERSION_LS, '1')
    }
    const guardadas = localStorage.getItem(CLAVE_LS)
    if (guardadas) {
      setTareas(JSON.parse(guardadas))
      setCargando(false)
      return
    }
    getTareas()
      .then((datos) => setTareas(datos))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  // cada vez que cambian las tareas las guardo en localStorage
  useEffect(() => {
    if (!cargando) {
      localStorage.setItem(CLAVE_LS, JSON.stringify(tareas))
    }
  }, [tareas, cargando])

  async function agregarTarea(titulo) {
    try {
      const nueva = await crearTarea(titulo)
      // jsonplaceholder no guarda de verdad, le pongo un id unico local
      setTareas((prev) => [{ ...nueva, id: Date.now() }, ...prev])
    } catch (err) {
      setError(err.message)
    }
  }

  async function completarTarea(id) {
    const tarea = tareas.find((t) => t.id === id)
    if (!tarea) return
    try {
      await actualizarTarea(id, { ...tarea, completed: !tarea.completed })
      setTareas((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      )
    } catch (err) {
      setError(err.message)
    }
  }

  async function editarTitulo(id, nuevoTitulo) {
    try {
      await editarTituloTarea(id, nuevoTitulo)
      setTareas((prev) =>
        prev.map((t) => (t.id === id ? { ...t, title: nuevoTitulo } : t))
      )
    } catch (err) {
      setError(err.message)
    }
  }

  async function borrarTarea(id) {
    try {
      await eliminarTarea(id)
      setTareas((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  return { tareas, cargando, error, agregarTarea, completarTarea, editarTitulo, borrarTarea }
}
