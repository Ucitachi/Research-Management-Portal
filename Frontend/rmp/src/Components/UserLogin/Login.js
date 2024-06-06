import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; 
import Modal from './Modal';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setUserrole] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validation
    if (!username || !password || !role) {
      setModalMessage('Please fill in all fields');
      setIsModalOpen(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
        role,
      });
      const token = response.data.token;
      console.log(token);
      Cookies.set('token', token);

      // Handle successful login based on your backend logic (e.g., redirect)
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = () => {
    // Clear the token from cookies
    Cookies.remove('token');

    // Redirect to the login page or perform any other action
    // For example, you can use React Router to navigate to the login page
    // history.push('/login');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="role">Role:</label>
        <select id="role" value={role} onChange={(e) => setUserrole(e.target.value)}>
          <option value="">Select User Type</option>
          <option value="admin">Admin</option>
          <option value="researcher">Researcher</option>
          <option value="guide">Guide</option>
        </select>
        <button type="submit">Login</button>
      </form>
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
