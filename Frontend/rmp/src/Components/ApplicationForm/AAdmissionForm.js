import React from 'react';

function AdmissionForm({ data, setData, onNext, onPrev }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>'A' Admission Form</h2>
      <form>
        <label>
          VTU-ETR Reg No.:
          <input type="text" name="vtuEtrRegNo" value={data.vtuEtrRegNo || ''} onChange={handleChange} />
        </label>
        <label>
          Score:
          <input type="text" name="score" value={data.score || ''} onChange={handleChange} />
        </label>
        <label>
          Year of VTU-ER:
          <input type="text" name="vtuErYear" value={data.vtuErYear || ''} onChange={handleChange} />
        </label>
        <label>
          Any Other eligibility criterion:
          <input type="text" name="eligibilityCriterion" value={data.eligibilityCriterion || ''} onChange={handleChange} />
        </label>
        <label>
          First Name:
          <input type="text" name="firstName" value={data.firstName || ''} onChange={handleChange} />
        </label>
        <label>
          Middle Name:
          <input type="text" name="middleName" value={data.middleName || ''} onChange={handleChange} />
        </label>
        <label>
          Last Name/Surname/Initial:
          <input type="text" name="lastName" value={data.lastName || ''} onChange={handleChange} />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dob" value={data.dob || ''} onChange={handleChange} />
        </label>
        <label>
          Gender:
          <input type="text" name="gender" value={data.gender || ''} onChange={handleChange} />
        </label>
        <label>
          Blood Group:
          <input type="text" name="bloodGroup" value={data.bloodGroup || ''} onChange={handleChange} />
        </label>
        <label>
          Father's/Husband's Name:
          <input type="text" name="parentName" value={data.parentName || ''} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={data.category || ''} onChange={handleChange} />
        </label>
        <label>
          Address for Communication:
          <input type="text" name="addressCommunication" value={data.addressCommunication || ''} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phone" value={data.phone || ''} onChange={handleChange} />
        </label>
        <label>
          Permanent Address:
          <input type="text" name="permanentAddress" value={data.permanentAddress || ''} onChange={handleChange} />
        </label>
        <label>
          Mobile No.:
          <input type="text" name="mobile" value={data.mobile || ''} onChange={handleChange} />
        </label>
        <label>
          Emergency No.:
          <input type="text" name="emergency" value={data.emergency || ''} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={data.email || ''} onChange={handleChange} />
        </label>
        <label>
          Nationality:
          <input type="text" name="nationality" value={data.nationality || ''} onChange={handleChange} />
        </label>
        <label>
          Mother Tongue:
          <input type="text" name="motherTongue" value={data.motherTongue || ''} onChange={handleChange} />
        </label>
        <label>
          Domicile:
          <input type="text" name="domicile" value={data.domicile || ''} onChange={handleChange} />
        </label>
        <label>
          Place Of Birth:
          <input type="text" name="birthPlace" value={data.birthPlace || ''} onChange={handleChange} />
        </label>
        <label>
          State of Birth:
          <input type="text" name="birthState" value={data.birthState || ''} onChange={handleChange} />
        </label>
        <button type="button" onClick={onPrev}>Previous</button>
        <button type="button" onClick={onNext}>Next</button>
      </form>
    </div>
  );
}

export default AdmissionForm;
