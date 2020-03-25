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

    default:
      return state
  }
}

export default project
