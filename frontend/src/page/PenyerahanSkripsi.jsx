import React, { useState } from 'react';
import './PenyerahanSkripsi.css'; // Pastikan membuat file CSS ini

const PenyerahanSkripsi = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="stepper-container">
      <div className="stepper">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`step ${step >= num ? 'active' : ''}`}
          >
            <span className="step-number">{num}</span>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handleBack} disabled={step === 1}>
          Back
        </button>
        <button onClick={handleNext} disabled={step === 3}>
          {step === 3 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default PenyerahanSkripsi;
