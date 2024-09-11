// Checkout.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateShippingAddress, updatePaymentMethod } from './redux/checkoutSlice';
import ShippingAddressForm from './ShippingAddressForm';
import PaymentMethodSelector from './PaymentMethodSelector';
import CartReview from './CartReview';

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
      <ShippingAddressForm 
        shippingAddress={shippingAddress} 
        onShippingChange={handleShippingChange} 
      />
      <PaymentMethodSelector 
        paymentMethod={paymentMethod} 
        onPaymentChange={handlePaymentChange} 
      />
      <CartReview cart={cart} />
      <button className="checkout-btn">Place Order</button>
    </div>
  );
};

export default Checkout;
