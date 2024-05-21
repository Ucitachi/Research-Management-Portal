import React from 'react';

function ProfessionalDetails({ data, setData, onNext, onPrev }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>'C' Professional Details</h2>
      <form>
        <label>
          Professional details in reverse chronological order:
          <textarea name="professionalDetails" value={data.professionalDetails || ''} onChange={handleChange} />
        </label>
        <label>
          Details of Publications in last 3 years:
          <textarea name="publications" value={data.publications || ''} onChange={handleChange} />
        </label>
        <label>
          Details of Funded/consultancy Projects:
          <textarea name="projects" value={data.projects || ''} onChange={handleChange} />
        </label>
        <label>
          Patents if any:
          <textarea name="patents" value={data.patents || ''} onChange={handleChange} />
        </label>
        <label>
          Application Fee Payment Details:
          <textarea name="paymentDetails" value={data.paymentDetails || ''} onChange={handleChange} />
        </label>
        <button type="button" onClick={onPrev}>Previous</button>
        <button type="button" onClick={onNext}>Next</button>
      </form>
    </div>
  );
}

export default ProfessionalDetails;
