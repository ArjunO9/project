import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Construction, Layers, Star, PenTool as Tool } from 'lucide-react';

const TilesAdhesivePage: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Tiles Adhesive - Rajdhani Minerals';
  }, []);
  
  return (
    <div className="tiles-adhesive-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-20 text-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="bg-blue-600 text-blue-100 px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                NEW PRODUCT LINE
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Premium Tiles Adhesive for Perfect Bonding
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Introducing our new range of high-performance tiles adhesive - engineered for strength, durability, and ease of application
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#products" className="btn bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">
                  Explore Products
                </a>
                <Link to="/about-us#quote" className="btn bg-blue-600 hover:bg-blue-700 text-white border border-blue-300">
                  Get a Quote
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/5691623/pexels-photo-5691623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Tiles Adhesive Application" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Why Choose Our Tiles Adhesive?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our tiles adhesive is formulated with cutting-edge technology to provide superior bonding strength and durability for all your tiling needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Construction className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">Superior Strength</h3>
              <p className="text-gray-600">
                Engineered for maximum adhesion and bonding strength, ensuring tiles stay securely in place for years.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">Versatile Application</h3>
              <p className="text-gray-600">
                Suitable for a wide range of surfaces including concrete, cement, brick, and plasterboard, both for interior and exterior use.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Tool className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">Easy Application</h3>
              <p className="text-gray-600">
                Smooth, creamy consistency allows for easy spreading and application, reducing installation time and effort.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">Premium Quality</h3>
              <p className="text-gray-600">
                Manufactured with high-grade materials and stringent quality control for consistent performance.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Tool className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">Water Resistant</h3>
              <p className="text-gray-600">
                Excellent water resistance makes it ideal for bathrooms, kitchens, and exterior applications.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">Long Shelf Life</h3>
              <p className="text-gray-600">
                Maintains its properties over time when stored properly, reducing waste and ensuring value for money.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Showcase */}
      <section id="products" className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Tiles Adhesive Range</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of tiles adhesive products designed for different applications and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="h-48 bg-blue-200 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4503272/pexels-photo-4503272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Standard Tiles Adhesive" 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Standard Tiles Adhesive</h3>
                <p className="text-gray-600 mb-4">
                  Our versatile standard adhesive suitable for most indoor tiling applications on walls and floors.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">Available in 5kg, 10kg, 20kg</span>
                  <a href="/about-us#quote" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                    Details <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="h-48 bg-blue-200 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Flexible Tiles Adhesive" 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-yellow-400 text-blue-900 text-xs px-2 py-1 rounded">
                  Premium
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Flexible Tiles Adhesive</h3>
                <p className="text-gray-600 mb-4">
                  Enhanced flexibility makes this ideal for areas subject to thermal movement or vibration.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">Available in 10kg, 20kg</span>
                  <a href="/about-us#quote" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                    Details <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="h-48 bg-blue-200 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4503812/pexels-photo-4503812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Rapid-Set Tiles Adhesive" 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Rapid-Set Tiles Adhesive</h3>
                <p className="text-gray-600 mb-4">
                  Fast-setting formula allowing for grouting within 2-3 hours, perfect for time-sensitive projects.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">Available in 5kg, 10kg</span>
                  <a href="/about-us#quote" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                    Details <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Guide */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-blue-800">How to Apply</h2>
              <p className="text-gray-600 mb-6">
                Follow these simple steps to achieve the best results with our tiles adhesive products:
              </p>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-800 mb-1">Surface Preparation</h3>
                    <p className="text-gray-600">
                      Ensure the surface is clean, dry, and free from dust, grease, or loose particles.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-800 mb-1">Mixing</h3>
                    <p className="text-gray-600">
                      Mix with clean water as per instructions to achieve a smooth, lump-free consistency.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-800 mb-1">Application</h3>
                    <p className="text-gray-600">
                      Apply with a notched trowel at a 45° angle to create consistent ridges for optimal coverage.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-800 mb-1">Tile Placement</h3>
                    <p className="text-gray-600">
                      Place tiles firmly with a slight twisting motion to ensure good contact with the adhesive.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      5
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-800 mb-1">Curing</h3>
                    <p className="text-gray-600">
                      Allow the adhesive to cure as per specified time before grouting or subjecting to traffic.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="/about-us#quote" className="btn bg-blue-600 hover:bg-blue-700 text-white">
                  Download Full Guide
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6419168/pexels-photo-6419168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Applying Tiles Adhesive" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">What Professionals Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from industry professionals who have experienced the quality and performance of our tiles adhesive products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.pexels.com/photos/3760958/pexels-photo-3760958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Testimonial 1" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Rajiv Sharma</h4>
                  <p className="text-sm text-gray-500">Professional Tiler, Delhi</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I've been using Rajdhani Minerals' tiles adhesive for my projects, and I'm impressed with its consistency and bonding strength. It's become my go-to product for high-quality tiling work."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Testimonial 2" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Amit Patel</h4>
                  <p className="text-sm text-gray-500">Construction Manager, Mumbai</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The rapid-set formula has been a game-changer for our time-sensitive projects. We can now complete tiling work much faster without compromising on quality. Highly recommended!"
              </p>
              <div className="mt-4 flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Testimonial 3" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Sunita Reddy</h4>
                  <p className="text-sm text-gray-500">Interior Designer, Bangalore</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a designer, reliability is crucial. The flexible adhesive has been perfect for my bathroom renovation projects, especially for large format tiles. The finish is always impeccable."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Tiling Projects?</h2>
              <p className="text-blue-100 text-lg">
                Experience the difference with Rajdhani Minerals' premium tiles adhesive range. Contact us today for product information or to place an order.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link to="/about-us#quote" className="btn bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-center">
                Request a Quote
              </Link>
              <a href="#products" className="btn bg-blue-600 border border-blue-300 hover:bg-blue-800 text-white text-center">
                View Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TilesAdhesivePage;