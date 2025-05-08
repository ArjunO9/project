import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import GetQuoteButton from './GetQuoteButton';
import ScrollToTop from './ScrollToTop';
import ISILogo from '../ui/ISILogo';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const Layout: React.FC = () => {
  const location = useLocation();
  useScrollToTop();
  
  // Don't show the get quote button on the tiles adhesive page
  const showQuoteButton = location.pathname !== '/tiles-adhesive';
  
  return (
    <div className="flex flex-col min-h-screen">
      <ISILogo />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      {showQuoteButton && <GetQuoteButton />}
      <ScrollToTop />
    </div>
  );
};

export default Layout;