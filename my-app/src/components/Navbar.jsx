import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {
  const navigate = useNavigate();

  // Check if the user is logged in by checking if the token exists in cookies
  const token = Cookies.get('token');

  // Handle logout functionality
  const handleLogout = () => {
    // Remove the token from cookies to log the user out
    Cookies.remove('token');
    // Optionally, redirect to the login page or home page
    navigate('/login');
  };

  return (
    <div>
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
          {token ? (
            // If the user is logged in, show the Logout button
            <li>
              <button
                onClick={handleLogout}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#ff4d4d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            // If the user is not logged in, show Login and Signup buttons
            <>
              <li>
                <button
                  onClick={() => navigate('/login')}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/signup')}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Signup
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
