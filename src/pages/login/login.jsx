import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      {/* Chap tomondagi rasm qismi */}
      <div className="login-image-side">
        <img 
          src="/public/imgs/dl.beatsnoop 1.svg" 
          alt="Shopping cart and phone" 
        />
      </div>

      <div className="login-form-side">
        <div className="login-form-box">
          <h2 className="login-title">Log in to Exclusive</h2>
          <p className="login-subtitle">Enter your details below</p>

          <form className="auth-login-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Email or Phone Number" 
              className="login-input" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="login-input" 
            />
            
            <div className="login-actions">
              <button type="submit" className="login-btn">Log In</button>
              <a href="#" className="forgot-password">Forget Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;