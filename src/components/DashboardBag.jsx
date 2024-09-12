import React from "react";
import "../styles/DashboardBag.css";
import cartbag from '../Assets/cartbag.png';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";






function DashboardBag() {
  const cartItems = useSelector(state => state.cart.cartItems);
  console.log("Redux Bag Items:", cartItems);
    return (
      <>
      <div className="vertical-line"></div>
        <div className="bag-area">
<div className="bag-header">
      <h2>Bag</h2>
      <div className="bag-items">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <img 
            key={index} 
            src={item} 
            alt={`Bag item ${index}`} 
            width={100} 
              onError={(e) => { e.target.src = 'path_to_placeholder_image.png'; }}
              />
          ))
        ) : (
          <p>Your bag is empty.</p>
        )}
      </div>
      </div>
            <div className="cta">
                <button className="cta-button">
                    <Link to="/cart" className="cta-icon">
                        <img className="cta-icon-img" src={cartbag} alt="View Bag Icon" />
                    <span className="cta-text">View Bag</span>
                    </Link>
                </button>
            </div>
        </div>
        </>
    );
}
export default DashboardBag;