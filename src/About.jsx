import React from 'react'
import Navbar from './componets/navbar';
import Footer from './componets/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import demo from './img/damro.jpg'
export default function() {
  return (
    <>
     <Navbar />
      <div className="about-container">
        <div className="about-hero text-center">
          <h1 className="about-title">About Our Furniture Studio</h1>
          <p className="about-subtitle">Crafting Comfort, Elegance & Quality Since 1998</p>
        </div>

        <div className="about-content container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={demo}  alt="Our Studio" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h3>Who We Are</h3>
              <p>
                At ModernWood, we design and build handcrafted furniture that blends timeless craftsmanship
                with contemporary design. Our focus is on delivering both style and durability, using
                sustainably sourced materials.
              </p>
              <h4>What We Do</h4>
              <ul>
                <li>Custom furniture for homes and offices</li>
                <li>Elegant wooden chairs, tables, and sofas</li>
                <li>High-quality finishes and eco-friendly processes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-values container text-center mt-5">
          <h3>Our Values</h3>
          <div className="row mt-4">
            <div className="col-md-4">
              <h5>Craftsmanship</h5>
              <p>We combine tradition and innovation in every piece we make.</p>
            </div>
            <div className="col-md-4">
              <h5>Sustainability</h5>
              <p>All our wood is responsibly sourced to support a greener future.</p>
            </div>
            <div className="col-md-4">
              <h5>Customer First</h5>
              <p>Your satisfaction is at the heart of our business.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
