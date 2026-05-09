import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ===== COLUMN 1: SUBSCRIBE ===== */}
        <div className="footer-column">
          <h3 className="footer-logo">Exclusive</h3>
          <h4>Subscribe</h4>
          <p className="subscribe-sub">Get 10% off your first order</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button className="send-btn" aria-label="Subscribe">
              <IoSendOutline size={17} />
            </button>
          </div>
        </div>

        {/* ===== COLUMN 2: SUPPORT ===== */}
        <div className="footer-column">
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* ===== COLUMN 3: ACCOUNT ===== */}
        <div className="footer-column">
          <h4>Account</h4>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* ===== COLUMN 4: QUICK LINK ===== */}
        <div className="footer-column">
          <h4>Quick Link</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* ===== COLUMN 5: DOWNLOAD APP ===== */}
        <div className="footer-column">
          <h4>Download App</h4>
          <p className="small-text">Save $3 with App New User Only</p>

          <div className="download-wrapper">
            <div className="qr-code">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=Exclusive"
                alt="QR Code"
              />
            </div>
            <div className="app-buttons">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
              />
            </div>
          </div>

          <div className="social-icons">
            <button className="social-icon-btn facebook" aria-label="Facebook">
              <FaFacebookF />
            </button>
            <button className="social-icon-btn twitter" aria-label="Twitter">
              <FaTwitter />
            </button>
            <button className="social-icon-btn instagram" aria-label="Instagram">
              <FaInstagram />
            </button>
            <button className="social-icon-btn linkedin" aria-label="LinkedIn">
              <FaLinkedinIn />
            </button>
          </div>
        </div>

      </div>

      {/* ===== FOOTER BOTTOM ===== */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Copyright Exclusive. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
