import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { RootState } from './reducers';
import { deleteBook, addBook } from './actions/bookActions';
import { Book } from './entities/book';

function App() {

  const listOfBooks = useSelector( (state:RootState) => state.bookList.books);
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({} as Book)

  const createNewBook = (event: React.FormEvent) => {
    event.preventDefault(); // remove reloading of page when button is clicked
    dispatch(addBook(newBook))
    setNewBook({} as Book)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setNewBook({
      ...newBook,
      [name] : value
    })
    
  }

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
              <Form onSubmit={createNewBook}>
                <Form.Group>
                  <Form.Label> Title </Form.Label>
                  <Form.Control type="text" name="title" value={newBook.title || ''} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label> Author </Form.Label>
                  <Form.Control type="text" name="author" value={newBook.author || ''} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label> Year Published </Form.Label>
                  <Form.Control type="text" name="yearPublished" value={newBook.yearPublished || ''} onChange={handleInputChange}/>
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
