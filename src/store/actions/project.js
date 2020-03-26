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

export const deleteEndpoint = (desc)=>{
  return{
    type: 'DELETE_EP',
    payload:{
      desc
    }
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

export const addMdProject = (response) => {
  return {
    type: 'ADD_MD_TO_PROJECT',
    payload: {
      response
    }
  }
}

export const setLoading = (bool) =>{
  return{
    type: 'SET_LOADING',
    payload: {
      bool
    }
  }
}

export const tempRunEndPoint = (response) => ({
  type: 'TEMP_ENDPOINT',
  payload: response
})

export const runEndpoint = (project) => {  
  return dispatch =>{
    dispatch(setLoading(true))
    RunEndpoints(project)
    .then((response) => {
       dispatch(tempRunEndPoint(response))
       dispatch(setLoading(false))
      })
      .catch((error) => {
        console.log(error);
        
      })
    }
}
