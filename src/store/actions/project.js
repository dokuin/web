export const addNewProject = (project) => {
  return {
    type: 'ADD_NEW_PROJECT',
    payload: {
      project
    }
  }
}

export const updateProject = (projectData, projectId) => {
  console.log(projectData)
  console.log(projectId)
  return {
    type: 'UPDATE_PROJECT',
    payload: {
      projectId,
      projectData
    }
  }
}
