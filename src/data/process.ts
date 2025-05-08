import crushingVideo from '../assets/videos/crushing & grinding.mp4';
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  videoUrl?: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Raw Material Selection',
    description: 'Carefully selecting high-quality raw materials that meet our stringent standards for purity and consistency.',
    videoUrl: '/videos/step1.mp4' // Placeholder for actual video URL
  },
  {
    id: 2,
    title: 'Material Testing',
    description: 'Rigorous testing of raw materials to ensure they meet specifications for particle size, chemical composition, and purity.',
    videoUrl: '/videos/step2.mp4' // Placeholder for actual video URL
  },
  {
    id: 3,
    title: 'Crushing and Grinding',
    description: 'Processing raw materials through our advanced crushing and grinding equipment to achieve the desired particle size distribution.',
    videoUrl: './assets/videos/crushing & grinding.mp4' // Placeholder for actual video URL
  },
  {
    id: 4,
    title: 'Mixing and Blending',
    description: 'Precisely mixing and blending different components according to specific formulations to create our range of ramming mass powders.',
    videoUrl: '/videos/step4.mp4' // Placeholder for actual video URL
  },
  {
    id: 5,
    title: 'Quality Control',
    description: 'Comprehensive quality control testing to ensure that every batch of product meets our high standards for performance and consistency.',
    videoUrl: '/videos/step5.mp4' // Placeholder for actual video URL
  },
  {
    id: 6,
    title: 'Packaging and Shipping',
    description: 'Careful packaging of our products to maintain their integrity during transportation and efficient shipping to customers worldwide.',
    videoUrl: '/videos/step6.mp4' // Placeholder for actual video URL
  }
];