import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/componets/styles/style.css'
import Home from './home';
import Pn from './Pn';
import Index from './Index';
import Login from './componets/Login';
import Product from './componets/Product';
import Cart from './componets/Cart';
import Checkout from './componets/Checkout';
import About from './About';
import Contact from './Contact';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route index  element={<Index />} />
        < Route path="./home" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        < Route path="Login" element={<Login />} />
        < Route path="product" element={<Product />} />
        < Route path="cart" element={<Cart />} />
        < Route path="checkout" element={<Checkout />} />
        < Route path="about" element={<About />} />
        < Route path="contact" element={<Contact />} />
        < Route path="*" element={<Pn />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
