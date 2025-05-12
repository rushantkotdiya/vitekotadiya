import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './navbar';
import Footer from '../componets/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProductImage from '../img/maiore.jpg'; // Replace with actual image
import impedit from '../img/Impedit.avif';    // Replace with actual image
import denounce from '../img/Denounce.jpg'
import repetition from '../img/repetition.jpeg'
import fullsofa from '../img/fullsofa.jpeg'
import teble from '../img/Table.jpeg'
import chair from '../img/Chair.avif'
import bunkbed from '../img/bunkbed.avif'
import desk from '../img/desk.jpg'
import chair1 from '../img/chair1.webp'
import zula from '../img/zula.jpg'
import loungechair from '../img/loungechair.jpg'

export default function Product() {
  const { id } = useParams();

  // Product list
  const products = {
    '1': {
      name: 'Sofa',
      price: 7655,
      description:
        'A luxurious, modern wooden sofa designed for comfort and style. Perfect for living rooms and lounges.',
      rating: 4.5,
      image: ProductImage,
    },
    '2': {
      name: 'full size Bed',
      price: 17519,
      description:
        'HDWOOD Engineered Wood Queen Size Fabric Bed With Linen Designed Headboard For Bedroom| Engineered Wood Queen Bed ',
      rating: 4.2,
      image: impedit,
    },
    '3': {
      name: 'TV STAND',
      price: 5499,
      description:
        'FURNEASER Kashvi Tv Cabinet, Unit, Stand, Rack, Table, Engineered Wood TV Entertainment Unit ',
      rating: 4.2,
      image: denounce,
    },
    '4': {
      name: 'Dining Tagle',
      price: 8352,
      description:
        'Smarts collection Royal look Wood & Wrought Iron Patio Furniture Set Solid Wood 4 Seater Dining Set',
      rating: 4.2,
      image: repetition,
    },
    '5': {
      name: 'full size sofa',
      price: 14999,
      description:
        'Seventh Heaven Milan 3 Seater Sofa, Extra Spacious, Chenille Molfino Fabric: 2 Year Warranty Fabric 3 Seater Sofa ',
      rating: 4.2,
      image:  fullsofa,
    },
     '6': {
      name: 'Table',
      price: 3500,
      description:
        'Floresta Wud Beautiful Coffee Table For Living Room/ Restaurant/ Hotel/ Office || Engineered Wood Coffee Table ',
      rating: 4.2,
      image:  teble,
    },
     '7': {
      name: ' Chair',
      price: 5999,
      description:
        'This elegantly crafted wooden chair adds warmth and character to your living space. Made from premium oak wood with a smooth finish ',
      rating: 4.2,
      image:  chair,
    },
    '8': {
      name: ' Bunk Bed',
      price:28999,
      description:
        'APRODZ Solid Wood Bunk Bed ',
      rating: 4.2,
      image:  bunkbed,
    },
        '9': {
      name: ' Desk',
      price: 6841,
      description:
        'SIVOM Prism Multipurpose Study/Home/Office Table Engineered Wood Study Table',
      rating: 4.2,
      image:   desk ,
    },
     '10': {
      name: ' Chair',
      price: 5399,
      description:
        'Oakcraft Velvet Lounge/Dinning/Accent Chairs with Engineered Metal Legs Metal Living Room Chair',
      rating: 4.2,
      image:  chair1  ,
    },
     '11': {
      name: ' Zula',
      price: 16646,
      description:
        'Smarts collection Indoor/Outdoor Iron Swing(Jhula)with Stand 300 kg Cap Iron, Wooden Large Swing ',
      rating: 4.2,
      image:  zula ,
    },
    '12': {
      name: ' Lounge Chair',
      price: 8999,
      description:
        'MT BROTHERS Zero Gravity Lawn Chair Anti Gravity Lounge Chair Adjustable Recliner',
      rating: 4.2,
      image:  loungechair ,
    },
  };

  const product = products[id];

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container py-5 text-center">
          <h2 className="text-danger">Product Not Found</h2>
          <Link to="/home" className="btn btn-outline-dark mt-3">Back to Shop</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">{product.name}</h2>
              <p className="text-muted mb-2">⭐⭐⭐⭐☆ ({product.rating})</p>
              <h4 className="text-warning fw-semibold mb-3">₹{product.price}</h4>
              <p className="mb-4">{product.description}</p>
              <div className="d-flex gap-2">

                <button
                  className="btn btn-dark px-4 rounded-pill"
                  onClick={() => {
                    const cart = JSON.parse(localStorage.getItem('cart')) || [];
                    cart.push(product);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    alert('Product added to cart!');
                  }}
                >
                Add to Cart
                </button>
                <Link to="/home" className="btn btn-outline-secondary rounded-pill">Back to Shop</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
