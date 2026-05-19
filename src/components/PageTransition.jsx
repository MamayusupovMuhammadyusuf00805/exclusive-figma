import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    rotateX: -10,
    y: 50,
  },
  in: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    y: 0,
  },
  out: {
    opacity: 0,
    scale: 1.05,
    rotateX: 10,
    y: -50,
  }
};

const pageTransition = {
  type: "tween",
  ease: [0.6, 0.01, 0.05, 0.95],
  duration: 0.8
};

const overlayVariants = {
  initial: {
    scaleY: 0,
    transformOrigin: "bottom"
  },
  animate: {
    scaleY: 1,
    transformOrigin: "bottom",
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95]
    }
  },
  exit: {
    scaleY: 0,
    transformOrigin: "top",
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95],
      delay: 0.3
    }
  }
};

function PageTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh'
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
