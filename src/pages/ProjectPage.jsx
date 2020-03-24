import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Slide, Fade } from 'react-reveal'

import EndpointTable from '../components/projects/EndpointTable'
import AddEndpointModal from '../components/projects/AddEndpointModal'
import ProjectDetailForm from '../components/projects/ProjectDetailForm'

export default function ProjectPage() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Slide duration={500} bottom>
        <div className="wavy-background"></div>
      </Slide>
      <Container style={{ minHeight: '90vh' }} fluid>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
        <Fade>
          <ProjectDetailForm />
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <EndpointTable />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button variant="primary" onClick={handleShow}>
                  Add Endpoint
                </Button>
                <Button variant="primary" onClick={handleShow}>
                  Create Markdown
                </Button>
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
