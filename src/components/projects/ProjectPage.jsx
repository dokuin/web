import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import EndpointTable from './EndpointTable'
import AddEndpointModal from './AddEndpointModal';
export default function ProjectPage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container style={{ padding: "20px", minHeight: "85vh" }}>
            <Row>
                <Col style={{ padding: "20px" }} md={{ span: 10, offset: 1 }}>
                    <p>Project Name          : Tokomedia</p>
                    <p>Project Base URL      : https://localhost:3000</p>
                    <p>Author                : Oasis</p>
                    <p>Project Description   : It is practice project for REST API</p>
                    <p></p>
                    <p></p>
                    <p></p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <EndpointTable />
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <Button variant="primary" onClick={handleShow}>
                            Add Endpoint
                        </Button>
                        <Button variant="primary" onClick={handleShow}>
                            Edit Project
                        </Button>
                        <Button variant="primary" onClick={handleShow}>
                            Create Markdown
                     </Button>
                    </div>
                    <AddEndpointModal show={show} handleClose={handleClose} handleShow={handleShow} />
                </Col>
            </Row>
        </Container>
    )
}
