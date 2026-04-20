import React, { useState } from "react";
import "./Navbar.css";
import {
  IoSearchOutline,
  IoHeartOutline,
  IoCartOutline,
  IoChevronDownOutline,
} from "react-icons/io5";
import {
  FiUser,
  FiShoppingBag,
  FiXCircle,
  FiStar,
  FiLogOut,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
            <NavLink to="/washlist">
              <button className="icon-btn">
                <IoHeartOutline size={26} />
              </button>
            </NavLink>
            <NavLink to="/cart">
              <button className="icon-btn">
              <IoCartOutline size={26} />
            </button>
            </NavLink>
            

            <div className="user-menu-container">
              <button
                onClick={toggleDropdown}
                className={`icon-btn ${isDropdownOpen ? "active-user" : ""}`}
              >
                <FiUser size={26} />
              </button>

              {isDropdownOpen && (
                <div className="user-dropdown">
                  <ul>
                    <NavLink to="/account">
                      <li>
                        <FiUser size={20} /> <span>Manage My Account</span>
                      </li>
                    </NavLink>
                    <li>
                      <FiShoppingBag size={20} /> <span>My Order</span>
                    </li>
                    <li>
                      <FiXCircle size={20} /> <span>My Cancellations</span>
                    </li>
                    <li>
                      <FiStar size={20} /> <span>My Reviews</span>
                    </li>
                    <li>
                      <FiLogOut size={20} /> <span>Logout</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
