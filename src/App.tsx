import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { RootState } from './reducers';
import { deleteBook } from './actions/bookActions';

function App() {

  const listOfBooks = useSelector( (state:RootState) => state.bookList.books);
  const dispatch = useDispatch();

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
            {
              listOfBooks.map((book) => {
               return <li key={`${book.id}-item`}> {`${book.id} - ${book.title} - ${book.author} - ${book.yearPublished}`} 
                <Button key={`${book.id}-delete-button`} onClick={() => dispatch(deleteBook(book.id))}> Delete</Button></li>
              })
            }
          </div>
        </Col>
        <Col>
          <div className="addBook">
            <h1 className="text-center"> Add Book </h1>
              <Form>
                <Form.Group>
                  <Form.Label> Title </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label> Author </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label> Year Published </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>             
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
