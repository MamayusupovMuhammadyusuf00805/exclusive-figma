import React, { useState } from "react";
import "./Account.css";
import { updateProfileFunc } from "../../services/index";

function Account() {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("access_token"); 

    if (!token) {
      alert("Siz tizimga kirmagansiz!");
      setLoading(false);
      return;
    }

    const updateData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email_or_phone: formData.email, 
      password: formData.new_password, 
    };

    const result = await updateProfileFunc(token, updateData);

    if (result && !result.error) {
      alert("Profil muvaffaqiyatli yangilandi!");
    } else {
      alert("Xatolik: " + result.message);
    }
    setLoading(false);
  };

  return (
    <div className="account-container">

      <main className="profile-card">
        <h2 className="form-title">Edit Your Profile</h2>
        <form className="profile-form" onSubmit={handleSaveChanges}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="Md"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Rimel"
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
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Kingston, 5236, United State"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="password-section">
            <label>Password Changes</label>
            <input
              type="password"
              name="current_password"
              placeholder="Current Password"
              onChange={handleChange}
            />
            <input
              type="password"
              name="new_password"
              placeholder="New Password"
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm New Password"
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-save" disabled={loading}>
              {loading ? "Saqlanmoqda..." : "Save Changes"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Account;
