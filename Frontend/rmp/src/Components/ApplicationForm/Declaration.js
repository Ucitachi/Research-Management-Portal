import React, { useState } from 'react';

function Declaration({ onNext, onPrev }) {
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    setAgreed(true);
  };

  const handleNext = () => {
    if (agreed) {
      onNext();
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };

  return (
    <div>
      <h2>Declaration</h2>
      <ol>
        1. <li>I declare that particulars and information furnished are fully correct.</li>
        2. <li>If there is any false information/fake certificate or any forgery in the particulars /certificates / documents submitted by me to the authorities of RIT /University, my admission may at once be cancelled and necessary action may be taken.</li>
        3. <li>I do understand that, my admission at RIT is provisional and subject to approval of the VTU, Belagavi.</li>
        4. <li>I also understand that Doctoral fellowship will be released only after obtaining the USN number from VTU.</li>
        5. <li>I also understand that the Doctoral fellowship is for a period of 3 years from the date of registration based on the recommendations of the Committee every year.</li>
        6. <li>I Promise to abide by the rules and regulations of the Institution and the University, and I can be subjected to disciplinary action, if need arises, and also I can be dismissed from the college, if I am found not obeying the rules and regulations</li>
        7. <li>I agree to adhere to Rules and Regulations, Scheme of study and Examinations of the Autonomous Institute, affiliated to Visvesvaraya Technological University, Belagavi.</li>

      </ol>
      <label>
        <input type="checkbox" checked={agreed} onChange={handleAgree} /> I agree to the terms and conditions
      </label>
      <br />
      <button onClick={onPrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Declaration;
