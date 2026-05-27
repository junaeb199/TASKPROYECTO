const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

export async function getTareas() {
  const res = await fetch(`${BASE_URL}?_limit=10`)
  if (!res.ok) throw new Error('Error al cargar las tareas')
  return res.json()
}

export async function crearTarea(titulo) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: titulo, completed: false, userId: 1 }),
  })
  if (!res.ok) throw new Error('Error al crear la tarea')
  return res.json()
}

export async function actualizarTarea(id, datos) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  })
  if (!res.ok) throw new Error('Error al actualizar la tarea')
  return res.json()
}

export async function editarTituloTarea(id, nuevoTitulo) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: nuevoTitulo }),
  })
  if (!res.ok) throw new Error('Error al editar el título')
  return res.json()
}

export async function eliminarTarea(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Error al eliminar la tarea')
}
