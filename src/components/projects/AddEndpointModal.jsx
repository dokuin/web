import React from 'react'
import { Modal, Form } from 'react-bootstrap'
export default function AddEndpointModal(props) {
  return (
    <>
      <Modal
        className="border-0"
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.handleClose}
      >
        <Modal.Body className="d-flex flex-column">
          <Form className="neumorph-card p-3">
            <div className="neumorph-card d-flex p-1 ml-2 mb-3">
              <h3 className="my-auto ml-2">Add Endpoint</h3>
            </div>
            <div className="px-3">
              <Form.Group>
                <Form.Label>HTTP Method</Form.Label>
                <Form.Control type="text" placeholder="Tokomedia" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Path</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="sunday-store.herokuapp.com"
                />
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <button
            className="neumorph-btn py-1 px-3"
            onClick={props.handleClose}
          >
            Close
          </button>
          <button className="neumorph-btn py-1 px-3" type="submit">
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
