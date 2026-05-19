import React, { useState, useEffect, useRef, useContext } from "react";
import "./Navbar.css";
import {
  IoSearchOutline,
  IoHeartOutline,
  IoCartOutline,
  IoChevronDownOutline,
  IoCloseOutline,
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
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const { wishlist, cartData } = useContext(DataContext);
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
    closeDropdown();
    closeMobileMenu();
    navigate("/login");
  };

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* Auth state + outside-click listener */
  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth") === "true");

    const handleAuthChange = () => {
      setIsAuth(localStorage.getItem("isAuth") === "true");
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        closeDropdown();
      }
    };

    window.addEventListener("authChange", handleAuthChange);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* Close mobile drawer on Escape key */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        closeDropdown();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="navbar-wrapper">

        {/* ===== TOP BANNER ===== */}
        <div className="top-banner">
          <div className="promo-content">
            <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
            <a href="#">Shop Now</a>
          </div>
          <LanguageSwitcher />
        </div>

        {/* ===== MAIN NAV ===== */}
        <nav className="main-nav" role="navigation" aria-label="Main navigation">

          {/* Logo */}
          <div
            className="nav-logo"
            onClick={() => navigate("/")}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate("/")}
            aria-label="Exclusive – go to home"
          >
            Exclusive
          </div>

          {/* Desktop menu */}
          <ul className="nav-menu" role="list">
            <li><NavLink to="/">{t('nav.home')}</NavLink></li>
            <li><NavLink to="/contact">{t('nav.contact')}</NavLink></li>
            <li><NavLink to="/about">{t('nav.about')}</NavLink></li>
            {!isAuth && <li><NavLink to="/sign">{t('nav.signup')}</NavLink></li>}
          </ul>

          {/* Desktop actions */}
          <div className="nav-actions">
            <div className="search-container" role="search">
              <input
                type="search"
                placeholder={t('nav.search')}
                aria-label="Search products"
              />
              <IoSearchOutline className="search-icon" size={18} aria-hidden="true" />
            </div>

            <div className="icon-group">
              <NavLink to="/washlist" className="nav-icon-container" aria-label={`Wishlist${wishlist?.length > 0 ? `, ${wishlist.length} items` : ""}`}>
                <IoHeartOutline size={26} />
                {wishlist?.length > 0 && (
                  <span className="icon-badge" aria-hidden="true">{wishlist.length}</span>
                )}
              </NavLink>

              <NavLink to="/cart" className="nav-icon-container" aria-label={`Cart${cartData?.length > 0 ? `, ${cartData.length} items` : ""}`}>
                <IoCartOutline size={26} />
                {cartData?.length > 0 && (
                  <span className="icon-badge" aria-hidden="true">{cartData.length}</span>
                )}
              </NavLink>

              {isAuth && (
                <div className="user-menu-container" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className={`icon-btn ${isDropdownOpen ? "active-user" : ""}`}
                    aria-label="User menu"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="menu"
                  >
                    <FiUser size={22} />
                  </button>

                  <div
                    className={`user-dropdown ${isDropdownOpen ? "active" : ""}`}
                    role="menu"
                    aria-label="User menu"
                  >
                    <ul>
                      <NavLink
                        to="/account"
                        style={{ textDecoration: "none" }}
                        onClick={closeDropdown}
                        role="menuitem"
                      >
                        <li><FiUser size={16} /> <span>{t('account.myAccount')}</span></li>
                      </NavLink>
                      <li onClick={closeDropdown} role="menuitem">
                        <FiShoppingBag size={16} /> <span>{t('account.myOrders')}</span>
                      </li>
                      <li onClick={closeDropdown} role="menuitem">
                        <FiXCircle size={16} /> <span>My Cancellations</span>
                      </li>
                      <li onClick={closeDropdown} role="menuitem">
                        <FiStar size={16} /> <span>My Reviews</span>
                      </li>
                      <li onClick={handleLogout} role="menuitem">
                        <FiLogOut size={16} /> <span>{t('account.logout')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ===== MOBILE RIGHT SIDE: icons + hamburger ===== */}
          {/* Only rendered at ≤768px via CSS */}
          <div className="nav-right-mobile">
            <NavLink
              to="/washlist"
              className="nav-icon-mobile"
              aria-label={`Wishlist${wishlist?.length > 0 ? `, ${wishlist.length} items` : ""}`}
            >
              <IoHeartOutline size={24} />
              {wishlist?.length > 0 && (
                <span className="drawer-icon-badge" aria-hidden="true">{wishlist.length}</span>
              )}
            </NavLink>

            <NavLink
              to="/cart"
              className="nav-icon-mobile"
              aria-label={`Cart${cartData?.length > 0 ? `, ${cartData.length} items` : ""}`}
            >
              <IoCartOutline size={24} />
              {cartData?.length > 0 && (
                <span className="drawer-icon-badge" aria-hidden="true">{cartData.length}</span>
              )}
            </NavLink>

            <button
              className={`hamburger-btn ${mobileMenuOpen ? "open" : ""}`}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>

      {/* ===== MOBILE OVERLAY ===== */}
      {/* Uses visibility+opacity transition instead of display toggle */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* ===== MOBILE DRAWER ===== */}
      <div
        id="mobile-drawer"
        className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="drawer-header">
          <div className="drawer-logo">Exclusive</div>
          <button
            className="drawer-close-btn"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          >
            <IoCloseOutline size={20} />
          </button>
        </div>

        {/* Drawer search */}
        <div className="drawer-search" role="search">
          <div className="drawer-search-inner">
            <IoSearchOutline size={18} color="#808080" aria-hidden="true" />
            <input
              type="search"
              placeholder={t('nav.search')}
              aria-label="Search products"
            />
          </div>
        </div>

        {/* Drawer navigation */}
        <nav className="drawer-nav" aria-label="Mobile navigation">
          <NavLink to="/" onClick={closeMobileMenu}>{t('nav.home')}</NavLink>
          <NavLink to="/contact" onClick={closeMobileMenu}>{t('nav.contact')}</NavLink>
          <NavLink to="/about" onClick={closeMobileMenu}>{t('nav.about')}</NavLink>

          {!isAuth && (
            <NavLink to="/sign" onClick={closeMobileMenu}>{t('nav.signup')}</NavLink>
          )}

          {isAuth && (
            <>
              <NavLink to="/account" onClick={closeMobileMenu}>
                <FiUser size={16} /> {t('account.myAccount')}
              </NavLink>
              <span className="drawer-nav-item">
                <FiShoppingBag size={16} /> {t('account.myOrders')}
              </span>
              <span className="drawer-nav-item">
                <FiXCircle size={16} /> My Cancellations
              </span>
              <span className="drawer-nav-item">
                <FiStar size={16} /> My Reviews
              </span>
            </>
          )}
        </nav>

        {/* Drawer footer: logout */}
        {isAuth && (
          <div className="drawer-footer">
            <button className="drawer-logout-btn" onClick={handleLogout}>
              <FiLogOut size={16} />
              {t('account.logout')}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;