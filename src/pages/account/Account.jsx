import React from "react";
import "./Account.css";

function Account() {
  return (
    <div className="account-container">
      <div className="account-header">
        <div className="breadcrumb">
          <span className="breadcrumb-fade">Home /</span>{" "}
          <span className="breadcrumb-active">My Account</span>
        </div>
        <div className="welcome-msg">
          Welcome! <span className="user-name">Md Rimel</span>
        </div>
      </div>

      <div className="account-layout">
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Manage My Account</h3>
            <ul className="sidebar-list">
              <li className="sidebar-item active">My Profile</li>
              <li className="sidebar-item">Address Book</li>
              <li className="sidebar-item">My Payment Options</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">My Orders</h3>
            <ul className="sidebar-list">
              <li className="sidebar-item">My Returns</li>
              <li className="sidebar-item">My Cancellations</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">My WishList</h3>
          </div>
        </aside>

        <main className="profile-card">
          <h2 className="form-title">Edit Your Profile</h2>

          <form className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Md" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Rimel" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="rimel1111@gmail.com" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" placeholder="Kingston, 5236, United State" />
              </div>
            </div>

            <div className="password-section">
              <label>Password Changes</label>
              <input type="password" placeholder="Current Password" />
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confirm New Password" />
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel">
                Cancel
              </button>
              <button type="submit" className="btn-save">
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Account;
