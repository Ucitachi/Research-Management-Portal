import axios from 'axios';

function SubmitApplication({ data, onPrev }) {
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/ApplicationSubmission', data);
      console.log('Server response:', response.data);

    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  return (
    <div>
      <h2>Step 3: Submit Application</h2>
      <button type="button" onClick={onPrev}>Previous</button>
      <button onClick={handleSubmit}>Submit Application</button>
    </div>
  );
}


export default SubmitApplication;