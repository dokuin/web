const initialState = {
  projects: []
}

function project(state = initialState, action) {
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

    case 'UPDATE_ENDPOINT':
      return { ...state, projects: action.payload.projectList }

    case 'DELETE_ENDPOINT':
      return { ...state, projects: action.payload.projectList }

    default:
      return state
  }
}

export default project
