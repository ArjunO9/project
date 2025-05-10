import React, { useEffect } from 'react';
import { ArrowRight, Award, Shield, Zap } from 'lucide-react';
import ReviewCard from '../components/ui/ReviewCard';
import ProcessStep from '../components/ui/ProcessStep';
import { reviews } from '../data/reviews';
import { processSteps } from '../data/process';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Rajdhani Minerals - Premium Ramming Mass Powders';
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)] py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Superior Ramming Mass Powders for Industrial Excellence
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Premium quality materials engineered for optimal performance in foundry operations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/products" className="btn btn-secondary">
                Explore Products
              </a>
              <a href="/about-us#quote" className="btn bg-white text-gray-800 hover:bg-gray-100">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
      
    
      
      {/* Our Mission Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                At Rajdhani Minerals, our mission is simple: to provide superior ramming mass powders that meet the highest standards of quality and performance. We understand that the success of your foundry operations depends on the reliability and effectiveness of your materials. That's why we are dedicated to delivering products that not only meet but exceed industry expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quality Assurance Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>
              <p className="text-gray-700 mb-6">
                Quality is the cornerstone of our operations. From sourcing premium raw materials to employing rigorous testing protocols, every step of our manufacturing process is designed to ensure that our ramming mass powders deliver consistent, reliable results. Our dedicated quality assurance team works tirelessly to maintain the highest standards and continuously improve our products.
              </p>
              <p className="text-gray-700">
                Thank you for considering Rajdhani Minerals as your trusted partner in ramming mass powders. We look forward to working with you and supporting the success of your foundry operations.
              </p>
              <div className="mt-6">
                <a href="/about-us" className="text-[var(--accent)] hover:text-[var(--accent-dark)] font-medium flex items-center">
                  Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Shield className="text-[var(--primary)] mb-4 h-10 w-10" />
                  <h3 className="text-xl font-semibold mb-2">Rigorous Testing</h3>
                  <p className="text-gray-600">
                    Every batch undergoes comprehensive testing to ensure consistency and performance.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Award className="text-[var(--primary)] mb-4 h-10 w-10" />
                  <h3 className="text-xl font-semibold mb-2">Certified Excellence</h3>
                  <p className="text-gray-600">
                    Our products meet and exceed industry standards and certifications.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Zap className="text-[var(--primary)] mb-4 h-10 w-10" />
                  <h3 className="text-xl font-semibold mb-2">Performance Driven</h3>
                  <p className="text-gray-600">
                    Designed to deliver optimal performance in demanding industrial environments.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Shield className="text-[var(--primary)] mb-4 h-10 w-10" />
                  <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                  <p className="text-gray-600">
                    Sourced from premium suppliers to ensure the highest quality end product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Product Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About Our Product</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                Ramming mass powders are essential refractory materials used to line and protect the interiors of high-temperature furnaces, induction systems, and similar industrial equipment. Comprising a carefully selected mix of minerals and aggregates, these powders are designed to withstand intense heat, mechanical stress, and thermal shock. When applied, the powder is rammed into place to form a durable, insulating layer that prevents damage to the furnace lining, thereby extending the equipment's operational life and enhancing efficiency.
              </p>
              <p className="text-gray-700">
                These powders are formulated to meet specific operational requirements, such as varying temperature ranges and chemical exposures. Advances in formulation often emphasize sustainability, integrating eco-friendly materials and practices. By providing superior resistance to erosion and thermal degradation, ramming mass powders play a crucial role in maintaining the performance and longevity of industrial furnaces, contributing significantly to cost savings and operational stability in metal production and foundry processes.
              </p>
              <div className="mt-6">
                <a href="/products" className="btn btn-primary">
                  View Our Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Making Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Manufacturing Process</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {processSteps.slice(0, 3).map(step => (
                <ProcessStep 
                  key={step.id}
                  number={step.id}
                  title={step.title}
                  description={step.description}
                  videoUrl={step.videoUrl}
                />
              ))}
            </div>
            
            <div className="space-y-6">
              {processSteps.slice(3).map(step => (
                <ProcessStep 
                  key={step.id}
                  number={step.id}
                  title={step.title}
                  description={step.description}
                  videoUrl={step.videoUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Customer Reviews Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map(review => (
              <ReviewCard 
                key={review.id}
                name={review.name}
                company={review.company}
                review={review.review}
                rating={review.rating}
                imageUrl={review.imageUrl}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <a href="/market-expansion#reviews" className="btn btn-primary">
              See More Reviews
            </a>
          </div>
          
          {/* Leave a Review */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-center">Leave a Review</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Your Company Ltd."
                  />
                </div>
                
                <div>
                  <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Review
                  </label>
                  <textarea
                    id="review"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Tell us about your experience with our products"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="text-gray-300 hover:text-yellow-400"
                      >
                        <Star className={`h-6 w-6`} />
                      </button>
                    ))}
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary w-full">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Star component for ratings
const Star: React.FC<{className?: string}> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.519 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.519-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export default HomePage;