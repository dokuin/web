import { RunEndpoints, ConvertMd } from 'dokuinjs'

export const addNewProject = (project) => {
  return {
    type: 'ADD_NEW_PROJECT',
    payload: {
      project
    }
  }
}
export const addMdProject = response => {
  return {
    type: 'ADD_MD_TO_PROJECT',
    payload: {
      response
    }
  }
}

export const runEndpoint = (project) => {
  RunEndpoints(project)
    .then(response => {
      return ConvertMd(response)
    })
    .catch(error => {
    })
}