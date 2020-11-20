import { BookList } from './../entities/book';
import { BookActionTypes, ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from './../types/bookActionsType';

const initialState: BookList = {
    books: [
            {id: 1, author: "Author 1", title: "Poem 1", yearPublished: 2005}, 
            {id: 2, author: "Author 2", title: "Poem 2", yearPublished: 2006}
           ]
}

export function bookReducer(state = initialState, action: BookActionTypes) : BookList {
    switch(action.type) {
        case ADD_BOOK:
            return {
                books: [...state.books, action.payload]
            }
        case EDIT_BOOK:
            return {
                books: state.books.map(book => {
                    return book.id === action.payload.id ? action.payload : book
                })
            }
        case DELETE_BOOK:
            return {
                books: state.books.filter(
                    book => book.id !== action.payload
                )
            }
        default:
            return state
    }
}