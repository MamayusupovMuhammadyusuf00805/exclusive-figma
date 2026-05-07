import React, { useState } from "react";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { loginFunc } from "../../services/index";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!", {});
      return;
    }

    const result = await loginFunc(email, password);

    if (result && !result.error) {
      localStorage.setItem("access_token", result.access);
      localStorage.setItem("isAuth", "true");
      if (result.first_name) {
        localStorage.setItem("user_name", result.first_name);
      }

      window.dispatchEvent(new Event("authChange"));

      toast.success("Muvaffaqiyatli tizimga kirdingiz!", {});
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      toast.error(result.message || "Login yoki parol xato", {});
    }
  };

  return (
    <div className="login-container">
      <ToastContainer toastClassName="custom-toast-container" />

      <div className="login-image-side">
        <img src="/imgs/dl.beatsnoop 1.svg" alt="Shopping cart and phone" />
      </div>

      <div className="login-form-side">
        <div className="login-form-box">
          <div className="login-form-header">
            <h2 className="login-title">Log in to Exclusive</h2>
            <p className="login-subtitle">Enter your details below</p>
          </div>

          <form className="auth-login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <FiMail className="input-icon" />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <FiLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
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
