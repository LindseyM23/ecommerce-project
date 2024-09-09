// redux/slices/slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0, // Example initial state
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = slice.actions;
export default slice.reducer;
