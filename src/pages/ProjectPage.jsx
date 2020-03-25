import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Slide, Fade } from 'react-reveal'
import { runEndpoint } from '../store/actions/project';
import EndpointTable from '../components/projects/EndpointTable'
import AddEndpointModal from '../components/projects/AddEndpointModal'
import ProjectDetailForm from '../components/projects/ProjectDetailForm'

import { createStore } from 'redux'
import reducer from '../store/reducers/index'
export default function ProjectPage() {
  const projects = createStore(reducer).getState().projectReducer.projects
  runEndpoint(projects[0])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Slide duration={500} bottom>
        <div className="wavy-background"></div>
      </Slide>
      <Container style={{ minHeight: '90vh' }} fluid>
        <Fade>
          <div className="my-5">
            <ProjectDetailForm />
          </div>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <EndpointTable />
              <div className="d-flex justify-content-around my-4">
                <button className="neumorph-btn px-3 py-2" onClick={handleShow}>
                  Add Endpoint
                </button>
                <button className="neumorph-btn px-3 py-2" onClick={handleShow}>
                  Create Markdown
                </button>
              </div>
              <AddEndpointModal
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
              />
            </Col>
          </Row>
        </Fade>
      </Container>
    </>
  )
}
