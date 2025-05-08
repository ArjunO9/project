export interface Review {
  id: number;
  name: string;
  company: string;
  review: string;
  rating: number;
  imageUrl?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Ashoka Foundries',
    review: 'We have been using Rajdhani Minerals\' ramming mass powders for over 5 years. The quality and consistency of their products have significantly improved the efficiency of our foundry operations. Their technical support team is also very responsive.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Sanjay Mehta',
    company: 'Metal Masters Ltd.',
    review: 'The RMP Premix with boron oxide from Rajdhani Minerals has extended the life of our induction furnace linings by nearly 30%. This has resulted in significant cost savings for our operation. Highly recommended!',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    company: 'Precision Castings',
    review: 'Consistent quality, timely delivery, and excellent customer service - these are the hallmarks of Rajdhani Minerals. Their 150 Mesh Powder has become an integral part of our casting process.',
    rating: 4,
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    company: 'Global Metals Inc.',
    review: 'As an international customer, I appreciate Rajdhani Minerals\' commitment to quality and their efficient export process. Their products meet our stringent specifications, and their customer service is outstanding.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Anita Patel',
    company: 'Superior Foundry Solutions',
    review: 'We switched to Rajdhani Minerals for our ramming mass needs last year, and the improvement in our furnace performance has been remarkable. Their technical expertise and product quality are unmatched.',
    rating: 4,
    imageUrl: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    name: 'Mohammed Ali',
    company: 'Desert Metal Works',
    review: 'Despite the long shipping distance to our facility, Rajdhani Minerals ensures timely delivery and maintains excellent product quality. Their ramming mass powders perform exceptionally well in our high-temperature applications.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];