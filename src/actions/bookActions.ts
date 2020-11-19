import { ADD_BOOK, BookActionTypes, EDIT_BOOK, DELETE_BOOK } from './../types/bookActionsType';
import { Book } from './../entities/book';

export function addBook(book: Book) : BookActionTypes {
    return {
        type: ADD_BOOK,
        payload: book
    }
}

export function editBook(book: Book) : BookActionTypes {
    return {
        type: EDIT_BOOK,
        payload: book
    }
}

export function deleteBook(id: number) : BookActionTypes {
    return {
        type: DELETE_BOOK,
        payload: id
    }
}