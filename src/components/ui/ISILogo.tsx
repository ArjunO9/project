import React from 'react';
import { motion } from 'framer-motion';

const ISILogo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="isi-logo"
    >
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center">
          <span className="font-bold text-[var(--secondary)]">ISI</span>
        </div>
        <span className="text-sm font-semibold text-[var(--secondary)]">Certified</span>
      </div>
    </motion.div>
  );
};

export default ISILogo;