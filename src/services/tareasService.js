// api publica de prueba, no guarda los cambios de verdad pero sirve para practicar
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

export async function getTareas() {
  const res = await fetch(`${BASE_URL}?_limit=10`)
  if (!res.ok) throw new Error('No se pudieron cargar las tareas')
  return res.json()
}

export async function crearTarea(titulo) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: titulo, completed: false, userId: 1 }),
  })
  if (!res.ok) throw new Error('No se pudo crear la tarea')
  return res.json()
}

export async function actualizarTarea(id, datos) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  })
  if (!res.ok) throw new Error('No se pudo actualizar la tarea')
  return res.json()
}

// patch solo manda los campos que cambian, mas eficiente que PUT
export async function editarTituloTarea(id, nuevoTitulo) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: nuevoTitulo }),
  })
  if (!res.ok) throw new Error('No se pudo editar el titulo')
  return res.json()
}

export async function eliminarTarea(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('No se pudo eliminar la tarea')
}
