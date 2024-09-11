import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateShippingAddress, updatePaymentMethod } from './redux/checkoutSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const { shippingAddress, paymentMethod, cart } = useSelector((state) => state.checkout);

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateShippingAddress({ ...shippingAddress, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    dispatch(updatePaymentMethod(e.target.value));
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="section shipping-address">
        <h3>Shipping Address</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={shippingAddress.name}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingAddress.address}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingAddress.city}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="zip"
          placeholder="Zip"
          value={shippingAddress.zip}
          onChange={handleShippingChange}
        />
      </div>

      <div className="section payment-method">
        <h3>Payment Method</h3>
        <select value={paymentMethod} onChange={handlePaymentChange}>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      <div className="section review-bag">
        <h3>Review Your Bag</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </li>
          ))}
        </ul>
      </div>

      <button className="checkout-btn">Place Order</button>
    </div>
  );
};

export default Checkout;
