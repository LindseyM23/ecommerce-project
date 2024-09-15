// ShippingAddressForm.jsx
import React from 'react';

const ShippingAddressForm = ({ shippingAddress, onShippingChange }) => (
  <div className="section shipping-address">
    <h3>Shipping Address</h3>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={shippingAddress.name}
      onChange={onShippingChange}
    />
    <input
      type="text"
      name="address"
      placeholder="Address"
      value={shippingAddress.address}
      onChange={onShippingChange}
    />
    <input
      type="text"
      name="city"
      placeholder="City"
      value={shippingAddress.city}
      onChange={onShippingChange}
    />
    <input
      type="text"
      name="zip"
      placeholder="Zip"
      value={shippingAddress.zip}
      onChange={onShippingChange}
    />
  </div>
);

export default ShippingAddressForm;
