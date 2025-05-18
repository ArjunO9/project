import N1 from '../assets/pics/N1.jpg';
import NA1 from '../assets/pics/NA1.jpg';
import P1 from '../assets/pics/P1.jpg';
import D1 from '../assets/pics/D1.jpg';
import C1 from '../assets/pics/C1.jpg';
export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 'non-premix',
    name: 'Ramming Mass Powder Non Premix',
    description: 'High-quality ramming mass powder without pre-mixed additives, ideal for custom formulations.',
    fullDescription: 'Our RMP Non Premix is a premium grade ramming mass powder designed for foundries that prefer to add their own additives based on specific requirements. This product offers excellent thermal stability, low thermal conductivity, and superior erosion resistance. The non-premix formulation allows for customization to meet the unique demands of different induction furnace systems.',
    imageUrl: N1
  },
  {
    id: 'boron-oxide',
    name: 'Ramming Mass Powder Premix (with boron oxide)',
    description: 'Pre-mixed ramming mass powder with boron oxide for enhanced sintering and thermal properties.',
    fullDescription: 'Our RMP Premix with boron oxide is a specially formulated ramming mass powder that incorporates boron oxide for improved sintering behavior and enhanced thermal properties. This product offers excellent resistance to thermal shock and provides superior protection to induction furnace linings. The addition of boron oxide helps in achieving better bonding between particles, resulting in a more durable and longer-lasting lining.',
    imageUrl: 'https://images.pexels.com/photos/5995292/pexels-photo-5995292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'boric-acid',
    name: 'Ramming Mass Powder Premix (with boric acid)',
    description: 'Pre-mixed ramming mass powder with boric acid for improved binding and extended furnace life.',
    fullDescription: 'RMP Premix with boric acid is our premium furnace lining material incorporating boric acid as a binding agent. This formulation provides excellent thermal stability, enhanced erosion resistance, and superior binding properties. The addition of boric acid improves the sintering process, leading to a stronger and more durable lining that extends the operational life of induction furnaces.',
    imageUrl: 'https://images.pexels.com/photos/6197124/pexels-photo-6197124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '150-mesh',
    name: '150 Mesh Powder',
    description: 'Fine 150 mesh powder for specialized applications requiring precise particle size distribution.',
    fullDescription: 'Our 150 Mesh Powder is a finely ground material with a precise particle size distribution, specifically designed for applications that require excellent filling properties and smooth surface finish. This product is ideal for creating a dense, compact lining with minimal porosity. The controlled particle size ensures consistency in performance and facilitates easier application.',
    imageUrl: C1
  },
  {
    id: 'quartz-stone',
    name: '0 to 6 mm Quartz Stone',
    description: 'High-purity quartz stone in 0-6 mm size range for various industrial applications.',
    fullDescription: 'Our 0 to 6 mm Quartz Stone is a high-purity silica product with a controlled size range of 0 to 6 mm. This product offers excellent thermal stability, low thermal expansion, and exceptional chemical resistance. It is ideal for various industrial applications, including foundry work, glass manufacturing, and construction materials. The consistent size distribution ensures optimal performance in different applications.',
    imageUrl: D1
  },
  {
    id: '30-80-powder',
    name: '30-80 mm Powder',
    description: 'Coarse powder in 30-80 mm size range for applications requiring larger particle sizes.',
    fullDescription: 'The 30-80 mm Powder is our coarse-grade product designed for applications that require larger particle sizes. This product offers excellent mechanical strength, good thermal shock resistance, and superior performance in high-temperature applications. The larger particle size provides good gas permeability and helps in reducing the risk of explosive spalling in high-temperature environments.',
    imageUrl: 'https://images.pexels.com/photos/4040972/pexels-photo-4040972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'Nalitop',
    name: 'Nalitop',
    description: 'Coarse powder in 30-80 mm size range for applications requiring larger particle sizes.',
    fullDescription: 'The 30-80 mm Powder is our coarse-grade product designed for applications that require larger particle sizes. This product offers excellent mechanical strength, good thermal shock resistance, and superior performance in high-temperature applications. The larger particle size provides good gas permeability and helps in reducing the risk of explosive spalling in high-temperature environments.',
    imageUrl: NA1
  }
];