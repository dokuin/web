const initialState = {
  projects: [
    {
      name: "tokemedia",
      description: "practice project",
      baseURL: "https://sunday-store.herokuapp.com/api",
      author: "oasis",
      endpoints: [{
        method: "get",
        path: "products",
        description: "get all product",
      }]
    }]
}

function project(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NEW_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload.project]
      }
    case 'ADD_MD_TO_PROJECT':
      const copyProjects = [...state.projects]
      const cloneProject = copyProjects.find(el => el.name === action.payload.responses.name)
      cloneProject.mdFile = action.responses
      return {
        ...state,
        ...state.projects.md = action.payload.responses,
        projects: [...state.projects]
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
