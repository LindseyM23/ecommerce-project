// CartReview.jsx
import React from 'react';

const CartReview = ({ cart }) => (
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
);

export default CartReview;
