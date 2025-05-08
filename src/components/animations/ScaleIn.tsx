import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const ScaleIn: React.FC<ScaleInProps> = ({ 
  children, 
  delay = 0,
  className = '' 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        scale: 0.8
      }}
      animate={{
        opacity: inView ? 1 : 0,
        scale: inView ? 1 : 0.8
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;