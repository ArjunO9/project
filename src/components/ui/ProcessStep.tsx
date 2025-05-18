import React, { useRef, useState } from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  videoUrl?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  videoUrl 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <article className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
          {number}
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          {videoUrl && (
            <div className="relative group">
              <video
                ref={videoRef}
                className="w-full rounded-lg cursor-pointer"
                onClick={togglePlay}
                muted
                playsInline
                aria-label={`Video demonstration of ${title}`}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <button
                onClick={togglePlay}
                className={`absolute inset-0 m-auto w-14 h-14 flex items-center justify-center transition-opacity duration-300 ${
                  isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                } bg-black/50 rounded-full backdrop-blur-sm`}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProcessStep;