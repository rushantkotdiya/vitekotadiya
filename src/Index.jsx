import React from 'react';
import { Container, Navbar as BSNavbar, Nav, Button } from 'react-bootstrap';

import Footer from './componets/footer';
import furniture from './img/Furniture.avif';
import maiore from './img/Maiore.jpg'
import impedit from './img/impedit.avif'
import denounce from './img/Denounce.jpg'
import repetition from './img/repetition.jpeg'
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <div className="app">
        {/* Navbar */}
        <BSNavbar bg="white" expand="lg" className="shadow-sm py-3">
          <Container className="d-flex justify-content-between align-items-center">
            <BSNavbar.Brand href="#" className="fw-bold fs-4">🪑 Furniture</BSNavbar.Brand>
            <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BSNavbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto me-3 d-flex align-items-center gap-4">
                <Nav  className="text-dark"><a href="Login">Home</a></Nav>
                <Nav className="text-dark"><a href="Login">About</a></Nav>
                <Nav  className="text-dark"><a href="Login">Contact Us</a></Nav>
              </Nav>
             <Link to="/login" className="text-white text-decoration-none"> <Button variant="dark">Login</Button></Link>
            </BSNavbar.Collapse>
          </Container>
        </BSNavbar>

        {/* Hero Section */}
        <section className="hero-section d-flex flex-wrap justify-content-between align-items-center p-5">
          <div className="hero-text col-md-6 mb-4">
            <h1 className="fw-bold display-5">Morden Furniture Brands</h1>
            <p className="discount text-danger fs-4 fw-semibold">Up To 50% Off</p>
            <button className="btn btn-primary mt-2"><a href='Login'>View Collection</a></button>
          </div>
          <div className="hero-img col-md-5 text-center">
            <img src={furniture} alt="Furniture" className="img-fluid rounded shadow" />
          </div>
        </section>

        {/* Top Products */}
        <section className="top-products p-4">
          <div className="section-header d-flex justify-content-between align-items-center mb-3">
            <h3 className="fw-bold">Top Product</h3>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="product-card card text-center  shadow-sm h-100">
                <span className="badge bg-danger position-absolute m-2">-20%</span>
                <img src={maiore} className="card-img-top " alt="Maiores" />
                <div className="card-body">
                  <h5 className="card-title">Sofa</h5>
                  <div className="stars mb-2">⭐⭐⭐⭐⭐</div>
                  <button className="btn btn-outline-primary btn-sm"><a href='Login'>show detail</a></button>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="product-card card text-center  shadow-sm h-100">
                <span className="badge bg-danger position-absolute m-2">-20%</span>
                <img src={impedit} className="card-img-top " alt="Impedit" />
                <div className="card-body">
                  <h5 className="card-title">full size Bed</h5>
                  <div className="stars mb-2">⭐⭐⭐⭐⭐</div>
                  <button className="btn btn-outline-primary btn-sm"><a href='Login'>show detail</a></button>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="product-card card text-center  shadow-sm h-100">
                <span className="badge bg-danger position-absolute m-2">-20%</span>
                <img src={denounce} className="card-img-top" alt="Repetition" />
                <div className="card-body">
                  <h5 className="card-title">TV STAND</h5>
                  <div className="stars mb-2">⭐⭐⭐⭐⭐</div>
                  <button className="btn btn-outline-primary btn-sm"><a href='Login'>show detail</a></button>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="product-card card text-center  shadow-sm h-100">
                <span className="badge bg-danger position-absolute m-2">-20%</span>
                <img src={repetition} className="card-img-top" alt="Denounce" />
                <div className="card-body">
                  <h5 className="card-title">Dining Table</h5>
                  <div className="stars mb-2">⭐⭐⭐⭐⭐</div>
                  <button className="btn btn-outline-primary btn-sm"><a href='Login'>show detail</a></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="trending-section text-center p-5 bg-light rounded">
          <div className="row">
            <div className="col"><h4>300,000+</h4><p>Customers</p></div>
            <div className="col"><h4>80+</h4><p>Brands</p></div>
            <div className="col"><h4>2000+</h4><p>Products</p></div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
