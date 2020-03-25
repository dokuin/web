import { RunEndpoints, ConvertMd } from 'dokuinjs'

export const addNewProject = (project) => {
  return {
    type: 'ADD_NEW_PROJECT',
    payload: {
      project
    }
  }
}

export const updateProject = (projectData, projectId) => {
  return {
    type: 'UPDATE_PROJECT',
    payload: {
      projectId,
      projectData
    }
  }
}

export const addEndpoint = (endpoint, projectId) => {
  console.log(endpoint)
  return (dispatch, getState) => {
    let projectList = getState().projectReducer.projects
    projectList[projectId].endpoints = [
      ...projectList[projectId].endpoints,
      endpoint
    ]
    dispatch({
      type: 'ADD_ENDPOINT',
      payload: {
        projectList
      }
    })
  }
}

export const addMdProject = (response) => {
  return {
    type: 'ADD_MD_TO_PROJECT',
    payload: {
      response
    }
  }
}

export const runEndpoint = (project) => {
  RunEndpoints(project)
    .then((response) => {
      return ConvertMd(response)
    })
    .catch((error) => {})
}
