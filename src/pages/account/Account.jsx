import React, { useState, useEffect } from "react";
import "./Account.css";
import { updateProfileFunc } from "../../services/index";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Account() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");
  const [activeTab, setActiveTab] = useState("My Profile");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
    } else {
      const savedName = localStorage.getItem("user_name");
      if (savedName) setUserName(savedName);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    if (
      formData.new_password &&
      formData.new_password !== formData.confirm_password
    ) {
      toast.error("Yangi parollar mos kelmadi!", {
        theme: "light",
        transition: Slide,
        className: "custom-toast-error",
      });
      return;
    }

    setLoading(true);
    const token = localStorage.getItem("access_token");

    const updateData = {};
    if (formData.first_name) updateData.first_name = formData.first_name;
    if (formData.last_name) updateData.last_name = formData.last_name;
    if (formData.email) updateData.email_or_phone = formData.email;
    if (formData.new_password) updateData.password = formData.new_password;

    try {
      const result = await updateProfileFunc(token, updateData);

      if (result && !result.error) {
        toast.success("Profil muvaffaqiyatli yangilandi!", {
          theme: "light",
          transition: Slide,
          className: "custom-toast-success",
        });

        if (formData.first_name) {
          localStorage.setItem("user_name", formData.first_name);
          setUserName(formData.first_name);
        }

        setFormData({
          ...formData,
          current_password: "",
          new_password: "",
          confirm_password: "",
        });
      } else {
        toast.error("Xatolik: " + (result?.message || "Noma'lum xato"), {
          theme: "light",
          className: "custom-toast-error",
        });
      }
    } catch (error) {
      toast.error("Server bilan bog'lanishda xatolik", {
        theme: "light",
        className: "custom-toast-error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="account-container">
      <ToastContainer toastClassName="custom-toast-container" />

      <header className="account-header">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-fade">
            Home
          </Link>
          <span className="breadcrumb-separator"> / </span>
          <span className="breadcrumb-current">My Account</span>
        </div>
        <div className="welcome-msg">
          Welcome! <span className="user-name-highlight">{userName}</span>
        </div>
      </header>

      <div className="account-layout">
        <aside className="account-sidebar">
          <div className="sidebar-group">
            <h3 className="sidebar-title">Manage My Account</h3>
            <ul className="sidebar-list">
              <li
                className={`sidebar-item ${activeTab === "My Profile" ? "active" : ""}`}
                onClick={() => setActiveTab("My Profile")}
              >
                My Profile
              </li>
              <li
                className={`sidebar-item ${activeTab === "Address Book" ? "active" : ""}`}
                onClick={() => setActiveTab("Address Book")}
              >
                Address Book
              </li>
              <li
                className={`sidebar-item ${activeTab === "My Payment Options" ? "active" : ""}`}
                onClick={() => setActiveTab("My Payment Options")}
              >
                My Payment Options
              </li>
            </ul>
          </div>

          <div className="sidebar-group">
            <h3 className="sidebar-title">My Orders</h3>
            <ul className="sidebar-list">
              <li
                className={`sidebar-item ${activeTab === "My Returns" ? "active" : ""}`}
                onClick={() => setActiveTab("My Returns")}
              >
                My Returns
              </li>
              <li
                className={`sidebar-item ${activeTab === "My Cancellations" ? "active" : ""}`}
                onClick={() => setActiveTab("My Cancellations")}
              >
                My Cancellations
              </li>
            </ul>
          </div>

          <div className="sidebar-group">
            <h3 className="sidebar-title">My WishList</h3>
          </div>
        </aside>

        <main className="profile-content">
          <div className="profile-card">
            <h2 className="form-main-title">Edit Your Profile</h2>

            <form className="profile-form" onSubmit={handleSaveChanges}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Md"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Rimel"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="rimel1111@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Kingston, 5236, United State"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="password-section">
                <label>Password Changes</label>
                <div className="password-inputs">
                  <div className="password-input-group">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      name="current_password"
                      placeholder="Current Password"
                      value={formData.current_password}
                      onChange={handleChange}
                    />
                    <span
                      className="eye-icon"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                    >
                      {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                  </div>

                  <div className="password-input-group">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      name="new_password"
                      placeholder="New Password"
                      value={formData.new_password}
                      onChange={handleChange}
                    />
                    <span
                      className="eye-icon"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                  </div>

                  <div className="password-input-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirm_password"
                      placeholder="Confirm New Password"
                      value={formData.confirm_password}
                      onChange={handleChange}
                    />
                    <span
                      className="eye-icon"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-save" disabled={loading}>
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Account;
