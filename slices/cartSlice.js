/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const newBasket = [...state.items];
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        newBasket.splice(itemIndex, 1);
      } else {
        console.log("Can't remove item as it's not in the basket");
      }
      state.items = newBasket;
    },
    emptyBasket: state => {
      state.items = [];
    },
  },
});

export const {addToBasket, removeFromBasket, emptyBasket} = cartSlice.actions;

export const selectCartItems = state => state.cart.items; // Perubahan di sini

export const selectCartItemsById = (state, id) =>
  state.cart.items.filter(item => item.id === id); // Perubahan menggunakan ===

export const selectCartTotal = state =>
  state.cart.items.reduce((total, item) => (total += item.price), 0); // Penambahan item.price

export default cartSlice.reducer;
