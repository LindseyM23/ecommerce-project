import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  street: '',
  city: '',
  state: '',
  country: '',
  saveAsDefault: false,
  loading: false,
  error: null,
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress(state, action) {
      const { name, value } = action.payload;
      state[name] = value; // Dynamically set the property based on the name
    },
    toggleSaveAsDefault(state, action) {
      state.saveAsDefault = action.payload;
    },
    resetAddress(state) {
      state.name = '';
      state.street = '';
      state.city = '';
      state.state = '';
      state.country = '';
      state.saveAsDefault = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

// Export actions
export const { setAddress, toggleSaveAsDefault, resetAddress, setLoading, setError } = addressSlice.actions;

// Export selectors
export const selectAddress = (state) => state.address;
export const selectLoading = (state) => state.address.loading;
export const selectError = (state) => state.address.error;

// Export reducer
export default addressSlice.reducer;
