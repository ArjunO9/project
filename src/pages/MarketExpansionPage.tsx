import React, { useState, useEffect } from 'react';
import { Map } from 'lucide-react'; // Removed unused Globe import
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import ReviewCard from '../components/ui/ReviewCard';
import { markets } from '../data/markets';
import { reviews } from '../data/reviews';

// Type declarations for react-simple-maps
declare module 'react-simple-maps' {
  interface Geography {
    rsmKey: string;
    properties: Record<string, unknown>;
  }
}

interface GeoFeature {
  rsmKey: string;
  properties: Record<string, unknown>;
}

interface GeographiesChildProps {
  geographies: GeoFeature[];
}

interface MarketLocation {
  id: string;
  name: string;
  type: 'india' | 'abroad';
  coordinates: [number, number];
  country: string;
}

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const MarketExpansionPage: React.FC = () => {
  const [hoveredMarket, setHoveredMarket] = useState<string | null>(null);
  const [selectedMarket, setSelectedMarket] = useState<MarketLocation | null>(null);

  useEffect(() => {
    document.title = 'Market Expansion - Rajdhani Minerals';
    if (window.location.hash === '#reviews') {
      const element = document.getElementById('reviews');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleMarketClick = (market: MarketLocation) => {
    setSelectedMarket(market);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our Global Presence
          </h1>
          <p className="text-lg text-gray-700">
            Serving clients across multiple countries with quality mineral solutions
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Locations List */}
            <div className="lg:w-1/3 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Our Locations</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {markets.map((market) => (
                  <div
                    key={market.id}
                    className={`p-2 rounded cursor-pointer transition-colors ${
                      selectedMarket?.id === market.id ? 'bg-blue-100' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleMarketClick(market)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-2 ${
                          market.type === 'india' ? 'bg-blue-500' : 'bg-green-500'
                        }`}
                      ></div>
                      <span>{market.name}</span>
                      <span className="ml-auto text-sm text-gray-500">{market.country}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Container */}
            <div className="lg:w-2/3">
              <div className="bg-white p-4 rounded-lg h-120 overflow-hidden">
                <ComposableMap
                  projection="geoMercator"
                  width={800}
                  height={400}
                  projectionConfig={{
                    scale: 100,
                    center: [20, 20],
                  }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <Geographies geography={geoUrl}>
                    {({ geographies }: GeographiesChildProps) =>
                      geographies.map((geo: GeoFeature) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#EAEAEC"
                          stroke="#D6D6DA"
                          strokeWidth={0.5}
                        />
                      ))
                    }
                  </Geographies>
                  {markets.map((market) => (
                    <Marker key={market.id} coordinates={market.coordinates}>
                      <circle
                        r={4}
                        fill={market.type === 'india' ? '#3B82F6' : '#10B981'}
                        stroke="#FFF"
                        strokeWidth={1}
                        onMouseEnter={() => setHoveredMarket(market.id)}
                        onMouseLeave={() => setHoveredMarket(null)}
                        className="cursor-pointer transition-all hover:r-5"
                      />
                      {(hoveredMarket === market.id || selectedMarket?.id === market.id) && (
                        <text
                          textAnchor="middle"
                          y={-10}
                          style={{
                            fontFamily: 'system-ui',
                            fill: '#1F2937',
                            fontSize: '10px',
                            fontWeight: '500',
                            pointerEvents: 'none',
                          }}
                        >
                          {market.name}
                        </text>
                      )}
                    </Marker>
                  ))}
                </ComposableMap>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Growth Strategy</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Market Research',
              'Product Adaptation',
              'Strategic Alliances',
              'Quality Assurance',
              'Logistics Network',
              'Customer Support',
            ].map((title, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">
                  {index === 0 &&
                    'Comprehensive analysis of regional demands and competitive landscapes.'}
                  {index === 1 && 'Custom formulations to meet local industry requirements.'}
                  {index === 2 && 'Partnerships with local distributors and industry experts.'}
                  {index === 3 && 'Maintaining consistent product standards globally.'}
                  {index === 4 && 'Efficient supply chain management for timely deliveries.'}
                  {index === 5 && 'Technical assistance and after-sales service.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Global Success Stories</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {['South Africa Expansion', 'Nepal Market Penetration'].map((location, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Map className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold">{location}</h3>
                </div>
                <p className="text-gray-700">
                  {index === 0 &&
                    "Established strong presence in Johannesburg's foundry industry through strategic partnerships."}
                  {index === 1 &&
                    'Became preferred supplier for Nepalese steel plants with customized solutions.'}
                </p>
              </div>
            ))}
          </div>

          {/* Client Testimonials */}
          <div id="reviews" className="pt-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Global Network</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore distribution opportunities and become part of our international growth story
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Contact Our Expansion Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default MarketExpansionPage;