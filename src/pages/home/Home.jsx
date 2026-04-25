import React, { useContext } from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

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
} from "react-icons/io5";

import { FaApple } from "react-icons/fa";
import Productmax from "../../components/Productmax";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../../App";

function Home() {
  const { categoryData } = useContext(DataContext);
  const { productData } = useContext(DataContext);
  return (
    <div className="home-page-wrapper">
      <div className="home-top-container">
        <aside className="sidebar">
          <ul className="category-list">
            {categoryData?.map((item) => {
              return (
                <div className="row">
                  <img src={item?.image} alt="" />
                  <li className="category-item">
                    <Link to="/womans-fashion">{item.title}</Link>
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
          <h2 className="section-title">Flash Sales</h2>
          <div className="navigation-arrows">
            <button className="arrow-btn prev-flash">
              <IoArrowBackOutline />
            </button>
            <button className="arrow-btn next-flash">
              <IoArrowForwardOutline />
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
              <Productmax item={item} />
            </SwiperSlide>
          ))}
          <div className="view">
            <button className="view-all-btn">View All Products</button>
          </div>
        </Swiper>
      </section>

      <section className="category-browse-section">
        <div className="section-subtitle">
          <div className="red-box"></div>
          <span>Categories</span>
        </div>

        <div className="section-header">
          <h2 className="section-title">Browse By Category</h2>
          <div className="navigation-arrows">
            <button className="arrow-btn prev-cat">
              <IoArrowBackOutline />
            </button>
            <button className="arrow-btn next-cat">
              <IoArrowForwardOutline />
            </button>
          </div>
        </div>

        <div className="category-section">

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={6}
            navigation={{ prevEl: ".prev-cat", nextEl: ".next-cat" }}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="category-swiper"
          >
            {categoryData?.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`/category/${item.id}`} className="category-card">
                  <div className="cat-icon">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <span>{item.title}</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="best-selling-section">
        <div className="section-subtitle">
          <div className="red-box"></div>
          <span>This Month</span>
        </div>

        <div className="section-header">
          <h2 className="section-title">Best Selling Products</h2>
          <button className="view-all-red-btn">View All</button>
        </div>

        <div className="best-selling-grid">
          {productData && productData.length > 0 ? (
            productData
              .slice(0, 4)
              .map((item) => <Productmax key={item.id} item={item} />)
          ) : (
            <div className="loading">Yuklanmoqda...</div>
          )}
        </div>
      </section>

      <div className="banner-container">
        <div className="banner-content">
          <span className="category-text">Categories</span>
          <h1 className="banner-title">
            Enhance Your
            <br />
            Music Experience
          </h1>

          <div className="timer-wrapper">
            <div className="time-circle">
              <span className="time-number">23</span>
              <span className="time-label">Hours</span>
            </div>
            <div className="time-circle">
              <span className="time-number">05</span>
              <span className="time-label">Days</span>
            </div>
            <div className="time-circle">
              <span className="time-number">59</span>
              <span className="time-label">Minutes</span>
            </div>
            <div className="time-circle">
              <span className="time-number">35</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>

          <button className="buy-button">Buy Now!</button>
        </div>

        <div className="banner-image">
          <img src="/imgs/kalonka.svg" alt="JBL Boombox" />
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
                .map((item) => <Productmax key={item.id} item={item} />)
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
