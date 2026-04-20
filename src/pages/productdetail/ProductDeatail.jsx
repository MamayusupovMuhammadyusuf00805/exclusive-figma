import React, { useState, useContext } from "react";
import "./ProductDeatail.css";
// Iconlar
import {
  IoStar,
  IoHeartOutline,
  IoArrowBackOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { RiRefreshLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Productmax from "../../components/Productmax";
import { DataContext } from "../../App";

function ProductDetail() {
  const { productData } = useContext(DataContext);
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("blue");

  const mainImages = [
    "/imgs/image 57.svg",
    "/imgs/Frame 896.svg",
    "/imgs/Frame 897.svg",
    "/imgs/Frame 919.svg",
  ];

  return (
    <div className="product-page-container">
      <div className="breadcrumb">
        <span>Account</span> / <span>Gaming</span> /{" "}
        <span className="active-breadcrumb">Havic HV G-92 Gamepad</span>
      </div>

      <div className="product-main-content">
        <div className="image-gallery">
          <div className="thumbnail-list">
            {mainImages.map((img, index) => (
              <div key={index} className="thumb-item">
                <img src={img} alt={`thumb-${index}`} />
              </div>
            ))}
          </div>
          <div className="main-image">
            <img src="/imgs/image 63.svg" alt="Main Gamepad" />
          </div>
        </div>

        <div className="product-details-info">
          <h1 className="product-title1">Havic HV G-92 Gamepad</h1>

          <div className="rating-row">
            <div className="stars">
              <IoStar color="#FFAD33" />
              <IoStar color="#FFAD33" />
              <IoStar color="#FFAD33" />
              <IoStar color="#FFAD33" />
              <IoStar color="#CCCCCC" />
            </div>
            <span className="review-count">(150 Reviews)</span>
            <span className="divider">|</span>
            <span className="stock-status">In Stock</span>
          </div>

          <div className="product-price">$192.00</div>

          <p className="product-description">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>

          <hr className="detail-hr" />

          <div className="option-section">
            <span className="option-label">Colours:</span>
            <div className="color-options">
              <div
                className={`color-circle blue ${selectedColor === "blue" ? "selected" : ""}`}
                onClick={() => setSelectedColor("blue")}
              ></div>
              <div
                className={`color-circle red ${selectedColor === "red" ? "selected" : ""}`}
                onClick={() => setSelectedColor("red")}
              ></div>
            </div>
          </div>

          <div className="option-section">
            <span className="option-label">Size:</span>
            <div className="size-options">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? "active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="action-row">
            <div className="quantity-selector">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                -
              </button>
              <div className="qty-value">{quantity}</div>
              <button
                className="plus-btn"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button className="buy-now-btn">Buy Now</button>
            <button className="wishlist-btn">
              <IoHeartOutline size={24} />
            </button>
          </div>

          <div className="delivery-card">
            <div className="delivery-item">
              <TbTruckDelivery size={32} />
              <div className="delivery-text">
                <h3>Free Delivery</h3>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <hr />
            <div className="delivery-item">
              <RiRefreshLine size={32} />
              <div className="delivery-text">
                <h3>Return Delivery</h3>
                <p>
                  Free 30 Days Delivery Returns. <span>Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="related-items-section">
        <div className="section-subtitle">
          <div className="red-box"></div>
          <span className="related-label">Related Item</span>
        </div>

        <div className="related-products-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {productData?.slice(0, 4).map((item) => (
              <SwiperSlide key={item.id}>
                <Productmax item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
