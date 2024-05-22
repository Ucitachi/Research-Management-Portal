import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import AdmissionForm from './AAdmissionForm';
import EducationDetails from './EducationalDetails';
import ProfessionalDetails from './ProfessionalDetails';
import Declaration from './Declaration';
import UploadDocuments from './UploadDocuments';
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
        <AdmissionForm
          data={data}
          setData={setData}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 3 && (
        <EducationDetails
          data={data}
          setData={setData}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 4 && (
        <ProfessionalDetails
          data={data}
          setData={setData}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 5 && (
        <Declaration
          data={data}
          setData={setData}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 6 && (
        <UploadDocuments
          data={data}
          setData={setData}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 7 && (
        <SubmitApplication data={data} onPrev={handlePrev} />
      )}
    </div>
  );
}

export default ApplicationForm;
