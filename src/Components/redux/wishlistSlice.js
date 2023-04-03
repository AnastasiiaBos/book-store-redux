import { createSlice } from '@reduxjs/toolkit'

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlistItems: []
  },
  reducers: {
    addItemToWishlist: (state, action) => {

        const oldBook = state.wishlistItems.find( item => {
            return item.id === action.payload.id;
        }); // ищем ту книгу, которая уже есть в корзине

        if (oldBook) {  // если она существует
            return;
        } else {
            state.wishlistItems.push({
                id: action.payload.book.id,
                img: action.payload.book.img,
                name: action.payload.book.name,
                author: action.payload.book.author,
                price: action.payload.book.price,
                quantity: action.payload.quantity,
            })
        }
    },

    removeItemFromWishlist: (state, action) => {
        state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload.wishlistItem.id)
    },

    emptyWishlist: state => {
        state.wishlistItems = []
    }
  },
});

export const getWishlistItems = state => state.wishlist.wishlistItems;

export const { addItemToWishlist, removeItemFromWishlist,emptyWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;