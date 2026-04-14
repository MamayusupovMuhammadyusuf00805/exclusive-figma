import React from "react";
import "./Navbar.css";
import {
  IoSearchOutline,
  IoHeartOutline,
  IoCartOutline,
  IoChevronDownOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="top-banner">
        <div className="promo-content">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <a href="#">ShopNow</a>
        </div>
        <div className="lang-selector">
          English <IoChevronDownOutline size={18} />
        </div>
      </div>

      <nav className="main-nav">
        <div className="nav-logo">Exclusive</div>

        <ul className="nav-menu">
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <NavLink to="/sign">Sign Up</NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <div className="search-container">
            <input type="text" placeholder="What are you looking for?" />
            <IoSearchOutline className="search-icon" size={20} />
          </div>

          <div className="icon-group">
            <button className="icon-btn">
              <IoHeartOutline size={26} />
            </button>
            <button className="icon-btn">
              <IoCartOutline size={26} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
