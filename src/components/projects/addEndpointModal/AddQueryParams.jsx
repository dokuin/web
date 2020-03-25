import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

const AddQueryParams = (props) => {
  const { query, setQuery } = props

  return (
    <div className="neumorph-card bg-light p-1 py-2 my-3">
      <div className="neumorph-card bg-light d-flex justify-content-center p-1 py-2 m-3">
        <h4 className="my-auto ml-2">Query Params</h4>
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
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default AddQueryParams
