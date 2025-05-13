import React from 'react';
import { Award } from 'lucide-react';

const ISILogo: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
        <Award className="w-6 h-6 text-blue-600" />
        <span className="text-sm font-semibold text-gray-800">ISI Certified</span>
      </div>
    </div>
  );
};

export default ISILogo;