import React from 'react'
import { Table } from 'react-bootstrap'
import { MdEdit, MdDelete } from 'react-icons/md'
export default function EndpointTable() {
  return (
    <div className="neumorph-card p-3">
      <Table
        className="my-auto"
        variant="primary"
        responsive
        borderless
        striped
        style={{ borderRadius: '1em' }}
      >
        <thead>
          <tr>
            <th>index</th>
            <th>HTTP Method</th>
            <th>Path</th>
            <th>Description</th>
            <th>Query Params</th>
            <th>Request Body</th>
            <th align="center" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>GET</td>
            <td>/movies</td>
            <td>Get All movies</td>
            <td>no</td>
            <td>no</td>
            <td className="d-flex justify-content-center">
              <MdEdit
                title="Delete endpoint"
                size="2em"
                className="neumorph-btn icon p-1 mr-3"
              />
              <MdDelete
                title="Edit endpoint"
                size="2em"
                className="neumorph-btn icon p-1 mr-3"
              />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>POST</td>
            <td>/movies</td>
            <td>Get All movies</td>
            <td>key = id, value = 129nas </td>
            <td>no</td>
            <td className="d-flex justify-content-center">
              <MdEdit
                title="Delete endpoint"
                size="2em"
                className="neumorph-btn icon p-1 mr-3"
              />
              <MdDelete
                title="Edit endpoint"
                size="2em"
                className="neumorph-btn icon p-1 mr-3"
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
