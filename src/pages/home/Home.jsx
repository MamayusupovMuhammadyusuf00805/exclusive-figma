import React, { useContext, useState, useEffect } from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Marquee from "react-fast-marquee";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  IoChevronForwardOutline,
  IoArrowForwardOutline,
  IoArrowBackOutline,
  IoHeartOutline,
  IoEyeOutline,
  IoStar,
  IoPhonePortraitOutline,
  IoDesktopOutline,
  IoCameraOutline,
  IoCloseOutline,
} from "react-icons/io5";

import { FaApple } from "react-icons/fa";
import Productmax from "../../components/Productmax";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../../App";
import { baseUrl } from "../../services/index";

function Home() {
  const navigate = useNavigate();
  const { categoryData, productData } = useContext(DataContext);
  const [showAllBestSelling, setShowAllBestSelling] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalQuantity(1);
    setSelectedColor(null);
    setSelectedSize(null);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleQuantity = (type) => {
    if (type === "dec" && modalQuantity > 1) {
      setModalQuantity((prev) => prev - 1);
    } else if (type === "inc") {
      setModalQuantity((prev) => prev + 1);
    }
  };

  const goDetailFromModal = () => {
    navigate(`/productdetail/${selectedProduct.id}`);
    closeModal();
  };

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: d < 10 ? `0${d}` : d,
          hours: h < 10 ? `0${h}` : h,
          minutes: m < 10 ? `0${m}` : m,
          seconds: s < 10 ? `0${s}` : s,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page-wrapper">
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <IoCloseOutline size={24} />
            </button>

            <div className="modal-left">
              <img
                src={`${baseUrl}${selectedProduct?.pictures?.[0]}`}
                alt={selectedProduct?.title}
                className="modal-image"
              />
              <button className="modal-show-more" onClick={goDetailFromModal}>
                Show More →
              </button>
            </div>

            <div className="modal-right">
              <h2 className="modal-title">
                {selectedProduct?.title?.length > 30
                  ? selectedProduct.title.slice(0, 30) + "..."
                  : selectedProduct?.title}
              </h2>

              <div className="modal-option-group">
                <span className="modal-label">Color:</span>
                <div className="color-options">
                  <div
                    className={`color-circle black ${selectedColor === "black" ? "active" : ""}`}
                    onClick={() => setSelectedColor("black")}
                  ></div>
                  <div
                    className={`color-circle gray ${selectedColor === "gray" ? "active" : ""}`}
                    onClick={() => setSelectedColor("gray")}
                  ></div>
                  <div
                    className={`color-circle green ${selectedColor === "green" ? "active" : ""}`}
                    onClick={() => setSelectedColor("green")}
                  ></div>
                  <div
                    className={`color-circle yellow ${selectedColor === "yellow" ? "active" : ""}`}
                    onClick={() => setSelectedColor("yellow")}
                  ></div>
                </div>
              </div>

              <div className="modal-option-group">
                <span className="modal-label">Size:</span>
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

              <div className="modal-option-group">
                <span className="modal-label">Quantity:</span>
                <div className="quantity-control">
                  <button onClick={() => handleQuantity("dec")}>-</button>
                  <span>{modalQuantity}</span>
                  <button onClick={() => handleQuantity("inc")}>+</button>
                </div>
              </div>

              <div className="modal-price">
                <span className="modal-label">Price:</span>
                <span className="price-value">
                  ${selectedProduct?.price * modalQuantity}
                </span>
              </div>

              <button className="modal-add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      )}

      <div className="home-top-container">
        <aside className="sidebar">
          <ul className="category-list">
            {categoryData?.map((item) => {
              return (
                <div className="row" key={item.id}>
                  <img src={item?.image} alt="" />
                  <li className="category-item">
                    <Link to={`/category/${item.id}`}>{item.title}</Link>
                    <IoChevronForwardOutline className="chevron-icon" />
                  </li>
                </div>
              );
            })}
          </ul>
        </aside>

        <main className="hero-section">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="hero-swiper"
          >
            <SwiperSlide>
              <div className="slide-content">
                <div className="slide-text">
                  <div className="brand-info">
                    <FaApple size={40} />
                    <span>iPhone 14 Series</span>
                  </div>
                  <h1 className="hero-title">
                    Up to 10% <br /> off Voucher
                  </h1>
                  <a href="#" className="shop-now-link">
                    Shop Now <IoArrowForwardOutline size={20} />
                  </a>
                </div>
                <div className="slide-image">
                  <img src="/imgs/iphone.svg" alt="iPhone 14" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </main>
      </div>

      <section className="flash-sales-section">
        <div className="section-subtitle">
          <div className="red-box"></div>
          <span>Today's</span>
        </div>

        <div className="section-header">
          <div className="title-timer-wrapper">
            <h2 className="section-title">Flash Sales</h2>

            <div className="countdown-container">
              <div className="timer-unit">
                <span className="unit-label">Days</span>
                <span className="unit-value">{timeLeft.days}</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-unit">
                <span className="unit-label">Hours</span>
                <span className="unit-value">{timeLeft.hours}</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-unit">
                <span className="unit-label">Minutes</span>
                <span className="unit-value">{timeLeft.minutes}</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-unit">
                <span className="unit-label">Seconds</span>
                <span className="unit-value">{timeLeft.seconds}</span>
              </div>
            </div>
          </div>

          <div className="navigation-arrows">
            <button className="arrow-btn prev-flash">
              <IoArrowBackOutline size={24} />
            </button>
            <button className="arrow-btn next-flash">
              <IoArrowForwardOutline size={24} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{ prevEl: ".prev-flash", nextEl: ".next-flash" }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="products-swiper"
        >
          {productData?.map((item) => (
            <SwiperSlide key={item.id}>
              <Productmax item={item} onEyeClick={() => openModal(item)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="category-browse-section">
        <div className="section-subtitle">
          <div className="red-box"></div>
          <span>Categories</span>
        </div>

        <div className="section-header">
          <h2 className="section-title">Browse By Category</h2>
        </div>

        <div className="category-section-marquee">
          <Marquee
            speed={150}
            gradient={false}
            pauseOnHover={true}
            direction="left"
          >
            {categoryData?.map((item) => (
              <Link
                to={`/category/${item.id}`}
                className="category-card"
                key={item.id}
                style={{ marginRight: "30px", minWidth: "170px" }}
              >
                <div className="cat-icon">
                  <img src={item.image} alt={item.title} />
                </div>
                <span>{item.title}</span>
              </Link>
            ))}
          </Marquee>
        </div>
      </section>

      <section className="best-selling-section">
        <div className="section-subtitle">
          <div className="red-box"></div>
          <span>This Month</span>
        </div>

        <div className="section-header">
          <h2 className="section-title">Best Selling Products</h2>
          <button
            className="view-all-red-btn"
            onClick={() => setShowAllBestSelling(!showAllBestSelling)}
          >
            {showAllBestSelling ? "Show Less" : "View All"}
          </button>
        </div>

        <div className="best-selling-grid">
          {productData && productData.length > 0 ? (
            productData
              .slice(0, showAllBestSelling ? productData.length : 4)
              .map((item) => (
                <Productmax
                  key={item.id}
                  item={item}
                  onEyeClick={() => openModal(item)}
                />
              ))
          ) : (
            <div className="loading">Yuklanmoqda...</div>
          )}
        </div>
      </section>

      <div className="banner-container">
        <div className="banner-content">
          <span className="category-text">Categories</span>
          <h1 className="banner-title">
            Enhance Your <br /> Music Experience
          </h1>

          <div className="timer-wrapper">
            <div className="time-circle">
              <span className="time-number">{timeLeft.days}</span>
              <span className="time-label">Days</span>
            </div>
            <div className="time-circle">
              <span className="time-number">{timeLeft.hours}</span>
              <span className="time-label">Hours</span>
            </div>
            <div className="time-circle">
              <span className="time-number">{timeLeft.minutes}</span>
              <span className="time-label">Minutes</span>
            </div>
            <div className="time-circle">
              <span className="time-number">{timeLeft.seconds}</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>
          <button className="buy-button">Buy Now!</button>
        </div>
        <div className="banner-image">
          <img src="/imgs/kalonka.svg" alt="Music" />
        </div>
      </div>

      <section className="our-products-section">
        <div className="container">
          <div className="section-header-wrapper">
            <div className="subtitle-container">
              <div className="red-box"></div>
              <span className="red-tag">Our Products</span>
            </div>
            <div className="title-row">
              <h2 className="section-title">Explore Our Products</h2>
              <div className="navigation-arrows">
                <button className="arrow-btn">←</button>
                <button className="arrow-btn">→</button>
              </div>
            </div>
          </div>

          <div className="products-grid">
            {productData && productData.length > 0 ? (
              productData
                .slice(0, 8)
                .map((item) => (
                  <Productmax
                    key={item.id}
                    item={item}
                    onEyeClick={() => openModal(item)}
                  />
                ))
            ) : (
              <p>Yuklanmoqda...</p>
            )}
          </div>

          <div className="view-all-container">
            <button className="view-all-red-btn">View All Products</button>
          </div>
        </div>
      </section>

      <div className="new-arrival-container">
        <div className="section-title">
          <div className="red-label">Featured</div>
          <h2>New Arrival</h2>
        </div>

        <div className="arrival-grid">
          <div className="grid-item ps5">
            <img src="/imgs/ps.svg" alt="PS5" />
            <div className="item-info">
              <h3>PlayStation 5</h3>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <a href="#">Shop Now</a>
            </div>
          </div>

          <div className="grid-item women">
            <img src="/imgs/girl.svg" alt="Women's Collection" />
            <div className="item-info">
              <h3>Women's Collections</h3>
              <p>Featured woman collections that give you another vibe.</p>
              <a href="#">Shop Now</a>
            </div>
          </div>

          <div className="grid-item speakers">
            <img src="/imgs/kl.svg" alt="Speakers" />
            <div className="item-info">
              <h3>Speakers</h3>
              <p>Amazon wireless speakers</p>
              <a href="#">Shop Now</a>
            </div>
          </div>

          <div className="grid-item perfume">
            <img src="/imgs/duxi.svg" alt="Perfume" />
            <div className="item-info">
              <h3>Perfume</h3>
              <p>GUCCI INTENSE OUD EDP</p>
              <a href="#">Shop Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="features-container">
        <div className="feature-item">
          <div className="icon-circle-outer">
            <div className="icon-circle-inner">
              <img src="/imgs/icon-delivery.svg" alt="Delivery" />
            </div>
          </div>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>

        <div className="feature-item">
          <div className="icon-circle-outer">
            <div className="icon-circle-inner">
              <img
                src="/imgs/Icon-Customer service.svg"
                alt="Customer Service"
              />
            </div>
          </div>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div className="feature-item">
          <div className="icon-circle-outer">
            <div className="icon-circle-inner">
              <img src="/imgs/Icon-secure.svg" alt="Secure" />
            </div>
          </div>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>

        <div className="scroll-top">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
