import React from 'react';
import { MessageSquareQuote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GetQuoteButton: React.FC = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/about-us#quote');
  };
  
  return (
    <button 
      onClick={handleClick}
      className="float-quote-btn"
      aria-label="Get a quote"
    >
      <MessageSquareQuote className="h-6 w-6" />
      <span className="hidden sm:inline">Get a Quote</span>
    </button>
  );
};

export default GetQuoteButton;