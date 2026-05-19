import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"; // React Router qo'shildi
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ===== COLUMN 1: SUBSCRIBE ===== */}
        <div className="footer-column">
          <h3 className="footer-logo">Exclusive</h3>
          <h4>{t("footer.subscribe")}</h4>
          <p className="subscribe-sub">{t("footer.get10off")}</p>
          <div className="subscribe-box">
            <input type="email" placeholder={t("footer.enterEmail")} />
            <button className="send-btn" aria-label="Subscribe">
              <IoSendOutline size={17} className="send-icon" />
            </button>
          </div>
        </div>

        {/* ===== COLUMN 2: SUPPORT ===== */}
        <div className="footer-column">
          <h4>{t("footer.support")}</h4>
          <p>
            111 Bijoy sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* ===== COLUMN 3: ACCOUNT ===== */}
        <div className="footer-column">
          <h4>{t("footer.account")}</h4>
          <ul>
            <li>
              <Link to="/account">{t("account.myAccount")}</Link>
            </li>
            <li>
              <Link to="/login">{t("auth.login")} / {t("auth.signup")}</Link>
            </li>
            <li>
              <Link to="/cart">{t("nav.cart")}</Link>
            </li>
            <li>
              <Link to="/washlist">{t("Washlist")}</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>

        {/* ===== COLUMN 4: QUICK LINK ===== */}
        <div className="footer-column">
          <h4>{t("footer.quickLink")}</h4>
          <ul>
            <li>
              <Link to="/privacy-policy">{t("footer.privacyPolicy")}</Link>
            </li>
            <li>
              <Link to="/terms-of-use">{t("footer.termsOfUse")}</Link>
            </li>
            <li>
              <Link to="/faq">{t("footer.faq")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("nav.contact")}</Link>
            </li>
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
            <button
              className="social-icon-btn instagram"
              aria-label="Instagram"
            >
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
        <p>
          © {new Date().getFullYear()} Copyright Exclusive. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;