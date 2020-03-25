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
      const { projectData, projectId } = action.payload
      let projectList = [...state.projects]
      projectList[projectId] = projectData
      return { ...state, projects: projectList }

    default:
      return state
  }
}

export default project
