const initialState = {
  projects: []
}

function project(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload.projectData]
      }

    default:
      return state
  }
}

export default project
