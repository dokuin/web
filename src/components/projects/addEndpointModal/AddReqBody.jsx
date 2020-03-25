import React from 'react'

import { Row, Col, Form } from 'react-bootstrap'

const AddReqBody = (props) => {
  const { reqBody, setReqBody } = props

  return (
    <div className="neumorph-card bg-light p-1 py-2 my-3">
      <div className="neumorph-card bg-light d-flex justify-content-center p-1 py-2 m-3">
        <h4 className="my-auto ml-2">Request Body</h4>
      </div>
      <form className="px-3">
        <Row>
          <Col sm={12}>
            <Form.Group>
              <Form.Label>
                Key : <span></span>
              </Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                required
                value={reqBody}
                onChange={(e) => setReqBody(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default AddReqBody
