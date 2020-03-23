import React from 'react'
import { Table } from 'react-bootstrap'
import { FaTrash, FaRegEdit } from "react-icons/fa";
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
                        <th>Action</th>
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
                        <td><div style={{ display: "flex", justifyContent: "space-around" }}><FaTrash /> <FaRegEdit /></div></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>POST</td>
                        <td>/movies</td>
                        <td>Get All movies</td>
                        <td>key = id, value = 129nas </td>
                        <td>no</td>
                        <td><div style={{ display: "flex", justifyContent: "space-around" }}><FaTrash /> <FaRegEdit /></div></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
