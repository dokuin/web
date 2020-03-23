import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function HomePage() {
    return (
        <div>
            <Link to="/projects"><Button variant="primary">Primary</Button></Link>
        </div>
    )
}
