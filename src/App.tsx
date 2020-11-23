import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { RootState } from './reducers';
import { deleteBook, addBook, editBook } from './actions/bookActions';
import { Book } from './entities/book';

function App() {

  const listOfBooks = useSelector( (state:RootState) => state.bookList.books);
  const dispatch = useDispatch();
  const [newBook, setBook] = useState({} as Book)
  const [isUpdate, setIsUpdate] = useState(false)

  const submitBook = (event: React.FormEvent) => {
    event.preventDefault(); // remove reloading of page when button is clicked

    isUpdate ? dispatch(editBook(newBook)) : dispatch(addBook(newBook))
    setBook({} as Book)
    setIsUpdate(false)
  }

  const updateBook = (book: Book) => {
    setIsUpdate(true)
    setBook(book)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setBook({
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
                <Button key={`${book.id}-edit-button`} onClick={() => updateBook(book)} > Update</Button>
                <Button key={`${book.id}-delete-button`} onClick={() => dispatch(deleteBook(book.id))}> Delete</Button></li>
              })
            }
          </div>
        </Col>
        <Col>
          <div className="addBook">
            <h1 className="text-center"> {isUpdate ? 'Update' : 'Create'} Book </h1>
              <Form onSubmit={submitBook}>
              <Form.Control type="hidden" name="id" value={newBook.id || ''}/>
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
