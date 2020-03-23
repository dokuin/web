import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Container, Col, Button, Card } from 'react-bootstrap'
import { MdClear } from 'react-icons/md'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

export default function ProjectsDetailPage() {
  const { goBack } = useHistory()
  return (
    <div className="d-flex align-items-center" style={{ minHeight: '90vh' }}>
      <Fade right>
        <div className="undrawsvg-create-background"></div>
      </Fade>
      <Container className="" style={{ color: 'white' }} fluid>
        <Col sm={12} md={6}>
          <Fade left>
            <Card
              className="p-5"
              style={{
                backgroundColor: '#509CA1F0'
              }}
            >
              <div>
                <MdClear
                  size="2em"
                  className="mr-3 icon"
                  onClick={() => goBack()}
                />
                Creating new project
              </div>
              <hr className="mx-0 my-2" />
              <h2 className="my-3">Insert your project's detail</h2>
              <Form>
                <Form.Group>
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control type="text" placeholder="Tokomedia" required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Project Base URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="sunday-store.herokuapp.com"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Author</Form.Label>
                  <Form.Control type="text" placeholder="Oasis" required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control as="textarea" rows="2" />
                </Form.Group>
                <Link to="projects">
                  <Button variant="primary" type="submit">
                    Create Project
                  </Button>
                </Link>
              </Form>
            </Card>
          </Fade>
        </Col>
      </Container>
    </div>
  )
}
