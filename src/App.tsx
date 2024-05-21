import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Welcome to BloomBox!</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Button variant="primary">Explore Our Plants</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
