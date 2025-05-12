import React from 'react'

export default function Menubar() {
  return (
   <>
   {/* Category & Menu Bar */}
      <div className="menu-bar">
        <div className="container">
          <div className="category-dropdown">
            <select className="form-select">
              <option>All Categories</option>
              <option>Mobiles</option>
              <option>Laptops</option>
              <option>Accessories</option>
            </select>
          </div>
          <ul className="nav-menu">
            <li><a href="#" className="active">HOME</a></li>
            <li><a href="#">ELECTRONICS</a></li>
            <li><a href="#">APPLIANCES</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">NEW ARRIVALS</a></li>
            <li><a href="#">PAGES</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </div>
      </div>
   </>
  )
}
