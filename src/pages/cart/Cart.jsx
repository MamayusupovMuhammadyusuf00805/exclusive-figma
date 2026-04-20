import React from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: "/imgs/g27cq4-500x500 1.svg",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: "/imgs/g92-2-500x500 1.svg",
    },
  ];

  return (
    <div className="cart-container">
      <div className="breadcrumb">
        <span>Home</span> / <span className="active">Cart</span>
      </div>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="cart-row">
              <td className="product-info1">
                <div className="img-wrapper">
                  <img src={item.image} alt={item.name} />
                  <span className="remove-icon">×</span>
                </div>
                {item.name}
              </td>
              <td>${item.price}</td>
              <td>
                <div className="quantity-box">
                  <input type="number" defaultValue={item.quantity} min="1" />
                </div>
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-actions">
        <button className="secondary-btn">Return To Shop</button>
        <button className="secondary-btn">Update Cart</button>
      </div>

      <div className="cart-bottom">
        <div className="coupon-section">
          <input type="text" placeholder="Coupon Code" />
          <button className="primary-btn">Apply Coupon</button>
        </div>

        <div className="cart-total-card">
          <h3>Cart Total</h3>
          <div className="total-row">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <hr />
          <div className="total-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="total-row bold">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <NavLink to="/chekout">
            <button className="checkout-btn">Process to checkout</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Cart;
