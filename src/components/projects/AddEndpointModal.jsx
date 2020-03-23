import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
export default function AddEndpointModal(props) {
    return (
        <>
            <Modal size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body> <Form>
                    <Form.Group >
                        <Form.Label>HTTP Method</Form.Label>
                        <Form.Control type="text" placeholder="Tokomedia" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Path</Form.Label>
                        <Form.Control type="text" placeholder="sunday-store.herokuapp.com" />
                    </Form.Group>
                </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                     </Button>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
