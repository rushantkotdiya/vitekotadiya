import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Checkout() {
     const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
  };

  return (
    <>
  <Navbar />
      <div className="checkout-container">
        <h2 className="checkout-title">Checkout</h2>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h4 className="section-title">Shipping Details</h4>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>ZIP Code</label>
              <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
            </div>
          </div>

          <h4 className="section-title mt-4">Payment Info</h4>
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Expiration</label>
              <input type="text" name="expiration" placeholder="MM/YY" value={formData.expiration} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
            </div>
          </div>

          <button type="submit" className="place-order-btn">Place Order</button>
        </form>
      </div>
      <Footer />
    </>
  )
}
