import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { DataContext } from "../../App";
import Productmax from "../../components/Productmax";
import { IoCloseOutline } from "react-icons/io5";
import { baseUrl } from "../../services";
import "./Categoryfilter.css";

function Categoryfilter() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productData, categoryData } = useContext(DataContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (productData && id) {
      const filtered = productData.filter(
        (product) =>
          String(product.category) === String(id) ||
          String(product.category?.id) === String(id),
      );
      setFilteredProducts(filtered);
    }

    if (categoryData && id) {
      const currentCat = categoryData.find((c) => String(c.id) === String(id));
      if (currentCat) setCategoryName(currentCat.title);
    }
  }, [id, productData, categoryData]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalQuantity(1);
    setSelectedColor("black");
    setSelectedSize("M");
  };

  const closeModal = () => setSelectedProduct(null);

  const handleQuantity = (type) => {
    if (type === "dec" && modalQuantity > 1)
      setModalQuantity((prev) => prev - 1);
    else if (type === "inc") setModalQuantity((prev) => prev + 1);
  };

  const goDetailFromModal = () => {
    navigate(`/productdetail/${selectedProduct.id}`);
    closeModal();
  };

  return (
    <div className="category-filter-page">
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
              <h2 className="modal-title">{selectedProduct?.title}</h2>

              <div className="modal-option-group">
                <span className="modal-label">Color:</span>
                <div className="color-options">
                  {["black", "gray", "green", "yellow"].map((color) => (
                    <div
                      key={color}
                      className={`color-circle ${color} ${selectedColor === color ? "active" : ""}`}
                      onClick={() => setSelectedColor(color)}
                    ></div>
                  ))}
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

      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>{categoryName || "Category"}</span>
      </div>

      <div className="category-header">
        <div className="red-box"></div>
        <h2>{categoryName || "Products"}</h2>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="filtered-grid">
          {filteredProducts.map((item) => (
            <Productmax
              key={item.id}
              item={item}
              onEyeClick={() => openModal(item)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-category">
          <h2>Hozircha bu kategoriyada mahsulotlar yo'q 😕</h2>
          <Link to="/" className="back-home-btn">
            Bosh sahifaga qaytish
          </Link>
        </div>
      )}
    </div>
  );
}

export default Categoryfilter;
