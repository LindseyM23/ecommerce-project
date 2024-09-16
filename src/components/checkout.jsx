import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to fetch data from the Redux store
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../Styles/checkout.css';

// Main CheckoutPage component
function CheckoutPage() {
    const navigate = useNavigate(); // Hook to programmatically navigate
    const address = useSelector((state) => state.address || {}); // Get address from Redux store
    const paymentMethod = useSelector((state) => state.paymentMethod || {}); // Get payment method from Redux store
    const cartItems = useSelector((state) => state.cart.items || []); // Get cart items from Redux store
    const totalPrice = useSelector((state) => state.cart.totalPrice || 0); // Get total price from Redux store

    const handlePlaceOrder = () => {
        navigate('/payment'); // Navigate to the /payment route
    };

    return (
        <div className="checkout-page">
            <ShippingAddress address={address} />
            <PaymentMethod paymentMethod={paymentMethod} />
            <ReviewYourBag cartItems={cartItems} />
            <OrderSummary totalPrice={totalPrice} />
            <button onClick={handlePlaceOrder}>Place your order</button>
        </div>
    );
}

// ShippingAddress component
function ShippingAddress({ address }) {
    return (
        <div className="shipping-address">
            <h2>Shipping Address</h2>
            <p>{address.name}</p>
            <p>
                {address.street || 'Street Not Provided'}, {address.city || 'City Not Provided'}, {address.state || 'State Not Provided'}, {address.country || 'Country Not Provided'}
            </p>
            <button>Change</button>
        </div>
    );
}

// PaymentMethod component
function PaymentMethod({ paymentMethod }) {
    return (
        <div className="payment-method">
            <h2>Payment Method</h2>
            <p>
                <i className="fa fa-credit-card"></i>
                {paymentMethod.type || 'Type Not Provided'} ending in {paymentMethod.lastFourDigits || '####'}
            </p>
            <p>
                <i className="fa fa-gift"></i>
                ${paymentMethod.giftCardBalance || '0.00'} gift card balance
            </p>
            <label>
                <input type="checkbox" checked readOnly /> Billing address same as Shipping Address
            </label>
            <button>Change</button>
        </div>
    );
}

// ReviewYourBag component
function ReviewYourBag({ cartItems }) {
    return (
        <div className="review-your-bag">
            <h2>Review Your Bag</h2>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <p>{item.name}</p>
                        <p>${item.price.toFixed(2)}</p>
                        <div className="quantity">
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Bag empty</p>
            )}
        </div>
    );
}

// OrderSummary component
function OrderSummary({ totalPrice }) {
    const calculateTotal = () => {
        const shipping = 6.99;
        const gst = totalPrice * 0.13; // 13% GST on total price
        return (totalPrice + shipping + gst).toFixed(2);
    };

    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Items: ${totalPrice.toFixed(2)}</p>
            <p>Shipping: $6.99</p>
            <p>Estimated GST: ${(totalPrice * 0.13).toFixed(2)}</p>
            <p>Order Total: ${calculateTotal()}</p>
        </div>
    );
}

export default Checkout;
