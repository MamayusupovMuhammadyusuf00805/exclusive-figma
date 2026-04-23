import React from "react";
import "./Productmax.css";
import { IoHeartOutline, IoEyeOutline, IoStar } from "react-icons/io5";
import { baseUrl } from "../services";
import { useNavigate } from "react-router-dom";

function Productmax({ item }) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate("/productdetail");
  };

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <span className="discount-badge">-40%</span>

        <div className="card-actions">
          <button className="action-btn">
            <IoHeartOutline />
          </button>
          <button className="action-btn" onClick={goToDetail}>
            <IoEyeOutline />
          </button>
        </div>

        <img
          onClick={goToDetail}
          style={{ cursor: "pointer" }}
          className="product-img"
          src={`${baseUrl}${item?.pictures[0]}`}
          alt={item?.title}
        />

        <button className="add-to-cart" onClick={goToDetail}>
          Add To Cart
        </button>
      </div>

      <div className="product-info">
        <h3
          className="product-title"
          onClick={goToDetail}
          style={{ cursor: "pointer" }}
        >
          {item?.title?.length > 25
            ? item?.title.slice(0, 25) + "..."
            : item?.title}
        </h3>
        <div className="product-price">
          <span className="new-price">$120</span>
          <span className="old-price">$160</span>
        </div>
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <IoStar key={i} />
            ))}
          </div>
          <span>(88)</span>
        </div>
      </div>
    </div>
  );
}

export default Productmax;
