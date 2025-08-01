//Estado inicial

import { UseFormHook } from "../Hooks/UseFormHook"

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


export const ListaTareas = () => {

  const { tarea, inputValue, handleInput } = UseFormHook({tarea : ''})
  const agregarTarea = (event) => {
    event.preventDefault()
    console.log(inputValue)
    //type: '[TAREAS] agregar Tarea',
    //payload: nuevaTarea
  }

  return (
    <>
      <h1>Hook useReducer</h1>
      <hr />
      <form onSubmit={agregarTarea}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="tarea"
            placeholder="Ingresar Tarea"
            value={tarea}
            onChange={handleInput}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
