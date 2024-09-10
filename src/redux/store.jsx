// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import sliceReducer from './slices/slice'; 
import cartReducer from './slices/cartSlice';




const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the actual slice reducer
  },
});

export default store;

