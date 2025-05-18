import React from 'react';
import { motion } from 'framer-motion';
import ISO from '../../assets/pics/RM_logo.png';

const ISILogo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="isi-logo overflow-hidden h-40 w-40 border-2 border-gray-200 shadow-md rounded-lg"
    >
      <img 
        src={ISO} 
        alt="ISO 9001:2015 Certified"
        className="h-full w-full object-contain p-1"
      />
    </motion.div>
  );
};

export default ISILogo;