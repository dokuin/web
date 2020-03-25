import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addNewProject } from '../../store/actions/project'

import { Form, Container, Col } from 'react-bootstrap'
import { MdClear } from 'react-icons/md'
import { Fade } from 'react-reveal'

export default function ProjectsDetailPage() {
  const { goBack, push } = useHistory()
  const dispatch = useDispatch()

  const [projectName, setProjectName] = useState('')
  const [projectBaseURL, setProjectBaseURL] = useState('')
  const [projectAuthor, setProjectAuthor] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const submit = (e) => {
    e.preventDefault()
    const project = {
      name: projectName,
      baseUrl: projectBaseURL,
      author: projectAuthor,
      description: projectDescription,
      endpoints: []
    }
    dispatch(addNewProject(project))
    push('/projects')
  }

  return (
    <div className="d-flex align-items-center" style={{ minHeight: '90vh' }}>
      <Fade right>
        <div className="undrawsvg-create-background"></div>
      </Fade>
      <Container className="" fluid>
        <Col sm={12} md={6}>
          <Fade left>
            <div className="p-5 neumorph-card">
              <div>
                <MdClear
                  title="Back"
                  size="2em"
                  className="mr-3 icon rounded-circle bg-light p-2 neumorph-btn"
                  onClick={() => goBack()}
                />
                Creating new project
              </div>
              <hr className="mx-0 my-2" />
              <h2 className="my-3">Insert your project's detail</h2>
              <Form className="d-flex flex-column" onSubmit={(e) => submit(e)}>
                <Form.Group>
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tokomedia"
                    required
                    value={projectName}
                    onChange={(e) => {
                      setProjectName(e.target.value)
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Project Base URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="sunday-store.herokuapp.com"
                    required
                    value={projectBaseURL}
                    onChange={(e) => {
                      setProjectBaseURL(e.target.value)
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Oasis"
                    required
                    value={projectAuthor}
                    onChange={(e) => {
                      setProjectAuthor(e.target.value)
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    value={projectDescription}
                    onChange={(e) => {
                      setProjectDescription(e.target.value)
                    }}
                  />
                </Form.Group>
                <button
                  className="mx-auto p-3 neumorph-btn font-large"
                  type="submit"
                >
                  Create Project
                </button>
              </Form>
            </div>
          </Fade>
        </Col>
      </Container>
    </div>
  )
}
