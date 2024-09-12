// redux/store.js
import { configureStore } from '@reduxjs/toolkit'; 
import cartReducer from './slices/cartSlice';




const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the actual slice reducer
  },
});

export default store;

