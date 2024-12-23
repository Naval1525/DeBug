import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = Cookies.get('token'); // Ensure 'token' is the correct cookie name

      if (!token) {
        setError('No token found. Please log in.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Correctly send the token in the Authorization header
          },
        });

        setUser(response.data.user); // Assuming the response contains the 'user' object
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user details.');
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="user-details">
      <h1>User Details</h1>
      <div className="user-info">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Display more user details */}
      </div>
    </div>
  );
};

export default UserDetails;
