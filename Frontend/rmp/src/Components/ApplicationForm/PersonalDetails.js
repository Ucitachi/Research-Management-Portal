import React, { useState } from 'react';

function PersonalDetails({ data, setData, onNext }) {
  const [firstName, setFirstName] = useState(data.firstName || '');
  const [lastName, setLastName] = useState(data.lastName || '');
  const [email, setEmail] = useState(data.email || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({ ...data, firstName, lastName, email });
    onNext();
  };

  return (
    <div>
      <h2>Step 1: Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default PersonalDetails;
  