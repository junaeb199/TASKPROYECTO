// api publica de prueba, no guarda los cambios de verdad pero sirve para practicar
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

// tareas de ejemplo en español para la carga inicial
const SEED_TAREAS = [
  { id: 1,  title: 'Entregar informe de estructuras de datos',         completed: false, userId: 1 },
  { id: 2,  title: 'Estudiar para prueba de cálculo diferencial',      completed: false, userId: 1 },
  { id: 3,  title: 'Revisar apuntes de arquitectura de computadores',  completed: true,  userId: 1 },
  { id: 4,  title: 'Completar laboratorio de bases de datos',          completed: false, userId: 1 },
  { id: 5,  title: 'Leer capítulo 3 de sistemas operativos',           completed: false, userId: 1 },
  { id: 6,  title: 'Preparar presentación de proyecto semestral',      completed: true,  userId: 1 },
  { id: 7,  title: 'Resolver ejercicios de álgebra lineal',            completed: false, userId: 1 },
  { id: 8,  title: 'Configurar entorno de desarrollo React',           completed: true,  userId: 1 },
  { id: 9,  title: 'Subir tarea de programación orientada a objetos',  completed: false, userId: 1 },
  { id: 10, title: 'Estudiar patrones de diseño para el examen final', completed: false, userId: 1 },
]

export async function getTareas() {
  // simulamos la respuesta de la api con datos en español
  return Promise.resolve(SEED_TAREAS)
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
  if (!res.ok) throw new Error('No se pudo editar el título')
  return res.json()
}

export async function eliminarTarea(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('No se pudo eliminar la tarea')
}
