export interface Book {
    id: number
    author: string
    title: string
    yearPublished: number
}

export interface BookList {
    books: Book[]
}