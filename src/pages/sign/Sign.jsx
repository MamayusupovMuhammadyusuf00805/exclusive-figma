import React, { useState } from "react";
import "./Sign.css";
import { NavLink, useNavigate } from "react-router-dom";
import { registerFunc } from "../../services/index";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
          <h2 className="form-title">Create an account</h2>
          <p className="form-subtitle">Enter your details below</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="auth-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-wrapper" style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="auth-input"
                style={{ width: "100%" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "0",
                  bottom: "10px",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit" className="create-btn" disabled={loading}>
              {loading ? "Yuklanmoqda..." : "Create Account"}
            </button>

            <button type="button" className="google-btn">
              <img
                src="https://img.icons8.com/color/20/000000/google-logo.png"
                alt="Google"
              />
              Sign up with Google
            </button>
          </form>

          <div className="form-footer">
            <span>Already have account?</span>
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
