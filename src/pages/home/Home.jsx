import React from "react";
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
  IoWatchOutline,
  IoCameraOutline,
  IoHeadsetOutline,
  IoGameControllerOutline,
} from "react-icons/io5";

import { FaApple } from "react-icons/fa";


function Home() {
  const categories = [
    { name: "Woman's Fashion", hasSub: true },
    { name: "Men's Fashion", hasSub: true },
    { name: "Electronics", hasSub: false },
    { name: "Home & Lifestyle", hasSub: false },
    { name: "Medicine", hasSub: false },
    { name: "Sports & Outdoor", hasSub: false },
    { name: "Baby's & Toys", hasSub: false },
    { name: "Groceries & Pets", hasSub: false },
    { name: "Health & Beauty", hasSub: false },
  ];

  const flashProducts = [
    {
      id: 1,
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      rating: 88,
      img: "/imgs/Frame 611.svg",
    },
    {
      id: 2,
      title: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      rating: 75,
      img: "/imgs/Frame 611.svg",
    },
    {
      id: 3,
      title: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: "-30%",
      rating: 99,
      img: "/imgs/Frame 611.svg",
    },
    {
      id: 4,
      title: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: "-25%",
      rating: 99,
      img: "/imgs/Frame 611.svg",
    },
    {
      id: 5,
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      rating: 88,
      img: "/imgs/Frame 611.svg",
    },
  ];

  const categoryList = [
    { name: "Phones", icon: <IoPhonePortraitOutline /> },
    { name: "Computers", icon: <IoDesktopOutline /> },
    { name: "SmartWatch", icon: <IoWatchOutline /> },
    { name: "Camera", icon: <IoCameraOutline />, active: true },
    { name: "HeadPhones", icon: <IoHeadsetOutline /> },
    { name: "Gaming", icon: <IoGameControllerOutline /> },
    { name: "Music", icon: <IoHeadsetOutline /> },
  ];
  const productList = [
    {
      name: "Breed Dry Dog Food",
      price: 100,
      stars: "★★★☆☆",
      reviews: 35,
      img: "/imgs/71RdoeXxtrL 1.svg",
      isNew: false,
    },
    {
      name: "CANON EOS DSLR Camera",
      price: 360,
      stars: "★★★★☆",
      reviews: 95,
      img: "/imgs/71RdoeXxtrL 1.svg",
      isNew: false,
    },
    {
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      stars: "★★★★★",
      reviews: 325,
      img: "/imgs/71RdoeXxtrL 1.svg",
      isNew: false,
    },
    {
      name: "Curology Product Set",
      price: 500,
      stars: "★★★★☆",
      reviews: 145,
      img: "/imgs/71RdoeXxtrL 1.svg",
      isNew: false,
    },
    {
      name: "Kids Electric Car",
      price: 960,
      stars: "★★★★★",
      reviews: 65,
      img: "/imgs/71RdoeXxtrL 1.svg",
      isNew: true,
    },
    {
      name: "Jr. Zoom Soccer Cleats",
      price: 1160,
      stars: "★★★★☆",
      reviews: 35,
      img: "/imgs/71RdoeXxtrL 1.svg",
      isNew: false,
    },
    {
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      stars: "★★★★☆",
      reviews: 55,
      img: "/imgs/71RdoeXxtrL 1.svg",
      isNew: true,
    },
    {
      name: "Quilted Satin Jacket",
      price: 660,
      stars: "★★★★☆",
      reviews: 55,
      img: "/imgs/71RdoeXxtrL 1.svg",
      isNew: false,
    },
  ];

  return (
    <div className="home-page-wrapper">
      <div className="home-top-container">
        <aside className="sidebar">
          <ul className="category-list">
            {categories.map((cat, index) => (
              <li key={index} className="category-item">
                <a href="#">{cat.name}</a>
                {cat.hasSub && (
                  <IoChevronForwardOutline className="chevron-icon" />
                )}
              </li>
            ))}
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
            {[1, 2, 3].map((item) => (
              <SwiperSlide key={item}>
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
            ))}
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
          <div className="timer">
            <div className="timer-item">
              <span className="timer-label">Days</span>
              <span className="timer-value">03</span>
            </div>
            <span className="timer-colon">:</span>
            <div className="timer-item">
              <span className="timer-label">Hours</span>
              <span className="timer-value">23</span>
            </div>
            <span className="timer-colon">:</span>
            <div className="timer-item">
              <span className="timer-label">Minutes</span>
              <span className="timer-value">19</span>
            </div>
            <span className="timer-colon">:</span>
            <div className="timer-item">
              <span className="timer-label">Seconds</span>
              <span className="timer-value">56</span>
            </div>
          </div>
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
          {flashProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card">
                <div className="product-img-wrapper">
                  <span className="discount-badge">{product.discount}</span>
                  <div className="card-actions">
                    <button className="action-btn">
                      <IoHeartOutline />
                    </button>
                    <button className="action-btn">
                      <IoEyeOutline />
                    </button>
                  </div>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="product-img"
                  />
                  <button className="add-to-cart">Add To Cart</button>
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <div className="product-price">
                    <span className="new-price">${product.price}</span>
                    <span className="old-price">${product.oldPrice}</span>
                  </div>
                  <div className="product-rating">
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <IoStar key={i} />
                      ))}
                    </div>
                    <span>({product.rating})</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="view-all-btn">View All Products</button>
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
          {categoryList.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className={`category-card ${cat.active ? "active" : ""}`}>
                <div className="cat-icon-react">{cat.icon}</div>
                <span>{cat.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="best-selling-section">
        <div className="section-subtitle">
          <div className="red-box"></div>
          <span>This Month</span>
        </div>

        <div className="section-header-flex">
          <h2 className="section-title">Best Selling Products</h2>
          <button className="view-all-red-btn">View All</button>
        </div>

        <div className="best-selling-grid">
          <div className="product-card">
            <div className="product-img-wrapper">
              <div className="card-actions">
                <button className="action-btn">
                  <IoHeartOutline />
                </button>
                <button className="action-btn">
                  <IoEyeOutline />
                </button>
              </div>
              <img src="/imgs/coat.png" alt="Coat" className="product-img" />
            </div>
            <div className="product-info">
              <h3 className="product-title">The north coat</h3>
              <div className="product-price">
                <span className="new-price">$260</span>
                <span className="old-price">$360</span>
              </div>
              <div className="product-rating">
                <div className="stars">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <span className="rating-count">(65)</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img-wrapper">
              <div className="card-actions">
                <button className="action-btn">
                  <IoHeartOutline />
                </button>
                <button className="action-btn">
                  <IoEyeOutline />
                </button>
              </div>
              <img src="/imgs/bag.png" alt="Bag" className="product-img" />
            </div>
            <div className="product-info">
              <h3 className="product-title">Gucci duffle bag</h3>
              <div className="product-price">
                <span className="new-price">$960</span>
                <span className="old-price">$1160</span>
              </div>
              <div className="product-rating">
                <div className="stars">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <span className="rating-count">(65)</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img-wrapper">
              <div className="card-actions">
                <button className="action-btn">
                  <IoHeartOutline />
                </button>
                <button className="action-btn">
                  <IoEyeOutline />
                </button>
              </div>
              <img
                src="/imgs/cooler.png"
                alt="Cooler"
                className="product-img"
              />
            </div>
            <div className="product-info">
              <h3 className="product-title">RGB liquid CPU Cooler</h3>
              <div className="product-price">
                <span className="new-price">$160</span>
                <span className="old-price">$170</span>
              </div>
              <div className="product-rating">
                <div className="stars">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <span className="rating-count">(65)</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img-wrapper">
              <div className="card-actions">
                <button className="action-btn">
                  <IoHeartOutline />
                </button>
                <button className="action-btn">
                  <IoEyeOutline />
                </button>
              </div>
              <img src="/imgs/shelf.png" alt="Shelf" className="product-img" />
            </div>
            <div className="product-info">
              <h3 className="product-title">Small BookSelf</h3>
              <div className="product-price">
                <span className="new-price">$360</span>
              </div>
              <div className="product-rating">
                <div className="stars">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <span className="rating-count">(65)</span>
              </div>
            </div>
          </div>
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

      <div className="container">
        <div className="header">
          <div className="red-tag">Our Products</div>
          <div className="title-row">
            <h2>Explore Our Products</h2>
            <div className="arrows">
              <span>←</span> <span>→</span>
            </div>
          </div>
        </div>

        <div className="grid">
          {productList.map((item, index) => (
            <div key={index} className="card">
              <div className="img-holder">
                {item.isNew && <span className="new-badge">NEW</span>}
                <img src={item.img} alt={item.name} />

                <div className="side-icons">
                  <div className="icon">♡</div>
                  <div className="icon">👁</div>
                </div>

                <button className="add-btn">Add To Cart</button>
              </div>

              <div className="info">
                <h3>{item.name}</h3>
                <div className="price-row">
                  <span className="price">${item.price}</span>
                  <span className="stars">{item.stars}</span>
                  <span className="rev">({item.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="view-all">View All Products</button>
      </div>

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
            <img
              src="/imgs/girl.svg"
              alt="Women's Collection"
            />
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
            <img src="/imgs/icon-delivery.svg" alt="" />
          </div>
        </div>
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>

      <div className="feature-item">
        <div className="icon-circle-outer">
          <div className="icon-circle-inner">
            <img src="/imgs/Icon-Customer service.svg" alt="" />
          </div>
        </div>
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>

      <div className="feature-item">
        <div className="icon-circle-outer">
          <div className="icon-circle-inner">
            <img src="/imgs/Icon-secure.svg" alt="" />
          </div>
        </div>
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>

      <div className="scroll-top">
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          ↑
        </button>
      </div>
    </div>
    </div>
  );
}

export default Home;
