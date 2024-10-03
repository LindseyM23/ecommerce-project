// checkoutSlice.js
import { UPDATE_ADDRESS, UPDATE_PAYMENT_METHOD } from './actionTypes'; // Ensure path is correct

const initialState = {
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
    },
    cart: {
        items: [
            {
                id: 1,
                name: 'Product 1',
                price: 29.99,
                quantity: 1,
                image: 'https://example.com/image1.jpg', // Ensure the image is included here
            },
            // More items...
        ],
        totalPrice: 0, // Ensure this is calculated correctly
    },
};

function checkoutSlice(state = initialState, action) {
    switch (action.type) {
        case UPDATE_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };
        case UPDATE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            };
        default:
            return state;
    }
}

export default checkoutSlice;

