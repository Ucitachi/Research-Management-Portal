import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationalDetails';
import SubmitApplication from './Submit';

function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && (
        <PersonalDetails data={data} setData={setData} onNext={handleNext} />
      )}
      {step === 2 && (
        <EducationDetails
          data={data}
          setData={setData}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 3 && (
        <SubmitApplication data={data} onPrev={handlePrev} />
      )}
    </div>
  );
}

export default ApplicationForm;