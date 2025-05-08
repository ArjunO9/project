import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isActive: boolean;
  onSelect: () => void;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  isActive,
  onSelect
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`process-step ${isActive ? 'active' : ''}`}
      onClick={onSelect}
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center">
          <span className="text-xl font-bold text-[var(--secondary)]">{number}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        {isActive ? (
          <CheckCircle className="w-6 h-6 text-[var(--secondary)]" />
        ) : (
          <Play className="w-6 h-6 text-[var(--primary-dark)]" />
        )}
      </div>
    </motion.div>
  );
};

export default ProcessStep;