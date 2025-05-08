import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  const initialOffset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...initialOffset
      }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : initialOffset.x,
        y: inView ? 0 : initialOffset.y
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;