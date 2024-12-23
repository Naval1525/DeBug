import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Send signup request to the backend
      const response = await axios.post('http://localhost:8000/api/auth/register', { username, email, password });

      // Assuming the token is sent in the response
      const token = response.data.token;  // Adjust based on the backend response

      // Save the token in a cookie
      if (token) {
        Cookies.set('token', token, { expires: 7 }); // Set the token in a cookie with a 7-day expiry
        console.log('Token stored in cookie');
      }

      // Redirect to the login page after successful signup
      navigate('/login');
    } catch (err) {
      console.error('Signup error:', err);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
