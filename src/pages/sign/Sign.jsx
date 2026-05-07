import React, { useState } from "react";
import "./Sign.css";
import { NavLink, useNavigate } from "react-router-dom";
import { registerFunc } from "../../services/index";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

function Sign() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await registerFunc(email, password, name);

      if (result && !result.error) {
        alert("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
        navigate("/login");
      } else {
        alert(
          "Xatolik yuz berdi: " +
            (result.message || "Ma'lumotlarni tekshiring"),
        );
      }
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Server bilan bog'lanishda xatolik!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image-side">
        <img src="/imgs/dl.beatsnoop 1.svg" alt="Shopping cart and phone" />
      </div>

      <div className="signup-form-side">
        <div className="form-box">
          <div className="form-header">
            <h2 className="form-title1">Create an account</h2>
            <p className="form-subtitle">
              Enter your details below to get started
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <FiUser className="input-icon" />
              <input
                type="text"
                placeholder="Full Name"
                className="auth-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <FiMail className="input-icon" />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="auth-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <FiLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            <button type="submit" className="create-btn" disabled={loading}>
              {loading ? "Yuklanmoqda..." : "Create Account"}
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button type="button" className="google-btn">
              <FcGoogle className="google-icon" />
              Sign up with Google
            </button>
          </form>

          <div className="form-footer">
            <span>Already have an account?</span>
            <NavLink to="/login" className="login-link">
              Log in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
