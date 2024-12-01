import { createSlice } from '@reduxjs/toolkit';
import { dummyBookData } from './dummyBookData';

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [
      {
        id: 147,
        title: "The Call of the Wild",
        author: "Jack London",
        publication_year: 1903,
        genre: ["Adventure", "Nature"],
        description: "An adventure novel about a domestic dog's life in the wilds of the Yukon.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload); // Adding the new book to the books array
    },
  },
});

export const { addBook } = booksSlice.actions; // Correct export
export default booksSlice.reducer;
