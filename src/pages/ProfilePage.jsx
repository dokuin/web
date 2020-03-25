import React from 'react'
import { Container, Row, Col,Card} from 'react-bootstrap'


const ProfilePage = () => {
  return (
    <Container>
      <Row style={{
        marginTop:'40px'
      }}>
        <Col>
        <Card style={{ width: '100%' }}>
  <Card.Body>
    <Card.Title>USER NAME</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
        </Col>
        <Col>
        
        </Col>
      </Row>
    </Container>
  )
}

export default ProfilePage
