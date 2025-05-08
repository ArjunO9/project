import React, { useEffect } from 'react';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Products - Rajdhani Minerals';
    
    // Scroll to specific product if hash is present
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)] py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Products
            </h1>
            <p className="text-xl text-gray-700">
              Discover our range of high-quality ramming mass powders designed for optimal performance and longevity
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Product Information */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Product Details</h2>
          
          {products.map((product) => (
            <div 
              key={product.id} 
              id={product.id}
              className="mb-16 last:mb-0 scroll-mt-24"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                    <p className="text-gray-700 mb-6">{product.fullDescription}</p>
                    
                    <div className="mt-6">
                      <button 
                        onClick={() => window.location.href = '/about-us#quote'}
                        className="btn btn-primary"
                      >
                        Request a Quote
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 border-t border-gray-100">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2"></span>
                      High thermal stability
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2"></span>
                      Excellent erosion resistance
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2"></span>
                      Low thermal conductivity
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2"></span>
                      Superior binding properties
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2"></span>
                      Consistent particle size distribution
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2"></span>
                      Extended furnace lining life
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-[var(--primary-light)]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Ready to Order?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact us today to discuss your specific requirements and get a personalized quote for your business
            </p>
            <a href="/about-us#quote" className="btn btn-secondary">
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;