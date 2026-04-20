import React from 'react';
import './Sign.css';
import { Link, NavLink } from 'react-router-dom';

function Sign() {

  return (
    <div className="signup-container">
      <div className="signup-image-side">
        <img 
          src="/imgs/dl.beatsnoop 1.svg" 
          alt="Shopping cart and phone" 
        />
      </div>

      <div className="signup-form-side">
        <div className="form-box">
          <h2 className="form-title">Create an account</h2>
          <p className="form-subtitle">Enter your details below</p>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" className="auth-input" />
            <input type="text" placeholder="Email or Phone Number" className="auth-input" />
            <input type="password" placeholder="Password" className="auth-input" />
            
            <button type="submit" className="create-btn">Create Account</button>
            
            <button type="button" className="google-btn">
              <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google" />
              Sign up with Google
            </button>
          </form>

          <div className="form-footer">
            <span>Already have account?</span>
            <NavLink to="/login">Login Up</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;