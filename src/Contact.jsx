import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/navbar';
import Footer from './componets/footer';
export default function Contact() {
      const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  return (
   
    <>
 <Navbar />
      <div className="contact-container">
        <div className="contact-header text-center">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Reach out with your questions, feedback, or custom orders.</p>
        </div>

        <div className="container contact-form-area">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="mb-3">
              <label>Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label>Message</label>
              <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="send-btn">Send Message</button>
          </form>

          <div className="contact-info mt-5">
            <h4>Our Office</h4>
            <p>123 Furniture Street, Interior City, DesignLand 45678</p>
            <p><strong>Email:</strong> support@modernwood.com</p>
            <p><strong>Phone:</strong> +1 234 567 8900</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
