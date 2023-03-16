import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState : {
    selectedGenre: 'All'
  },
  reducers: {
    filterGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const getSelectedGenre = state => state.books.selectedGenre;

export const { filterGenre } = booksSlice.actions;

export default booksSlice.reducer;