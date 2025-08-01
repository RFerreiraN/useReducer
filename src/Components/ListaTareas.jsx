//Estado inicial

const initialState = [{
  id: 1,
  tarea: 'Explicar Reducers',
  finalizada: false
}]


//Estados modificados

const nuevaTarea = {
  id: 2,
  tarea: 'Explicar useReducer',
  finalizada: false
}

const tareaEditada = {
  id: 3,
  tarea: 'Tarea Editada',
  finalizada: false
}

const deleteTareas = {

}

//Acciones

const agregarTarea = {
  type: '[TAREAS] agregar Tarea',
  payload: nuevaTarea
}

const editarTarea = {
  type: '[TAREAS] editar Tarea',
  payload: tareaEditada
}

const borrarTareas = {
  type: '[TAREAS] borrar Tareas',
}


//Reducer 

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '[TAREAS] agregar Tarea':
      return [...state, action.payload];

    case '[TAREAS] editar Tarea':
      return [...state, action.payload];

    case '[TAREAS] borrar Tareas':
      return []
    default:
      break;
  }
  return state
}

console.log(tareaReducer(initialState, agregarTarea))







export const ListaTareas = () => {
  return (
    <>
      <h1>Hook useReducer</h1>
      <hr />
      <form>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="exampleInputEmail1"
            placeholder="Ingresar Tarea"
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
