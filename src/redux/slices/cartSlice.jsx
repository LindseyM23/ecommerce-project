// src/redux/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';


// Initial state of the cart
const initialState = {
  cartItems: [],
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleAddToBag: (state, action) => {
      state.cartItems.push(action.payload); // Add the item to the cart
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.name !== action.payload.name
      ); // Remove the item from the cart
    },
  },
});

// Export the actions
export const { handleAddToBag, removeFromCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
