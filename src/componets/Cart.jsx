import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Ensure each item has quantity
    const initializedCart = storedCart.map(item => ({
      ...item,
      quantity: item.quantity || 1
    }));
    setCartItems(initializedCart);
  }, []);

  const updateCartStorage = (items) => {
    localStorage.setItem('cart', JSON.stringify(items));
    setCartItems(items);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    updateCartStorage(updatedCart);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    updateCartStorage(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCartStorage(updatedCart);
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-message">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-item-info">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div>
                      <h6 className="item-name">{item.name}</h6>
                      <p className="item-price">₹{item.price}</p>
                      <div className="quantity-control">
                        <button onClick={() => decreaseQuantity(index)} className="qty-btn">−</button>
                        <span className="qty-number">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(index)} className="qty-btn">+</button>
                      </div>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              ))}
            </div>
            <h4 className="total-price">Total: ₹{totalPrice.toFixed(2)}</h4>
            <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
