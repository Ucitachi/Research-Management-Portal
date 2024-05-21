import React from 'react';

function EducationDetails({ data, setData, onNext, onPrev }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>'B' Academic Details</h2>
      <form>
        <h3>UG Details</h3>
        <label>
          UG Degree:
          <input type="text" name="ugDegree" value={data.ugDegree || ''} onChange={handleChange} />
        </label>
        <label>
          UG Year of Passing:
          <input type="text" name="ugYear" value={data.ugYear || ''} onChange={handleChange} />
        </label>
        <label>
          UG College:
          <input type="text" name="ugCollege" value={data.ugCollege || ''} onChange={handleChange} />
        </label>
        <label>
          UG University:
          <input type="text" name="ugUniversity" value={data.ugUniversity || ''} onChange={handleChange} />
        </label>
        <label>
          UG Specialization:
          <input type="text" name="ugSpecialization" value={data.ugSpecialization || ''} onChange={handleChange} />
        </label>
        <label>
          UG Percentage/CGPA:
          <input type="text" name="ugPercentage" value={data.ugPercentage || ''} onChange={handleChange} />
        </label>
        <label>
          Title of UG Thesis:
          <input type="text" name="ugThesis" value={data.ugThesis || ''} onChange={handleChange} />
        </label>
        
        <h3>PG Details</h3>
        <label>
          PG Degree:
          <input type="text" name="pgDegree" value={data.pgDegree || ''} onChange={handleChange} />
        </label>
        <label>
          PG Year of Passing:
          <input type="text" name="pgYear" value={data.pgYear || ''} onChange={handleChange} />
        </label>
        <label>
          PG College:
          <input type="text" name="pgCollege" value={data.pgCollege || ''} onChange={handleChange} />
        </label>
        <label>
          PG University:
          <input type="text" name="pgUniversity" value={data.pgUniversity || ''} onChange={handleChange} />
        </label>
        <label>
          PG Specialization:
          <input type="text" name="pgSpecialization" value={data.pgSpecialization || ''} onChange={handleChange} />
        </label>
        <label>
          PG Percentage/CGPA:
          <input type="text" name="pgPercentage" value={data.pgPercentage || ''} onChange={handleChange} />
        </label>
        <label>
          Title of PG Thesis:
          <input type="text" name="pgThesis" value={data.pgThesis || ''} onChange={handleChange} />
        </label>
        
        <button type="button" onClick={onPrev}>Previous</button>
        <button type="button" onClick={onNext}>Next</button>
      </form>
    </div>
  );
}

export default EducationDetails;
