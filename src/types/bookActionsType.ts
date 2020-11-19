import { Book } from './../entities/book';
export const ADD_BOOK = 'ADD_BOOK'
export const EDIT_BOOK = 'EDIT_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'

interface addBookAction {
    type: typeof ADD_BOOK
    payload: Book
}

interface editBookAction {
    type: typeof EDIT_BOOK
    payload: Book
}

interface deleteBookAction {
    type: typeof DELETE_BOOK
    payload: number
}

export type BookActionTypes = addBookAction | editBookAction | deleteBookAction