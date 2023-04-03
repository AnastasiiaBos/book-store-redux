import { configureStore } from '@reduxjs/toolkit';
import books from './booksSlice';
import cart from './cartSlice';
import wishlist from './wishlistSlice';


export const store = configureStore({
  reducer: {
    books,
    cart,
    wishlist
  },
})