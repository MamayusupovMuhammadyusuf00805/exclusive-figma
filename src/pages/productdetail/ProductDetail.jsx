import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";
import { IoStar, IoStarOutline, IoHeartOutline, IoHeart } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { RiRefreshLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Productmax from "../../components/Productmax";
import { DataContext } from "../../App";
import { baseUrl } from "../../services";

const SIZES   = ["XS", "S", "M", "L", "XL"];
const COLORS  = [
  { name: "blue",  label: "Sky Blue" },
  { name: "red",   label: "Coral Red" },
  { name: "black", label: "Midnight" },
];
const RATING  = 4; // out of 5

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productData, wishlist, addToWishlist, removeFromWishlist } = useContext(DataContext);

  const product = productData?.find((item) => item.id.toString() === id);

  const [quantity,         setQuantity]         = useState(1);
  const [selectedSize,     setSelectedSize]     = useState("M");
  const [selectedColor,    setSelectedColor]    = useState("blue");
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  /* ✅ FIX: scroll inside useEffect, not during render */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  /* Reset image index when product changes */
  useEffect(() => {
    setSelectedImgIndex(0);
    setQuantity(1);
  }, [id]);

  const isWishlisted = wishlist?.some((w) => w.id.toString() === id);

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist?.(product);
    } else {
      addToWishlist?.(product);
    }
  };

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQty = () => setQuantity((q) => q + 1);

  /* Loading / not found state */
  if (!productData) {
    return (
      <div className="product-not-found">
        <p>Mahsulotlar yuklanmoqda...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <p>Mahsulot topilmadi.</p>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: 8,
            padding: "10px 24px",
            background: "#DB4444",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 14,
            fontFamily: "inherit",
          }}
        >
          Bosh sahifaga qaytish
        </button>
      </div>
    );
  }

  const pictures = product.pictures || [];
  const currentImg = pictures[selectedImgIndex];

  return (
    <div className="product-page-container">

      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb" aria-label="Breadcrumb">
        <span onClick={() => navigate("/")}>Home</span>
        <span className="breadcrumb-sep">/</span>
        <span onClick={() => navigate(-1)}>Shop</span>
        <span className="breadcrumb-sep">/</span>
        <span className="active-breadcrumb" title={product.title}>
          {product.title?.length > 40 ? product.title.slice(0, 40) + "…" : product.title}
        </span>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="product-main-content">

        {/* ── IMAGE GALLERY ── */}
        <div className="image-gallery">
          {/* Thumbnails */}
          {pictures.length > 1 && (
            <div className="thumbnail-list" role="list" aria-label="Product images">
              {pictures.map((img, index) => (
                <div
                  key={index}
                  className={`thumb-item ${selectedImgIndex === index ? "active" : ""}`}
                  onClick={() => setSelectedImgIndex(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View image ${index + 1}`}
                  aria-pressed={selectedImgIndex === index}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedImgIndex(index)}
                >
                  <img
                    src={`${baseUrl}${img}`}
                    alt={`${product.title} — view ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Main image */}
          <div className="main-image" aria-live="polite">
            {currentImg ? (
              <img
                key={currentImg} /* key forces re-render for fade effect */
                src={`${baseUrl}${currentImg}`}
                alt={product.title}
              />
            ) : (
              <img
                src="https://via.placeholder.com/500x500?text=No+Image"
                alt="No image available"
              />
            )}
          </div>
        </div>

        {/* ── PRODUCT INFO ── */}
        <div className="product-details-info">

          {/* Title */}
          <h1 className="product-title1">{product.title}</h1>

          {/* Rating */}
          <div className="rating-row" aria-label={`Rated ${RATING} out of 5`}>
            <div className="stars" aria-hidden="true">
              {[...Array(5)].map((_, i) =>
                i < RATING
                  ? <IoStar key={i} color="#FFAD33" size={16} />
                  : <IoStarOutline key={i} color="#CCCCCC" size={16} />
              )}
            </div>
            <span className="review-count">(150 Reviews)</span>
            <span className="divider" aria-hidden="true">|</span>
            <span className="stock-status" aria-label="In Stock">In Stock</span>
          </div>

          {/* Price */}
          <div className="product-price" aria-label={`Price: $${product.price}`}>
            ${product.price}
          </div>

          {/* Description */}
          <p className="product-description">
            {product.description ||
              "High quality product made with premium materials. Designed for comfort and durability, perfect for everyday use."}
          </p>

          <hr className="detail-hr" />

          {/* Color picker */}
          <div className="option-section">
            <span className="option-label">Colours:</span>
            <div className="color-options" role="group" aria-label="Select colour">
              {COLORS.map(({ name, label }) => (
                <div
                  key={name}
                  className={`color-circle ${name} ${selectedColor === name ? "selected" : ""}`}
                  onClick={() => setSelectedColor(name)}
                  role="radio"
                  aria-checked={selectedColor === name}
                  aria-label={label}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedColor(name)}
                  title={label}
                />
              ))}
            </div>
          </div>

          {/* Size picker */}
          <div className="option-section">
            <span className="option-label">Size:</span>
            <div className="size-options" role="group" aria-label="Select size">
              {SIZES.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? "active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={selectedSize === size}
                  aria-label={`Size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action row */}
          <div className="action-row">
            {/* Quantity selector */}
            <div className="quantity-selector" role="group" aria-label="Quantity">
              <button
                onClick={decreaseQty}
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
                style={{ opacity: quantity <= 1 ? 0.4 : 1 }}
              >
                −
              </button>
              <div className="qty-value" aria-live="polite" aria-label={`Quantity: ${quantity}`}>
                {quantity}
              </div>
              <button className="plus-btn" onClick={increaseQty} aria-label="Increase quantity">
                +
              </button>
            </div>

            {/* Buy now */}
            <button className="buy-now-btn" aria-label={`Buy ${product.title} now`}>
              Buy Now
            </button>

            {/* Wishlist */}
            <button
              className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
              onClick={handleWishlist}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              aria-pressed={isWishlisted}
            >
              {isWishlisted
                ? <IoHeart size={22} />
                : <IoHeartOutline size={22} />
              }
            </button>
          </div>

          {/* Delivery card */}
          <div className="delivery-card">
            <div className="delivery-item">
              <TbTruckDelivery size={30} className="delivery-icon" aria-hidden="true" />
              <div className="delivery-text">
                <h3>Free Delivery</h3>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <hr />
            <div className="delivery-item">
              <RiRefreshLine size={30} className="delivery-icon" aria-hidden="true" />
              <div className="delivery-text">
                <h3>Return Delivery</h3>
                <p>
                  Free 30 Days Delivery Returns.{" "}
                  <span role="button" tabIndex={0}>Details</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ===== RELATED ITEMS ===== */}
      {productData?.filter((item) => item.id.toString() !== id).length > 0 && (
        <section className="related-items-section" aria-label="Related products">
          <div className="section-subtitle">
            <div className="red-box" aria-hidden="true" />
            <span className="related-label">Related Items</span>
          </div>

          <div className="related-products-wrapper">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              navigation
              breakpoints={{
                0:    { slidesPerView: 1, spaceBetween: 12 },
                480:  { slidesPerView: 2, spaceBetween: 14 },
                768:  { slidesPerView: 3, spaceBetween: 16 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
              }}
            >
              {productData
                .filter((item) => item.id.toString() !== id)
                .slice(0, 12) /* show more related items */
                .map((item) => (
                  <SwiperSlide key={item.id}>
                    <Productmax item={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </section>
      )}

    </div>
  );
}

export default ProductDetail;