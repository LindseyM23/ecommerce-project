import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shippingAddress: {
    name: '',
    address: '',
    city: '',
    zip: '',
  },
  paymentMethod: '',
  cart: [],
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    updatePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { updateShippingAddress, updatePaymentMethod, updateCart } = checkoutSlice.actions;
export default checkoutS