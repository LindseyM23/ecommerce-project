// redux/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit'; 
import cartReducer from './slices/cartSlice';
import productSlice from './slices/productSlice';
import checkoutSlice from './slices/checkoutSlice';




const rootReducer = combineReducers({
    cart: cartReducer, // Use the actual slice reducer
    products : productSlice,
    checkout: checkoutSlice,

});

const store = configureStore({
  reducer:rootReducer,

})

export default store;

