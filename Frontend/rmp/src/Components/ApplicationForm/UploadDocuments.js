// UploadDocuments.js
import React, { useState } from 'react';

function UploadDocuments({ data, setData, onNext, onPrev }) {
  const [files, setFiles] = useState(data.files || {});

  const handleFileChange = (event) => {
    const { name, files: selectedFiles } = event.target;
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: selectedFiles[0],
    }));
  };

  const handleSubmit = () => {
    setData((prevData) => ({
      ...prevData,
      files,
    }));
    onNext();
  };

  return (
    <div>
      <h2>Upload Documents</h2>
      <div>
        <label>
          10th Marks Card:
          <input
            type="file"
            name="tenthMarksCard"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <div>
        <label>
          12th Marks Card:
          <input
            type="file"
            name="twelfthMarksCard"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <div>
        <label>
          Degree Certificate:
          <input
            type="file"
            name="degreeCertificate"
            onChange={handleFileChange}
          />
        </label>
      </div>
      {/* Add more file inputs as needed */}
      <div>
        <button onClick={onPrev}>Previous</button>
        <button onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
}

export default UploadDocuments;
