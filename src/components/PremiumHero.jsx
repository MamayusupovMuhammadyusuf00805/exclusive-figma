import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Scene3D from './3D/Scene3D';
import './PremiumHero.css';

function PremiumHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="premium-hero">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Gradient Overlay */}
      <div className="hero-gradient-overlay" />
      
      {/* Content */}
      <div className="hero-content" ref={heroRef}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="hero-text-container"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            PREMIUM COLLECTION 2026
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="hero-title text-cinematic text-gradient"
          >
            Experience
            <br />
            <span className="text-glow">The Future</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-description"
          >
            Погрузитесь в мир ультрасовременного шопинга с 3D-технологиями
            <br />
            и кинематографичными переходами
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-cta"
          >
            <button className="btn-premium hover-lift">
              Explore Collection
              <span className="btn-arrow">→</span>
            </button>
            
            <button className="btn-glass">
              Watch Video
              <span className="play-icon">▶</span>
            </button>
          </motion.div>
        </motion.div>
        
        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hero-stats"
        >
          <div className="stat-card glass-card">
            <div className="stat-number text-gradient">10K+</div>
            <div className="stat-label">Premium Products</div>
          </div>
          
          <div className="stat-card glass-card">
            <div className="stat-number text-gradient">50K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          
          <div className="stat-card glass-card">
            <div className="stat-number text-gradient">99%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="scroll-indicator"
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </div>
  );
}

export default PremiumHero;
