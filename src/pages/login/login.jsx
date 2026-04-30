import React, { useState } from "react"; // useState qo'shildi
import { FaEye, FaEyeSlash } from "react-icons/fa"; // react-icons o'rnatilgan bo'lsa
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false); // Holatni saqlash

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-image-side">
        <img src="/imgs/dl.beatsnoop 1.svg" alt="Shopping cart and phone" />
      </div>

      <div className="login-form-side">
        <div className="login-form-box">
          <h2 className="login-title">Log in to Exclusive</h2>
          <p className="login-subtitle">Enter your details below</p>

          <form
            className="auth-login-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="login-input"
            />

            {/* Parol qismi o'zgardi */}
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="login-input password-input"
              />
              <span
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="login-actions">
              <button type="submit" className="login-btn">
                Log In
              </button>
              <a href="#" className="forgot-password">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
