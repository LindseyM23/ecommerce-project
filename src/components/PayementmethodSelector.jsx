// PaymentMethodSelector.jsx
import React from 'react';

const PaymentMethodSelector = ({ paymentMethod, onPaymentChange }) => (
  <div className="section payment-method">
    <h3>Payment Method</h3>
    <select value={paymentMethod} onChange={onPaymentChange}>
      <option value="creditCard">Credit Card</option>
      <option value="paypal">PayPal</option>
    </select>
  </div>
);

export default PaymentMethodSelector;
