const initialState = {
  projects: [],
  TempEP: [],
  loading: true
}

function project(state = initialState, action) {
  console.log(action.payload, 'dari reducer')
  switch (action.type) {
    case 'ADD_NEW_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload.project]
      }

    case 'UPDATE_PROJECT':
      return { ...state, projects: action.payload.projectList }

    case 'DELETE_PROJECT':
      return { ...state, projects: action.payload.projectList }

    case 'ADD_ENDPOINT':
      return { ...state, projects: action.payload.projectList }
      
    case 'SET_LOADING':
      return {...state, loading: action.payload.bool}

    case 'TEMP_ENDPOINT': 
      return {...state, TempEP: action.payload}

    case 'UPDATE_ENDPOINT':
      return { ...state, projects: action.payload.projectList }

    case 'DELETE_ENDPOINT':
      return { ...state, projects: action.payload.projectList }

    default:
      return state
  }
}

export default project
