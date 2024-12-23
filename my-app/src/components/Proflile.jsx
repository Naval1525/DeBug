// // import { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const Profile = () => {
// //   const [user, setUser] = useState(null);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchUserDetails = async () => {
// //       const token = localStorage.getItem('token'); // or wherever the token is stored

// //       try {
// //         const response = await axios.get('http://localhost:8000/api/auth/user', {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         setUser(response.data.user);
// //       } catch (err) {
// //         setError('Error fetching user details.');
// //         console.error(err);
// //       }
// //     };

// //     fetchUserDetails();
// //   }, []);

// //   if (error) return <div className="text-red-500">{error}</div>;
// //   if (!user) return <div>Loading...</div>;

// //   return (
// //     <div className="bg-gradient-to-r from-purple-400 to-pink-600 p-6 rounded-lg shadow-lg text-white">
// //       <div className="flex flex-col items-center">
// //         <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
// //           {user.username}'s Profile
// //         </h1>
// //         <div className="bg-gray-800/50 p-4 rounded-lg mb-4 border border-gray-700 w-full max-w-md">
// //           <div className="flex justify-between mb-2">
// //             <div className="text-gray-300">Email:</div>
// //             <div>{user.email}</div>
// //           </div>
// //           <div className="flex justify-between mb-2">
// //             <div className="text-gray-300">Reputation:</div>
// //             <div>{user.reputation}</div>
// //           </div>
// //           <div className="flex justify-between mb-2">
// //             <div className="text-gray-300">Joined on:</div>
// //             <div>{new Date(user.dateJoined).toLocaleDateString()}</div>
// //           </div>
// //         </div>
// //         <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white hover:bg-gray-700">
// //           Edit Profile
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';  // Import js-cookie to access cookies

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = Cookies.get('token'); // Get the token from the cookie

//       if (!token) {
//         setError('No token found. Please log in again.');
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:8000/api/auth/user', {
//           headers: {
//             Authorization: `Bearer ${token}`, // Pass token in the Authorization header
//           },
//         });
//         setUser(response.data.user);
//       } catch (err) {
//         if (err.response?.data?.error === 'jwt expired') {
//           // Token expired, attempt to refresh it (if you have a refresh token mechanism)
//           const refreshedTokens = await refreshAccessToken();
//           if (refreshedTokens) {
//             // Store the new access token in cookies
//             Cookies.set('token', refreshedTokens.accessToken);
//             setUser(await fetchUserDetails());  // Retry the original request
//           } else {
//             // Redirect to login if refresh failed
//             window.location.href = '/login';
//           }
//         } else {
//           setError('Error fetching user details.');
//         }
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   const refreshAccessToken = async () => {
//     const refreshToken = Cookies.get('refreshToken'); // Assuming you also store a refresh token

//     try {
//       const response = await axios.post('/api/refresh-token', { refreshToken });
//       return response.data;  // Return new access token
//     } catch (error) {
//       console.error('Failed to refresh access token:', error);
//       return null;
//     }
//   };

//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!user) return <div>Loading...</div>;

//   return (
//     <div className="bg-gradient-to-r from-purple-400 to-pink-600 p-6 rounded-lg shadow-lg text-white">
//       <div className="flex flex-col items-center">
//         <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
//           {user.username}'s Profile
//         </h1>
//         <div className="bg-gray-800/50 p-4 rounded-lg mb-4 border border-gray-700 w-full max-w-md">
//           <div className="flex justify-between mb-2">
//             <div className="text-gray-300">Email:</div>
//             <div>{user.email}</div>
//           </div>
//           <div className="flex justify-between mb-2">
//             <div className="text-gray-300">Reputation:</div>
//             <div>{user.reputation}</div>
//           </div>
//           <div className="flex justify-between mb-2">
//             <div className="text-gray-300">Joined on:</div>
//             <div>{new Date(user.dateJoined).toLocaleDateString()}</div>
//           </div>
//         </div>
//         <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white hover:bg-gray-700">
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';  // Import js-cookie to access cookies

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = Cookies.get('token'); // Get the token from the cookie

      if (!token) {
        setError('No token found. Please log in again.');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in the Authorization header
          },
        });
        setUser(response.data.user);
      } catch (err) {
        if (err.response?.data?.error === 'jwt expired') {
          // Token expired, attempt to refresh it (if you have a refresh token mechanism)
          const refreshedTokens = await refreshAccessToken();
          if (refreshedTokens) {
            // Store the new access token in cookies
            Cookies.set('token', refreshedTokens.accessToken);
            setUser(await fetchUserDetails());  // Retry the original request
          } else {
            // Redirect to login if refresh failed
            window.location.href = '/login';
          }
        } else {
          setError('Error fetching user details.');
        }
      }
    };

    fetchUserDetails();
  }, []);

  const refreshAccessToken = async () => {
    const refreshToken = Cookies.get('refreshToken'); // Assuming you also store a refresh token

    try {
      const response = await axios.post('/api/refresh-token', { refreshToken });
      return response.data;  // Return new access token
    } catch (error) {
      console.error('Failed to refresh access token:', error);
      return null;
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-lg shadow-lg backdrop-blur-lg text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          {user.username}'s Profile
        </h1>
        <div className="bg-gray-800/50 p-4 rounded-lg mb-4 border border-gray-700 w-full max-w-md">
          <div className="flex justify-between mb-2">
            <div className="text-gray-300">Email:</div>
            <div>{user.email}</div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="text-gray-300">Reputation:</div>
            <div>{user.reputation}</div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="text-gray-300">Joined on:</div>
            <div>{new Date(user.dateJoined).toLocaleDateString()}</div>
          </div>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white hover:bg-gray-700 border-2 border-purple-500">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
