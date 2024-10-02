import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


// Main CheckoutPage component
function Checkout() {
    const navigate = useNavigate();
    const address = useSelector((state) => state.checkout.address || {});
    const paymentMethod = useSelector((state) => state.checkout.paymentMethod || {});
    const cartItems = useSelector((state) => state.cart.items || []);
    const totalPrice = useSelector((state) => state.cart.totalPrice || 0);

    const handlePlaceOrder = () => {
        navigate('/payment-method');
    };

    const handleChangeShipping = () => {
        navigate('/shipping-add'); // Navigate to ShippingAdd component
    };

    const handleChangePayment = () => {
        navigate('/payment-method'); // Navigate to PaymentMeth component
    };

    return (
        <div className="checkout-page">
            <ShippingAddress address={address} onChange={handleChangeShipping} />
            <PaymentMethod paymentMethod={paymentMethod} onChange={handleChangePayment} />
            <ReviewYourBag cartItems={cartItems} totalPrice={totalPrice} />
            <OrderSummary totalPrice={totalPrice} />
            <button onClick={handlePlaceOrder}>Place your order</button>
        </div>
    );
}

// ShippingAddress component
function ShippingAddress({ address, onChange }) {
    return (
        <div className="shipping-address">
            <h2>Shipping Address</h2>
            <p>{address.name || 'Name not provided'}</p>
            <p>
                {address.street || 'Street not provided'}, {address.city || 'City not provided'}, {address.state || 'State not provided'}, {address.zip || 'ZIP not provided'}, {address.country || 'Country not provided'}
            </p>
            <button onClick={onChange}>Change</button>
        </div>
    );
}

// PaymentMethod component
function PaymentMethod({ paymentMethod, onChange }) {
    const lastFourDigits = paymentMethod.cardNumber ? paymentMethod.cardNumber.slice(-4) : '####';
    const cardType = paymentMethod.cardNumber ? getCardType(paymentMethod.cardNumber) : 'Type not provided';

    return (
        <div className="payment-method">
            <h2>Payment Method</h2>
            <p>
                <i className="fa fa-credit-card"></i> {cardType} ending in {lastFourDigits}
            </p>
            <p>
                <i className="fa fa-gift"></i> ${paymentMethod.giftCardBalance || '0.00'} gift card balance
            </p>
            <label>
                <input type="checkbox" checked readOnly /> Billing address same as Shipping Address
            </label>
            <button onClick={onChange}>Change</button>
        </div>
    );
}

// Helper function to determine card type based on card number
function getCardType(number) {
    const re = {
        Visa: /^4/,
        MasterCard: /^5[1-5]/,
        AMEX: /^3[47]/,
        Discover: /^6(?:011|5)/,
    };

    for (const card in re) {
        if (re[card].test(number)) {
            return card;
        }
    }
    return 'Unknown';
}

// ReviewYourBag component
function ReviewYourBag({ cartItems, totalPrice }) {
    return (
        <div className="review-your-bag">
            <h2>Review Your Bag</h2>
            {cartItems.length > 0 ? (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <p>{item.name}</p>
                            <p>${item.price.toFixed(2)}</p>
                            <div className="quantity">
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                    <div className="review-total">
                        <h3>Total: ${totalPrice.toFixed(2)}</h3>
                    </div>
                </>
            ) : (
                <p>Bag is empty</p>
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

