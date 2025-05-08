import React from 'react';

interface CountryData {
  name: string;
  type: 'india' | 'abroad';
}

interface MapDisplayProps {
  countries: CountryData[];
}

const MapDisplay: React.FC<MapDisplayProps> = ({ countries }) => {
  // Separate countries by type
  const indiaLocations = countries.filter(country => country.type === 'india');
  const abroadLocations = countries.filter(country => country.type === 'abroad');
  
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-md p-4 h-full">
          <h3 className="text-xl font-bold mb-4">Global Presence</h3>
          <div className="relative aspect-[16/9] mb-4">
            <img 
              src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="World Map" 
              className="w-full h-full object-cover rounded-lg"
            />
            
            {/* Here you would ideally have pins or markers for each location */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg text-white font-bold bg-gray-800 bg-opacity-75 px-4 py-2 rounded-md">
                Expanding Globally
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-[var(--accent)]">India</h4>
              <ul className="space-y-1 text-gray-700">
                {indiaLocations.map((location, index) => (
                  <li key={index} className="py-1 border-b border-gray-100 last:border-0">
                    {location.name}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2 text-[var(--accent)]">International</h4>
              <ul className="space-y-1 text-gray-700">
                {abroadLocations.map((location, index) => (
                  <li key={index} className="py-1 border-b border-gray-100 last:border-0">
                    {location.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-md p-4 h-full">
          <h3 className="text-xl font-bold mb-4">Our Network</h3>
          <p className="text-gray-600 mb-4">
            Rajdhani Minerals has established a strong network across India and internationally, providing our high-quality ramming mass powders to various industries and foundries.
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Manufacturing Facilities</h4>
              <p className="text-gray-600 text-sm">
                State-of-the-art manufacturing facilities equipped with the latest technology to ensure consistent quality.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Distribution Centers</h4>
              <p className="text-gray-600 text-sm">
                Strategically located distribution centers for efficient and timely delivery of our products.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">Customer Support</h4>
              <p className="text-gray-600 text-sm">
                Dedicated customer support teams available in different regions to provide localized assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapDisplay;