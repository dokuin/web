import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Row, Col, Form } from 'react-bootstrap'
import { MdAdd, MdClear, MdEdit, MdSave } from 'react-icons/md'

import { updateProject } from '../../store/actions/project'

const ProjectDetailForm = (props) => {
  const $router = useHistory()
  const { project, projectId } = props
  const dispatch = useDispatch()
 

  const [disable, setDisable] = useState(true)
  const [projectName, setProjectName] = useState('')
  const [projectBaseURL, setProjectBaseURL] = useState('')
  const [projectAuthor, setProjectAuthor] = useState('')
  const [projectDescription, setProjectDescription] = useState('')

  const getEditReady = () => {
    setProjectName(project.name)
    setProjectBaseURL(project.baseUrl)
    setProjectAuthor(project.author)
    setProjectDescription(project.description)
    setDisable(!disable)
  }

  const saveProject = () => {
    const projectData = {
      name: projectName,
      baseUrl: projectBaseURL,
      author: projectAuthor,
      description: projectDescription
    }
    dispatch(updateProject(projectData, projectId))
    setDisable(!disable)
  }

  return (
    <Row>
      <Col
        className="neumorph-card"
        style={{ padding: '20px' }}
        md={{ span: 8, offset: 2 }}
      >
        <div className="d-flex justify-content-end mt-2 mb-4">
          <button
            title="Add New Project"
            className="neumorph-btn icon p-2 d-flex align-items-center"
            style={{ backgroundColor: '#d5dbf6' }}
            onClick={() => $router.push('/new-project')}
          >
            <MdAdd size="2rem" />
            Add New Project
          </button>
        </div>
        <div className="neumorph-card d-flex justify-content-between mt-0 p-2 mb-5">
          <h2 className="ml-3 my-auto">Project Detail</h2>
          <div className="d-flex align-items-center">
            {disable ? (
              <MdEdit
                size="2em"
                className="neumorph-btn icon p-1 my-0 mr-3"
                title="Edit Detail"
                onClick={() => getEditReady()}
              />
            ) : (
              <MdSave
                size="2em"
                className="neumorph-btn icon p-1 my-0 mr-5"
                title="Save"
                onClick={() => saveProject()}
              />
            )}
            {!disable ? (
              <MdClear
                size="2em"
                className="neumorph-btn icon p-1 my-0 mr-2"
                title="Cancel Edit"
                onClick={() => setDisable(!disable)}
              />
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <Form.Group>
          <Form.Row>
            <Form.Label column lg={3}>
              Project Name
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Large text"
                value={disable ? project.name : projectName}
                onChange={(e) => setProjectName(e.target.value)}
                disabled={disable}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Form.Label column lg={3}>
              Project Base URL
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Large text"
                value={disable ? project.baseURL : projectBaseURL}
                onChange={(e) => setProjectBaseURL(e.target.value)}
                disabled={disable}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Form.Label column lg={3}>
              Author
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Large text"
                value={disable ? project.author : projectAuthor}
                onChange={(e) => setProjectAuthor(e.target.value)}
                disabled={disable}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Form.Label column lg={3}>
              Project Description
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                as="textarea"
                placeholder="Large text"
                value={disable ? project.description : projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                disabled={disable}
              />
            </Col>
          </Form.Row>
        </Form.Group>
      </Col>
    </Row>
  )
}

export default ProjectDetailForm
