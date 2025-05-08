import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleProductClick = () => {
    navigate('/products');
    setIsProductOpen(false);
  };
  
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
  
  const products = [
    { name: 'RMP Non Premix', path: '/products#non-premix' },
    { name: 'RMP Premix (with boron oxide)', path: '/products#boron-oxide' },
    { name: 'RMP Premix (with boric acid)', path: '/products#boric-acid' },
    { name: '150 Mesh Powder', path: '/products#150-mesh' },
    { name: '0 to 6 mm Quartz Stone', path: '/products#quartz-stone' },
    { name: '30-80 mm Powder', path: '/products#30-80-powder' },
  ];
  
  return (
    <nav className={`sticky top-0 z-40 px-4 py-3 ${navbarClass}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className={`text-2xl font-bold ${isTilesPage ? 'text-white' : 'text-gray-800'}`}>
            Rajdhani Minerals
          </span>
        </Link>
        
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
          <div className="relative group">
            <button 
              className={`${linkClass} flex items-center`}
              onClick={handleProductClick}
            >
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            <div className={`dropdown transform ${isProductOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'} transition-all duration-200 origin-top-right`}>
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={product.path}
                  className="dropdown-item"
                  onClick={() => setIsProductOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
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
              onClick={handleProductClick}
            >
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            <div className={`pl-4 ${isProductOpen ? 'block' : 'hidden'}`}>
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={product.path}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md my-1"
                  onClick={toggleMenu}
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