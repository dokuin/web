import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'
import { Slide, Fade } from 'react-reveal'

import EndpointTable from '../components/projects/EndpointTable'
import AddEndpointModal from '../components/projects/AddEndpointModal'
import ProjectDetailForm from '../components/projects/ProjectDetailForm'
import Sidebar from '../components/projects/Sidebar'

// import { runEndpoint } from '../store/actions/project'

export default function ProjectPage() {
  const projects = useSelector((state) => state.projectReducer.projects)
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  // runEndpoint(projects[0])

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Slide duration={500} bottom>
        <div className="wavy-background"></div>
      </Slide>
      {(() => {
        if (projects.length < 1) {
          return (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: '90vh' }}
            >
              <Fade>
                <Col sm={{ span: 8, offset: 2 }} style={{ width: '100vw' }}>
                  <div className="neumorph-card p-5">
                    <h2 className="text-center mb-5">
                      You currently have no project
                    </h2>
                    <Link
                      title="Create new project"
                      to="/new-project"
                      className="d-flex justify-content-center banner-btn font-weight-bold"
                      style={{ fontSize: '1.5em' }}
                    >
                      Start New Project
                    </Link>
                  </div>
                </Col>
              </Fade>
            </div>
          )
        } else {
          return (
            <>
              <Sidebar
                projects={projects}
                selectProject={(id) => {
                  console.log(id)
                  setSelectedProjectIndex(id)
                }}
              />
              <Container className="mb-5" style={{ minHeight: '90vh' }} fluid>
                <Fade>
                  <div className="my-5">
                    <ProjectDetailForm
                      project={projects[selectedProjectIndex]}
                      projectId={selectedProjectIndex}
                    />
                  </div>
                  <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                      <div className="d-flex justify-content-around mb-4">
                        <button
                          className="neumorph-btn px-3 py-2"
                          onClick={handleShow}
                        >
                          Add Endpoint
                        </button>
                        <button
                          className="neumorph-btn px-3 py-2"
                          onClick={handleShow}
                        >
                          Create Markdown
                        </button>
                      </div>
                      <AddEndpointModal
                        projectId={selectedProjectIndex}
                        show={show}
                        handleClose={handleClose}
                        handleShow={handleShow}
                      />
                      <EndpointTable />
                    </Col>
                  </Row>
                </Fade>
              </Container>
            </>
          )
        }
      })()}
    </>
  )
}
