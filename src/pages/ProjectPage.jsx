import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import EndpointTable from '../components/EndpointTable'
import AddEndpointModal from '../components/AddEndpointModal';
export default function ProjectPage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <EndpointTable />
                    <Button variant="primary" onClick={handleShow}>
                        Test
                     </Button>
                    <AddEndpointModal show={show} handleClose={handleClose} handleShow={handleShow} />
                </Col>
            </Row>
        </Container>
    )
}
