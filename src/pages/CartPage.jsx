import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeFromCart } from '../redux/slices/cartSlice'; 
import '../styles/CartPage.css';
import '../components/SideBar.jsx';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (  
    <div className="cart-item">
      <div className="item-details">
        <h3>{item.name}</h3>
        <img
          className="cart-item-image"
          src={item.image || 'path_to_placeholder_image.png'}
          alt={item.name}
          onError={(e) => { e.target.src = 'path_to_placeholder_image.png'; }}
        />
        <div className="item-rating">
          <span>⭐⭐⭐⭐⭐ {item.rating} 4/ 5</span>
        </div>
        <div className="item-quantity">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    dispatch(addItem({ id, quantity: newQuantity })); // Use addItem action correctly
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price * item.quantity || 0),
    0
  ).toFixed(2);

  return (
   
    <div className="cart-container">
      <h2>Check your Bag Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={handleRemoveItem}
          />
        ))
      )}
      <div className="cart-total">
        <h3>Total: ${totalPrice}</h3>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
   
    
  );
};

export default CartPage;
