const initialState = {
  projectData: {}
}

function project(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_PROJECT':
      return { ...state, projectData: action.payload.projectData }

    default:
      return state
  }
}

export default project
