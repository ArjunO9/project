export interface Market {
  name: string;
  type: 'india' | 'abroad';
}

export const markets: Market[] = [
  // Abroad
  { name: 'Johannesburg', type: 'abroad' },
  { name: 'Nepal', type: 'abroad' },
  
  // India
  { name: 'Goa', type: 'india' },
  { name: 'Maharashtra', type: 'india' },
  { name: 'Chattisgarh', type: 'india' },
  { name: 'Punjab', type: 'india' },
  { name: 'Uttar Pradesh', type: 'india' },
  { name: 'Gujarat', type: 'india' },
  { name: 'Rajasthan', type: 'india' },
  { name: 'Uttarakhand', type: 'india' },
  { name: 'Madhya Pradesh', type: 'india' }
];