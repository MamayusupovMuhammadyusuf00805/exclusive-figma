import React, { useContext } from "react";
import "./Washlish.css";
import { DataContext } from "../../App";
import Productmax from "../../components/Productmax";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Washlist() {
  const { productData } = useContext(DataContext);

  const wishlistCount = 4;

  return (
    <div className="wishlist-container">
      <header className="wishlist-header">
        <h2>Wishlist ({wishlistCount})</h2>
        <button className="move-all-btn">Move All To Bag</button>
      </header>

      <div className="wishlist-grid">
        {productData?.slice(0, 4).map((item) => (
          <div key={item.id} className="wishlist-item-wrapper">
            <Productmax item={item} isWishlist={true} />
          </div>
        ))}
      </div>

      <section className="just-for-you-section">
        <div className="section-header-row">
          <div className="section-subtitle">
            <div className="red-box"></div>
            <span>Just For You</span>
          </div>
          <button className="see-all-btn">See All</button>
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
            {productData?.slice(4, 8).map((item) => (
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

export default Washlist;
