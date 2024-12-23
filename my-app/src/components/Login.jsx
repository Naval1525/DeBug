// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Send login request to the backend
//       const response = await axios.post('http://localhost:8000/api/auth/login', { email, password });

//       // Assuming the token is sent in the response
//       const token = response.data.token;  // Adjust based on the backend response

//       // Save the token in localStorage
//       if (token) {
//         localStorage.setItem('token', token);
//         console.log('Token stored in localStorage');
//       }

//       // Redirect to the homepage or dashboard after successful login
//       navigate('/');  // You can change this to the route where you want to navigate after login
//     } catch (err) {
//       console.error('Login error:', err);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:8000/api/auth/login', { email, password });

      // Assuming the token is sent in the response
      const token = response.data.token;  // Adjust based on the backend response

      // Save the token in a cookie
      if (token) {
        Cookies.set('token', token, { expires: 7 }); // Set the token in a cookie with a 7-day expiry
        console.log('Token stored in cookie');
      }

      // Redirect to the homepage or dashboard after successful login
      navigate('/');  // You can change this to the route where you want to navigate after login
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
