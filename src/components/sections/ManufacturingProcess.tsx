import React, { useState } from 'react';
import ProcessStep from '../ui/ProcessStep';
import ProcessVideo from '../ui/ProcessVideo';
import { processSteps } from '../../data/process';

const ManufacturingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Manufacturing Process</h2>
        
        <div className="process-container">
          <div className="process-steps">
            {processSteps.map(step => (
              <ProcessStep 
                key={step.id}
                number={step.id}
                title={step.title}
                description={step.description}
                isActive={activeStep === step.id}
                onSelect={() => setActiveStep(step.id)}
              />
            ))}
          </div>
          
          <ProcessVideo step={activeStep} />
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;