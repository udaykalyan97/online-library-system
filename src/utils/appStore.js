import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import booksReducer from "./booksSlice.js"; 

const appStore = configureStore({
    reducer: {
        cart: cartReducer,     
        books: booksReducer,  
    },
});

export default appStore;
