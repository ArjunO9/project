import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const location = useLocation();
  const isTilesPage = location.pathname === '/tiles-adhesive';
  
  const footerClass = isTilesPage 
    ? 'bg-blue-800 text-white'
    : 'bg-gray-900 text-white';
  
  return (
    <footer className={`${footerClass} pt-12 pb-6`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Rajdhani Minerals</h3>
            <p className="mb-4 text-gray-300">
              Leading manufacturer of high-quality ramming mass powders for industrial applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="text-gray-300 hover:text-white transition-colors">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/market-expansion" className="text-gray-300 hover:text-white transition-colors">
                  Market Expansion
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/tiles-adhesive" className="text-gray-300 hover:text-white transition-colors">
                  Tiles Adhesive
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products#non-premix" className="text-gray-300 hover:text-white transition-colors">
                  RMP Non Premix
                </Link>
              </li>
              <li>
                <Link to="/products#boron-oxide" className="text-gray-300 hover:text-white transition-colors">
                  RMP Premix (with boron oxide)
                </Link>
              </li>
              <li>
                <Link to="/products#boric-acid" className="text-gray-300 hover:text-white transition-colors">
                  RMP Premix (with boric acid)
                </Link>
              </li>
              <li>
                <Link to="/products#150-mesh" className="text-gray-300 hover:text-white transition-colors">
                  150 Mesh Powder
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gray-300" />
                <span className="text-gray-300">
                  Industrial Area, Rajasthan, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-gray-300" />
                <span className="text-gray-300">+91 12345 67890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-gray-300" />
                <a href="mailto:rajdhaniminerals@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  rajdhaniminerals@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rajdhani Minerals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;