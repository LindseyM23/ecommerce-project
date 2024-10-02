// checkoutSlice.js (ensure this file is correctly linked in your Redux store)
import { UPDATE_ADDRESS, UPDATE_PAYMENT_METHOD } from './actionTypes'; // Ensure path is correct

const initialState = {
    address: {},
    checkout: {
        address: {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            country: ''
        },
        paymentMethod: {
            cardNumber: '',
            cardHolder: '',
            expiryDate: '',
            cvv: '',
            giftCardBalance: 0
        }
    },
    cart: {
        items: [],
        totalPrice: 0,
    },
};

function checkoutSlice(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_ADDRESS':
            return {
                ...state,
                checkout:{
                    ...state.checkout,
                    address: action.payload,
                }
            };
        case UPDATE_PAYMENT_METHOD:
            return {
                ...state,
                checkout: {
                    ...state.checkout,
                    paymentMethod: action.payload,
                }
            };
        default:
            return state;
    }
}

export default checkoutSlice;
