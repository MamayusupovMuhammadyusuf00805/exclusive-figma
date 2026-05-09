import React, { useContext } from "react";
import "./Productmax.css";
import {
  IoHeartOutline,
  IoHeart,
  IoEyeOutline,
  IoStar,
  IoStarHalf,
  IoStarOutline,
  IoTrashOutline,
  IoCartOutline,
} from "react-icons/io5";
import { baseUrl } from "../services";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../App";

function Productmax({ item, onEyeClick, isWishlist, onAddToCart }) {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useContext(DataContext);

  const isLiked = wishlist?.some((wItem) => wItem.id === item?.id);

  // Narxlarni aniq Number (raqam) turiga o'girib olish
  const currentPrice = Number(item?.price) || 0;
  const originalPrice =
    Number(item?.originalPrice) || Math.round(currentPrice * 1.25);

  const discountPercent = item?.discount
    ? Number(item.discount)
    : originalPrice > 0
      ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
      : 0;

  // Rating stars renderer
  const renderStars = (rating = item?.rating ?? 4) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) stars.push(<IoStar key={i} />);
      else if (i === fullStars && hasHalf) stars.push(<IoStarHalf key={i} />);
      else stars.push(<IoStarOutline key={i} className="star-empty" />);
    }
    return stars;
  };

  const reviewCount = item?.reviewCount ?? 88;

  const goToDetail = () => {
    navigate(`/productdetail/${item?.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(item);
    } else {
      goToDetail();
    }
  };

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        {discountPercent > 0 && (
          <span className="discount-badge">-{discountPercent}%</span>
        )}

        <div className="card-actions">
          <button
            className="action-btn"
            onClick={() => toggleWishlist(item)}
            aria-label={
              isWishlist
                ? "Remove from wishlist"
                : isLiked
                  ? "Remove from wishlist"
                  : "Add to wishlist"
            }
          >
            {isWishlist ? (
              <IoTrashOutline size={18} />
            ) : isLiked ? (
              <IoHeart color="#DB4444" size={18} />
            ) : (
              <IoHeartOutline size={18} />
            )}
          </button>

          {!isWishlist && (
            <button
              className="action-btn"
              onClick={onEyeClick}
              aria-label="Quick view"
            >
              <IoEyeOutline size={18} />
            </button>
          )}
        </div>

        <img
          onClick={goToDetail}
          className="product-img"
          src={`${baseUrl}${item?.pictures?.[0]}`}
          alt={item?.title ?? "Product image"}
          loading="lazy"
        />

        <button className="add-to-cart" onClick={handleAddToCart}>
          <IoCartOutline size={16} className="cart-icon" />
          <span>Add To Cart</span>
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-title" onClick={goToDetail} title={item?.title}>
          {item?.title?.length > 28
            ? item.title.slice(0, 28) + "…"
            : item?.title}
        </h3>

        <div className="product-price">
          <span className="new-price">${currentPrice.toFixed(2)}</span>
          {originalPrice > currentPrice && (
            <span className="old-price">${originalPrice.toFixed(2)}</span>
          )}
        </div>

        <div className="product-rating">
          <div className="stars">{renderStars()}</div>
          <span className="review-count">({reviewCount})</span>
        </div>
      </div>
    </div>
  );
}

export default Productmax;
