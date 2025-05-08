import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, imageUrl }) => {
  const navigate = useNavigate();
  
  const handleQuoteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/about-us#quote');
  };
  
  return (
    <div 
      id={id}
      className="card hover-scale group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <a href={`/products#${id}`} className="text-[var(--accent)] hover:text-[var(--accent-dark)] font-medium">
            Learn More
          </a>
          <button 
            onClick={handleQuoteClick}
            className="btn btn-primary text-sm py-2 px-4"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;