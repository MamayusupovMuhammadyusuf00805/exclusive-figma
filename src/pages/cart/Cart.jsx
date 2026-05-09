import React, { useState } from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

function Cart() {
  const [cartItems, setCartItems] = useState([
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
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  return (
    <div className="cart-container">
      <div className="breadcrumb">
        <NavLink to="/">Home</NavLink>
        <span> / </span>
        <span className="active">Cart</span>
      </div>

      <div className="cart-list">
        <div className="cart-header">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="cart-row">
            <div className="product-info1">
              <div className="img-wrapper">
                <div className="remove-icon">
                  <IoCloseOutline />
                </div>
                <img src={item.image} alt={item.name} />
              </div>
              <span className="product-name">{item.name}</span>
            </div>

            <div className="cart-price">${item.price}</div>

            <div className="cart-quantity">
              <div className="quantity-box">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value) || 1)
                  }
                />
              </div>
            </div>

            <div className="cart-subtotal">${item.price * item.quantity}</div>
          </div>
        ))}
      </div>

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
