import React, { useState } from 'react';

function EducationDetails({ data, setData, onNext, onPrev }) {
  const [degree, setDegree] = useState(data.degree || '');
  const [university, setUniversity] = useState(data.university || '');
  const [gradYear, setGradYear] = useState(data.gradYear || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({ ...data, degree, university, gradYear });
    onNext();
  };

  return (
    <div>
      <h2>Step 2: Education Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
        <label htmlFor="university">University:</label>
        <input
          type="text"
          id="university"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
        <label htmlFor="gradYear">Graduation Year:</label>
        <input
          type="number"
          id="gradYear"
          value={gradYear}
          onChange={(e) => setGradYear(e.target.value)}
        />
        <button type="button" onClick={onPrev}>Previous</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}


export default EducationDetails;