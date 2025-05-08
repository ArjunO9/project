export interface Market {
  id: string;
  name: string;
  type: 'india' | 'abroad';
  coordinates: [number, number]; // [longitude, latitude]
  country: string;
}

export const markets: Market[] = [
  // Abroad locations
  { 
    id: 'johannesburg',
    name: 'Johannesburg', 
    type: 'abroad',
    coordinates: [28.0473, -26.2041], // Johannesburg coordinates
    country: 'South Africa'
  },
  { 
    id: 'kathmandu',
    name: 'Kathmandu', 
    type: 'abroad',
    coordinates: [85.3240, 27.7172], // Kathmandu coordinates
    country: 'Nepal'
  },
  
  // Indian states with approximate center coordinates
  { 
    id: 'goa',
    name: 'Goa', 
    type: 'india',
    coordinates: [74.1240, 15.2993],
    country: 'India'
  },
  { 
    id: 'maharashtra',
    name: 'Maharashtra', 
    type: 'india',
    coordinates: [75.7139, 19.7515],
    country: 'India'
  },
  { 
    id: 'chattisgarh',
    name: 'Chattisgarh', 
    type: 'india',
    coordinates: [81.8661, 21.2787],
    country: 'India'
  },
  { 
    id: 'punjab',
    name: 'Punjab', 
    type: 'india',
    coordinates: [75.3412, 31.1471],
    country: 'India'
  },
  { 
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh', 
    type: 'india',
    coordinates: [80.9462, 26.8467],
    country: 'India'
  },
  { 
    id: 'gujarat',
    name: 'Gujarat', 
    type: 'india',
    coordinates: [71.1924, 22.2587],
    country: 'India'
  },
  { 
    id: 'rajasthan',
    name: 'Rajasthan', 
    type: 'india',
    coordinates: [74.2179, 27.0238],
    country: 'India'
  },
  { 
    id: 'uttarakhand',
    name: 'Uttarakhand', 
    type: 'india',
    coordinates: [79.0193, 30.0668],
    country: 'India'
  },
  { 
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh', 
    type: 'india',
    coordinates: [78.6569, 22.9734],
    country: 'India'
  }
];