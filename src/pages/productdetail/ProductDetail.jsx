    import React, { useState, useContext } from "react";
    import { useParams } from "react-router-dom";
    import "./ProductDetail.css";
    import { IoStar, IoHeartOutline } from "react-icons/io5";
    import { TbTruckDelivery } from "react-icons/tb";
    import { RiRefreshLine } from "react-icons/ri";
    import { Swiper, SwiperSlide } from "swiper/react";
    import { Navigation } from "swiper/modules";
    import "swiper/css";
    import "swiper/css/navigation";
    import Productmax from "../../components/Productmax";
    import { DataContext } from "../../App";
    import { baseUrl } from "../../services";

    function ProductDetail() {
    window.scrollTo({
        top: 200,
        behavior: "smooth",
    });
    const { id } = useParams();
    const { productData } = useContext(DataContext);

    const product = productData?.find((item) => item.id.toString() === id);

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("blue");
    const [selectedImgIndex, setSelectedImgIndex] = useState(0);

    if (!product) {
        return (
        <div style={{ textAlign: "center", padding: "100px", fontSize: "20px" }}>
            Mahsulot yuklanmoqda yoki topilmadi...
        </div>
        );
    }

    return (
        <div className="product-page-container">
        <div className="breadcrumb">
            <span>Account</span> / <span>Gaming</span> /{" "}
            <span className="active-breadcrumb">{product.title}</span>
        </div>

        <div className="product-main-content">
            <div className="image-gallery">
            <div className="thumbnail-list">
                {product.pictures?.map((img, index) => (
                <div
                    key={index}
                    className={`thumb-item ${selectedImgIndex === index ? "active" : ""}`}
                    onClick={() => setSelectedImgIndex(index)}
                    style={{
                    cursor: "pointer",
                    border:
                        selectedImgIndex === index
                        ? "2px solid #DB4444"
                        : "1px solid #ddd",
                    }}
                >
                    <img src={`${baseUrl}${img}`} alt={`thumb-${index}`} />
                </div>
                ))}
            </div>
            <div className="main-image">
                {product.pictures && (
                <img
                    src={`${baseUrl}${product.pictures[selectedImgIndex]}`}
                    alt={product.title}
                />
                )}
            </div>
            </div>

            <div className="product-details-info">
            <h1 className="product-title1">{product.title}</h1>

            <div className="rating-row">
                <div className="stars">
                {[...Array(4)].map((_, i) => (
                    <IoStar key={i} color="#FFAD33" />
                ))}
                <IoStar color="#CCCCCC" />
                </div>
                <span className="review-count">(150 Reviews)</span>
                <span className="divider">|</span>
                <span className="stock-status" style={{ color: "#00FF66" }}>
                In Stock
                </span>
            </div>

            <div className="product-price">${product.price}</div>

            <p className="product-description">
                {product.description ||
                "PlayStation 5 Controller Skin High quality vinyl..."}
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
                navigation
                breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
                }}
            >
                {productData
                ?.filter((item) => item.id.toString() !== id)
                .slice(0, 4)
                .map((item) => (
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
