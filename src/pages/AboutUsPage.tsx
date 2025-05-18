import React, { useEffect } from 'react';
import { Calendar, Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ui/ContactForm';
 import founderpic from '../assets/pics/amit Khandelwal.jpg';  
const AboutUsPage: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'About Us - Rajdhani Minerals';
    
    // Scroll to quote section if hash is present
    const hash = window.location.hash;
    if (hash && hash === '#quote') {
      const element = document.getElementById('quote');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
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
              About Us
            </h1>
            <p className="text-xl text-gray-700">
              Learn about our journey, our values, and the people behind Rajdhani Minerals
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2010, Rajdhani Minerals has established itself as a leader in the production of ramming mass powder. What started as a small enterprise with a vision to improve foundry materials has evolved into a respected name in the industry. Our journey has been driven by a passion for quality and a relentless pursuit of excellence. We proudly serve clients both domestically and internationally with cutting-edge products and unmatched expertise.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-[var(--primary-light)] rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="font-semibold">Established</h3>
                  <p className="text-gray-600">2010</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--primary-light)] rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="font-semibold">Headquarters</h3>
                  <p className="text-gray-600">Rajasthan, India</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1251829/pexels-photo-1251829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Company Building" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Founder Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">About the Founder</h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src= {founderpic}
                  alt="Amit Khandelwal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Amit Khandelwal</h3>
                <p className="text-gray-700 mb-4">
                  Introducing Amit Khandelwal, the visionary owner of Rajdhani Minerals, a prominent organization renowned for producing high-quality ramming mass powder. With a deep-rooted expertise in ramming mass powder, Amit has played a pivotal role in establishing Rajdhani Minerals as a leader in the sector.
                </p>
                <p className="text-gray-700 mb-4">
                  Under Amit's stewardship, Rajdhani Minerals has flourished into a benchmark of excellence and innovation. Driven by a commitment to superior product quality and cutting-edge technology, Amit has overseen the development of advanced manufacturing processes that ensure the highest standards in ramming mass powder production.
                </p>
                <p className="text-gray-700">
                  Amit's strategic vision and dedication to sustainable practices have not only propelled Rajdhani Minerals to the forefront of the industry but also earned the company a reputation for reliability and exceptional service. With a hands-on approach and a passion for continuous improvement, Amit continues to lead Rajdhani Minerals with integrity and foresight, setting new standards and driving growth in the ramming mass powder market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get a Quote Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-700 mb-8">
                We'd love to hear from you. Whether you have a question about our products, need a quote, or want to discuss a potential partnership, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-light)] rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">E61, RIICO Industrial Area, Baapi , Dausa, Rajasthan, India(303507)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-light)] rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 83860 40009</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-light)] rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info.rajdhaniminerals@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <table className="w-full text-gray-700">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Monday - Saturday</td>
                      <td className="py-2">9:00 AM - 8:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">Sunday</td>
                      <td className="py-2">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-80 bg-gray-100">
        <div className="w-full h-full">
          {/* Replace with actual map implementation */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Google Maps location will be displayed here</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;