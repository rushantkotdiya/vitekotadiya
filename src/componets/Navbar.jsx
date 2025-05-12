import React from 'react';
import { Container, Navbar as BSNavbar, Nav, Button } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';

export default function Navbar() {
 const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session or token if needed here
    // localStorage.removeItem('token'); // Optional

    navigate('/'); // this goes to Index route
  };
  return (
    <BSNavbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container className="d-flex justify-content-between align-items-center">
        <BSNavbar.Brand href="#" className="fw-bold fs-4">
          🪑 Furniture
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-3 d-flex align-items-center gap-4">
            <Nav.Link href="/home" className="text-dark">Home</Nav.Link>
            <Nav.Link href="/cart" className="text-dark">cart</Nav.Link>
            <Nav.Link href="/about" className="text-dark">About</Nav.Link>
            <Nav.Link href="/contact" className="text-dark">Contact Us</Nav.Link>
          </Nav>
          <Button variant="dark" onClick={handleLogout}>Logout</Button>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
