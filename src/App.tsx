import React from 'react';
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="App">
            <h1> Library </h1>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="bookList">
            <h1 className="text-center"> List Of Books </h1>
          </div>
        </Col>
        <Col>
          <div className="addBook">
            <h1 className="text-center"> Add Book </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
