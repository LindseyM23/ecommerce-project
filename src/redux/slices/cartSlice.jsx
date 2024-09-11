
import { createSlice } from '@reduxjs/toolkit';


// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    cartItems:[],
  },
  reducers: {
    addItem: (state, action) => {
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
export const { addItem, removeFromCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
