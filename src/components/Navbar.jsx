import React, { useState, useEffect, useRef, useContext } from "react";
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
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../App";

function Navbar() {
  const { wishlist, cartData } = useContext(DataContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
    setIsDropdownOpen(false);
    navigate("/login");
  };

  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth") === "true");

    const handleAuthChange = () => {
      setIsAuth(localStorage.getItem("isAuth") === "true");
    };
    window.addEventListener("authChange", handleAuthChange);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div
          className="nav-logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          Exclusive
        </div>

        <ul className="nav-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {!isAuth && (
            <li>
              <NavLink to="/sign">Sign Up</NavLink>
            </li>
          )}
        </ul>

        <div className="nav-actions">
          <div className="search-container">
            <input type="text" placeholder="What are you looking for?" />
            <IoSearchOutline className="search-icon" size={20} />
          </div>

          <div className="icon-group">
            <NavLink to="/washlist" className="nav-icon-container">
              <IoHeartOutline size={28} />
              {wishlist?.length > 0 && (
                <span className="icon-badge">{wishlist.length}</span>
              )}
            </NavLink>

            <NavLink to="/cart" className="nav-icon-container">
              <IoCartOutline size={28} />
              {cartData?.length > 0 && (
                <span className="icon-badge">{cartData.length}</span>
              )}
            </NavLink>

            {isAuth && (
              <div className="user-menu-container" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className={`icon-btn ${isDropdownOpen ? "active-user" : ""}`}
                >
                  <FiUser size={26} />
                </button>

                {isDropdownOpen && (
                  <div
                    className={`user-dropdown ${isDropdownOpen ? "active" : ""}`}
                  >
                    <ul>
                      <NavLink
                        to="/account"
                        style={{ textDecoration: "none" }}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <li>
                          <FiUser size={20} /> <span>Manage My Account</span>
                        </li>
                      </NavLink>
                      <li onClick={() => setIsDropdownOpen(false)}>
                        <FiShoppingBag size={20} /> <span>My Order</span>
                      </li>
                      <li onClick={() => setIsDropdownOpen(false)}>
                        <FiXCircle size={20} /> <span>My Cancellations</span>
                      </li>
                      <li onClick={() => setIsDropdownOpen(false)}>
                        <FiStar size={20} /> <span>My Reviews</span>
                      </li>
                      <li onClick={handleLogout}>
                        <FiLogOut size={20} /> <span>Logout</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
