import React, { useState } from 'react';
import './Cart.css';

// CartItem component to display each item in the cart
const CartItem = ({ item, onUpdateQuantity }) => {
  const { id, name, color, image, price, quantity, rating, description } = item;

  return (
    <div className="cart-item">
      <img src={image} alt={name} className="item-image" />
      <div className="item-details">
        <h3>{name}</h3>
        <p>{color}</p>
        <p>{description}</p>
        <div className="item-rating">
          <span>⭐️⭐️⭐️⭐️⭐️{rating} / 5</span>
        </div>
        <p>${price.toFixed(2)} × {quantity}</p>
      </div>
      <div className="item-quantity">
        <button onClick={() => onUpdateQuantity(id, Math.max(0, quantity - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => onUpdateQuantity(id, quantity + 1)}>+</button>
      </div>
    </div>
  );
};

// Main Cart component to manage the cart state and render CartItems
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Dell XPS 13',
      color: 'White',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
      image: `${process.env.PUBLIC_URL}/assets/Image11.png`,
      price: 1799.99,
      quantity: 1,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Iphone 11',
      color: 'Navy Blue',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
      image: `${process.env.PUBLIC_URL}/assets/Image9.png`,
      price: 729.99,
      quantity: 3,
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Iphone 11',
      color: 'Milky White',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
      image: `${process.env.PUBLIC_URL}/assets/Image9.png`,
      price: 619.99,
      quantity: 1,
      rating: 4.5,
    },
  ]);

  // Function to update the quantity of an item in the cart
  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="cart-container">
      <h2>Check your Bag Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} onUpdateQuantity={handleUpdateQuantity} />
        ))
      )}
      <div className="cart-total">
        <h3>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;

