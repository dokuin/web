import React from 'react'
import { Table } from 'react-bootstrap'
export default function EndpointTable() {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>index</th>
                        <th>HTTP Method</th>
                        <th>Path</th>
                        <th>Description</th>
                        <th>Query Params</th>
                        <th>Request Body</th>
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
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>POST</td>
                        <td>/movies</td>
                        <td>Get All movies</td>
                        <td>no</td>
                        <td>no</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
