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
  return (dispatch, getState) => {
    let projectList = [...getState().projectReducer.projects]
    projectList[projectId] = {
      name: projectData.name,
      baseUrl: projectData.baseURL,
      author: projectData.author,
      description: projectData.description,
      endpoints: projectList[projectId].endpoints
    }
    dispatch({
      type: 'UPDATE_PROJECT',
      payload: {
        projectList
      }
    })
  }
}

export const deleteProject = (projectId) => {
  return (dispatch, getState) => {
    let projectList = [...getState().projectReducer.projects]
    projectList.splice(projectId, 1)
    dispatch({
      type: 'DELETE_PROJECT',
      payload: {
        projectList
      }
    })
  }
}

export const addEndpoint = (endpoint, projectId) => {
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

export const editEndpoint = (endpoint, endpointId, projectId) => {
  return (dispatch, getState) => {
    let projectList = [...getState().projectReducer.projects]
    projectList[projectId].endpoints[endpointId] = endpoint
    dispatch({
      type: 'UPDATE_ENDPOINT',
      payload: {
        projectList
      }
    })
  }
}

export const deleteEndpoint = (endpointId, projectId) => {
  console.log(endpointId)
  console.log(projectId)
  return (dispatch, getState) => {
    let projectList = [...getState().projectReducer.projects]
    projectList[projectId].endpoints.splice(endpointId, 1)
    dispatch({
      type: 'DELETE_ENDPOINT',
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
