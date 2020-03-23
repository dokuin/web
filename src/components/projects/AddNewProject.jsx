import React from 'react'
import { Form, Container, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function ProjectsDetailPage() {
    return (
        <Container style={{ padding: "20px", minHeight: "84vh" }}>
            <Col md={{ span: 8, offset: 2 }}>
                <Form>
                    <Form.Group >
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" placeholder="Tokomedia" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Project Base URL</Form.Label>
                        <Form.Control type="text" placeholder="sunday-store.herokuapp.com" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Oasis" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control as="textarea" rows="2" />
                    </Form.Group>
                    <Link to="projects">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Link>
                </Form>
            </Col>
        </Container>
    )
}
