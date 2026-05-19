import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoHeartOutline, IoHeart, IoEyeOutline, IoCartOutline } from 'react-icons/io5';
import './PremiumProductCard.css';
import { baseUrl } from '../services';

function PremiumProductCard({ item, onEyeClick, isWishlist, onToggleWishlist }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="premium-product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
    >
      {/* Glass Card Background */}
      <div className="card-glass-bg" />
      
      {/* Gradient Border */}
      <div className="card-gradient-border" />
      
      {/* Image Container */}
      <div className="card-image-container">
        <motion.img
          src={`${baseUrl}${item?.pictures?.[0]}`}
          alt={item?.title}
          className="card-image"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Discount Badge */}
        {item?.discount && (
          <motion.div
            className="discount-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            -{item.discount}%
          </motion.div>
        )}
        
        {/* Action Buttons */}
        <motion.div
          className="card-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="action-btn"
            onClick={() => onToggleWishlist?.(item)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isWishlist ? <IoHeart color="#DB4444" /> : <IoHeartOutline />}
          </motion.button>
          
          <motion.button
            className="action-btn"
            onClick={() => onEyeClick?.(item)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoEyeOutline />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="card-content">
        <motion.h3
          className="card-title"
          onClick={() => navigate(`/productdetail/${item?.id}`)}
          whileHover={{ x: 5 }}
        >
          {item?.title?.length > 30 ? item.title.slice(0, 30) + '...' : item?.title}
        </motion.h3>
        
        <div className="card-price-row">
          <span className="card-price text-gradient">${item?.price}</span>
          {item?.oldPrice && (
            <span className="card-old-price">${item.oldPrice}</span>
          )}
        </div>
        
        {/* Rating */}
        <div className="card-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < (item?.rating || 4) ? 'star-filled' : 'star-empty'}>
                ★
              </span>
            ))}
          </div>
          <span className="rating-count">({item?.reviews || 88})</span>
        </div>
        
        {/* Add to Cart Button */}
        <motion.button
          className="add-to-cart-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IoCartOutline size={20} />
          Add to Cart
        </motion.button>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="card-glow" />
    </motion.div>
  );
}

export default PremiumProductCard;
