import React from 'react'

export default function Footer() {
  return (
    <>
     <footer className="footer bg-dark text-white pt-5 pb-4">
  <div className="container">
    <div className="row">
      {/* Brand and Description */}
      <div className="col-md-4 mb-4">
        <h5 className="text-uppercase fw-bold">FurnitureCo</h5>
        <p>Crafting comfort and elegance with premium modern furniture collections for every space.</p>
      </div>

      {/* Quick Links */}
      <div className="col-md-2 mb-4">
        <h6 className="text-uppercase fw-semibold">Quick Links</h6>
        <ul className="list-unstyled">
          <li><a href="home" className="footer-link">Home</a></li>
        <li><a href="catr" className="footer-link">cart</a></li>
     <li><a href="about" className="footer-link">About</a></li>
          <li><a href="contact" className="footer-link">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="col-md-3 mb-4">
        <h6 className="text-uppercase fw-semibold">Contact</h6>
        <p><i className="bi bi-geo-alt me-2"></i>123 Design Street, NY</p>
        <p><i className="bi bi-telephone me-2"></i>+1 (800) 123-4567</p>
        <p><i className="bi bi-envelope me-2"></i>info@furnitureco.com</p>
      </div>

      {/* Social Media */}
      <div className="col-md-3 mb-4">
        <h6 className="text-uppercase fw-semibold">Follow Us</h6>
        <div className="d-flex gap-3">
          <a href="https://www.facebook.com/" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-white fs-5"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-white fs-5"><i className="bi bi-pinterest"></i></a>
        </div>
      </div>
    </div>
    <hr className="border-top border-light" />
    <div className="text-center small">
      &copy; {new Date().getFullYear()} FurnitureCo. All rights reserved.
    </div>
  </div>
</footer>
    </>
  )
}
