import React from 'react';

function PersonalDetails({ data, setData, onNext }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Personal Details</h2>
      <form>
        <label>
          Full Name Of Applicant:
          <input type="text" name="fullName" value={data.fullName || ''} onChange={handleChange} />
        </label>
        <label>
          Department Applied For:
          <input type="text" name="department" value={data.department || ''} onChange={handleChange} />
        </label>
        <label>
          Area Of Research:
          <input type="text" name="researchArea" value={data.researchArea || ''} onChange={handleChange} />
        </label>
        <label>
          Ph.D for the year:
          <input type="text" name="phdYear" value={data.phdYear || ''} onChange={handleChange} />
        </label>
        <button type="button" onClick={onNext}>Next</button>
      </form>
    </div>
  );
}

export default PersonalDetails;
