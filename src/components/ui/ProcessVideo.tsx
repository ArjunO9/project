import React from 'react';
import { motion } from 'framer-motion';

interface ProcessVideoProps {
  step: number;
}

const ProcessVideo: React.FC<ProcessVideoProps> = ({ step }) => {
  // Simulated video URLs for each step
  const videos = [
    'https://player.vimeo.com/video/76979871?background=1',
    'https://player.vimeo.com/video/76979871?background=1',
    'https://player.vimeo.com/video/76979871?background=1',
    'https://player.vimeo.com/video/76979871?background=1',
    'https://player.vimeo.com/video/76979871?background=1',
    'https://player.vimeo.com/video/76979871?background=1'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="process-video bg-gray-100 rounded-xl overflow-hidden"
    >
      <iframe
        src={videos[step - 1]}
        className="w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title={`Manufacturing Process Step ${step}`}
      />
    </motion.div>
  );
};

export default ProcessVideo;