// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import sliceReducer from './slices/slice'; // Make sure this import is correct

const store = configureStore({
  reducer: {
    slice: sliceReducer, // Use the actual slice reducer
  },
});

export default store;

