import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { products as productList } from '../../data/products';
import ISO from '../../assets/pics/ISO.png';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  
  // For tiles adhesive page, use a different style
  const isTilesPage = location.pathname === '/tiles-adhesive';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navbarClass = isTilesPage 
    ? `${scrolled ? 'bg-blue-600 shadow-md' : 'bg-transparent'} transition-all duration-300`
    : `${scrolled ? 'bg-white shadow-md' : 'bg-white'} transition-all duration-300`;
  
  const linkClass = isTilesPage 
    ? 'navbar-link text-white hover:bg-blue-500'
    : 'navbar-link text-gray-700 hover:bg-[var(--primary-light)]';
  
  const activeLinkClass = isTilesPage
    ? 'navbar-link-active bg-blue-500 text-white'
    : 'navbar-link-active';
  
  const products = productList.map(product => ({
    name: product.name,
    path: `/products#${product.id}`
  }));
  
  return (
    <nav className={`sticky top-0 z-40 px-4 py-3 ${navbarClass}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Combined Logo Container */}
        <div className="flex items-center gap-4"> {/* Increased gap */}
          <Link to="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${isTilesPage ? 'text-white' : 'text-gray-800'}`}>
              Rajdhani Minerals
            </span>
          </Link>
          
          {/* ISO Logo - Properly sized */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-20 w-20px" // Medium size (64px)
          >
            <img 
              src={ISO} 
              alt="ISO 9001:2015 Certified"
              className="h-full w-full object-contain"
            />
          </motion.div>
        </div>
         {/* Desktop Menu */}           
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              isActive ? `${linkClass} ${activeLinkClass}` : linkClass
            }
            end
          >
            Home
          </NavLink>
          
          {/* Products Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsProductOpen(true)}
            onMouseLeave={() => setIsProductOpen(false)}
          >
            <button 
              className={`${linkClass} flex items-center`}
              onClick={() => navigate('/products')}
            >
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            <div className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isProductOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="py-1">
                {products.map((product, index) => (
                  <Link
                    key={index}
                    to={product.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsProductOpen(false);
                    }}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <NavLink 
            to="/infrastructure" 
            className={({isActive}) => 
              isActive ? `${linkClass} ${activeLinkClass}` : linkClass
            }
          >
            Infrastructure
          </NavLink>
          
          <NavLink 
            to="/market-expansion" 
            className={({isActive}) => 
              isActive ? `${linkClass} ${activeLinkClass}` : linkClass
            }
          >
            Market Expansion
          </NavLink>
          
          <NavLink 
            to="/about-us" 
            className={({isActive}) => 
              isActive ? `${linkClass} ${activeLinkClass}` : linkClass
            }
          >
            About Us
          </NavLink>
          
          <NavLink 
            to="/tiles-adhesive" 
            className={({isActive}) => 
              isActive ? `${linkClass} ${activeLinkClass}` : linkClass
            }
          >
            Tiles Adhesive
          </NavLink>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className={isTilesPage ? 'text-white' : 'text-gray-800'} /> : <Menu className={isTilesPage ? 'text-white' : 'text-gray-800'} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-2`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              isActive 
                ? `block ${linkClass} ${activeLinkClass}` 
                : `block ${linkClass}`
            }
            onClick={toggleMenu}
            end
          >
            Home
          </NavLink>
          
          {/* Products Dropdown Mobile */}
          <div>
            <button 
              className={`block w-full text-left ${linkClass} flex items-center justify-between`}
              onClick={() => setIsProductOpen(!isProductOpen)}
            >
              Products <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProductOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`pl-4 ${isProductOpen ? 'block' : 'hidden'}`}>
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={product.path}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md my-1"
                  onClick={() => {
                    toggleMenu();
                    setIsProductOpen(false);
                  }}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
          
          <NavLink 
            to="/infrastructure" 
            className={({isActive}) => 
              isActive 
                ? `block ${linkClass} ${activeLinkClass}` 
                : `block ${linkClass}`
            }
            onClick={toggleMenu}
          >
            Infrastructure
          </NavLink>
          
          <NavLink 
            to="/market-expansion" 
            className={({isActive}) => 
              isActive 
                ? `block ${linkClass} ${activeLinkClass}` 
                : `block ${linkClass}`
            }
            onClick={toggleMenu}
          >
            Market Expansion
          </NavLink>
          
          <NavLink 
            to="/about-us" 
            className={({isActive}) => 
              isActive 
                ? `block ${linkClass} ${activeLinkClass}` 
                : `block ${linkClass}`
            }
            onClick={toggleMenu}
          >
            About Us
          </NavLink>
          
          <NavLink 
            to="/tiles-adhesive" 
            className={({isActive}) => 
              isActive 
                ? `block ${linkClass} ${activeLinkClass}` 
                : `block ${linkClass}`
            }
            onClick={toggleMenu}
          >
            Tiles Adhesive
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;