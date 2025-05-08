import React, { useEffect } from 'react';
import { Leaf, HeartHandshake, UserCheck, Scale, Building } from 'lucide-react';

const InfrastructurePage: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Infrastructure - Rajdhani Minerals';
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)] py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Infrastructure
            </h1>
            <p className="text-xl text-gray-700">
              State-of-the-art facilities and responsible business practices
            </p>
          </div>
        </div>
      </section>
      
      {/* Factory Amenities Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Manufacturing Excellence</h2>
              <p className="text-gray-700 mb-6">
                At Rajdhani Minerals, we take pride in our state-of-the-art manufacturing facilities that are equipped with the latest technology to ensure the production of high-quality ramming mass powders. Our factories are designed to maintain strict quality control at every stage of the manufacturing process, from raw material handling to final product packaging.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--primary-light)] p-3 rounded-full">
                    <Building className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Modern Production Lines</h3>
                    <p className="text-gray-600">Automated systems ensuring precision and consistency</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--primary-light)] p-3 rounded-full">
                    <Scale className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Quality Testing Labs</h3>
                    <p className="text-gray-600">Advanced equipment for comprehensive product testing</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--primary-light)] p-3 rounded-full">
                    <Leaf className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Eco-Friendly Systems</h3>
                    <p className="text-gray-600">Sustainable practices minimizing environmental impact</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden h-80">
                <img 
                  src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Factory Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="rounded-lg overflow-hidden h-40">
                  <img 
                    src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Manufacturing Process" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-40">
                  <img 
                    src="https://images.pexels.com/photos/3862364/pexels-photo-3862364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Quality Testing" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CSR Activities Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Corporate Social Responsibility</h2>
          
          <div className="mb-12">
            <p className="text-gray-700 text-lg max-w-4xl mx-auto text-center">
              At Rajdhani Minerals, corporate social responsibility (CSR) is deeply embedded in the company's ethos, reflecting its commitment to creating positive social, environmental, and economic impacts. The organization actively engages in a range of CSR activities that not only enhance the well-being of its stakeholders but also contribute to the broader community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-[var(--primary-light)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Environmental Stewardship</h3>
              <p className="text-gray-600">
                Rajdhani Minerals places a strong emphasis on environmental sustainability. The company has implemented state-of-the-art waste management systems and recycling processes to minimize its ecological footprint. Initiatives such as reducing emissions, conserving water, and restoring natural habitats are integral to its operations. The company also invests in research to develop more eco-friendly production techniques and materials.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-[var(--primary-light)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <HeartHandshake className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Engagement</h3>
              <p className="text-gray-600">
                Rajdhani Minerals is dedicated to supporting local communities through various outreach programs. The organization contributes to educational initiatives by providing scholarships and funding for schools in underserved areas. Additionally, the company actively participates in community development projects, including infrastructure improvements and health camps, to enhance the quality of life for local residents.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-[var(--primary-light)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <UserCheck className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Employee Welfare</h3>
              <p className="text-gray-600">
                Recognizing that its employees are its greatest asset, Rajdhani Minerals prioritizes their well-being through comprehensive welfare programs. This includes offering competitive salaries, health benefits, and opportunities for professional development. The company also fosters a supportive work environment that promotes work-life balance and employee satisfaction.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-[var(--primary-light)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethical Practices</h3>
              <p className="text-gray-600">
                The company is committed to upholding the highest ethical standards in all its business dealings. Rajdhani Minerals ensures transparency and integrity in its operations, from sourcing raw materials to engaging with suppliers and clients. The organization adheres to fair labor practices and promotes a culture of respect and inclusivity within its workforce.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-[var(--primary-light)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Supporting Local Economy</h3>
              <p className="text-gray-600">
                Rajdhani Minerals actively contributes to the local economy by creating job opportunities and partnering with local suppliers. The company's support for small and medium-sized enterprises (SMEs) helps to stimulate economic growth and foster entrepreneurial spirit in the region.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-[var(--primary-light)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <HeartHandshake className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Development</h3>
              <p className="text-gray-600">
                Through these CSR activities, Rajdhani Minerals not only strives to be a responsible corporate citizen but also aims to inspire positive change and drive sustainable development. The company's ongoing commitment to social and environmental responsibility reflects its core values and its dedication to making a meaningful impact beyond its business operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Gallery Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Facilities</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="rounded-lg overflow-hidden hover-scale">
                <img 
                  src={`https://images.pexels.com/photos/${1000000 + index * 100}/pexels-photo-${1000000 + index * 100}.jpeg?auto=compress&cs=tinysrgb&w=600`} 
                  alt={`Facility Image ${index}`}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    // Fallback image URL in case the generated URL doesn't work
                    (e.target as HTMLImageElement).src = "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-[var(--primary-light)]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Visit Our Facilities
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Interested in seeing our manufacturing process firsthand? Contact us to schedule a visit to our facilities.
            </p>
            <a href="/about-us#quote" className="btn btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructurePage;