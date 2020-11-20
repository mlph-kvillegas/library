import { combineReducers, createStore } from "redux"; 
import { bookReducer } from "./bookReducer";

const rootReducer = combineReducers({
    bookList: bookReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);