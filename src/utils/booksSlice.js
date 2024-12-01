import { createSlice } from '@reduxjs/toolkit';
import { dummyBookData } from './dummyBookData';

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload); // Adding the new book to the books array
    },
  },
});

export const { addBook } = booksSlice.actions; // Correct export
export default booksSlice.reducer;
