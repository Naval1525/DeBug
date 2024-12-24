// // import React, { useEffect, useState } from 'react';

// // const UserList = () => {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Fetch users from API
// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await fetch('http://localhost:8000/api/auth/users'); // Adjust endpoint if needed
// //         const data = await response.json();
// //         setUsers(data);
// //       } catch (error) {
// //         setError('Failed to fetch users');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

// //   if (loading) return <div className="text-white text-center">Loading...</div>;
// //   if (error) return <div className="text-red-500 text-center">{error}</div>;

// //   return (
// //     <div className="bg-gradient-to-r from-purple-400 to-pink-600 text-white min-h-screen">
// //       <div className="container mx-auto py-12 px-6">
// //         <h1 className="text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-8">
// //           All Users
// //         </h1>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// //           {users.length === 0 ? (
// //             <div className="col-span-full text-center text-gray-400">No users found.</div>
// //           ) : (
// //             users.map((user) => (
// //               <div
// //                 key={user?._id}
// //                 className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-purple-500 backdrop-blur-lg transition duration-300 transform hover:scale-105"
// //               >
// //                 <div className="flex flex-col items-center">
// //                   {/* Profile Picture (Optional) */}
// //                   <img
// //                     src={user?.profilePicture || '/default-avatar.png'} // Default avatar if no picture exists
// //                     alt={user?.username}
// //                     className="w-24 h-24 rounded-full border-4 border-purple-500 mb-4"
// //                   />
// //                   {/* User Info */}
// //                   <h2 className="text-xl font-semibold">{user?.username}</h2>
// //                   <p className="text-gray-300">{user?.email}</p>
// //                   <p className="text-gray-400">Reputation: {user?.reputation ?? 0}</p>
// //                   <p className="text-secondary text-gray-400">
// //                     Joined: {user?.dateJoined ? new Date(user?.dateJoined).toLocaleDateString() : 'N/A'}
// //                   </p>

// //                   {/* Buttons */}
// //                   <div className="mt-4 flex justify-between w-full">
// //                     <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition-all duration-300">
// //                       View Profile
// //                     </button>
// //                     <button className="bg-gray-800 text-white py-2 px-4 rounded border border-purple-500 hover:border-purple-500 hover:bg-gray-700 transition-all duration-300">
// //                       Send Message
// //                     </button>
// //                   </div>

// //                   {/* Tags */}
// //                   <div className="mt-4 flex flex-wrap gap-2 justify-center">
// //                     <span className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-sm">
// //                       {user?.reputation > 500 ? 'High Reputation' : 'New User'}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserList;
// import React, { useEffect, useState } from 'react';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch users from API
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/api/auth/users'); // Adjust endpoint if needed
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         setError('Failed to fetch users');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <div className="text-white text-center">Loading...</div>;
//   if (error) return <div className="text-red-500 text-center">{error}</div>;

//   return (
//     <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen">
//       <div className="container mx-auto py-12 px-6">
//         <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
//           All Users
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {users.length === 0 ? (
//             <div className="col-span-full text-center text-gray-400">No users found.</div>
//           ) : (
//             users.map((user) => (
//               <div
//                 key={user?._id}
//                 className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
//               >
//                 <div className="flex flex-col items-center">
//                   {/* Profile Picture (Optional) */}
//                   <img
//                     src={user?.profilePicture || '/default-avatar.png'} // Default avatar if no picture exists
//                     alt={user?.username}
//                     className="w-28 h-28 rounded-full border-4 border-purple-500 mb-4"
//                   />
//                   {/* User Info */}
//                   <h2 className="text-2xl font-semibold text-purple-300">{user?.username}</h2>
//                   <p className="text-gray-400">{user?.email}</p>
//                   <p className="text-gray-500">Reputation: {user?.reputation ?? 0}</p>
//                   <p className="text-gray-500">
//                     Joined: {user?.dateJoined ? new Date(user?.dateJoined).toLocaleDateString() : 'N/A'}
//                   </p>

//                   {/* Buttons */}
//                   <div className="mt-6 flex justify-between w-full">
//                     <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
//                       View Profile
//                     </button>
//                     <button className="bg-gray-800 text-white py-2 px-6 rounded-lg border border-purple-500 hover:border-purple-500 hover:bg-gray-700 transition-all duration-300">
//                       Send Message
//                     </button>
//                   </div>

//                   {/* Tags */}
//                   <div className="mt-4 flex flex-wrap gap-2 justify-center">
//                     <span className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-sm">
//                       {user?.reputation > 500 ? 'High Reputation' : 'New User'}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;
import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/auth/users'); // Adjust endpoint if needed
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div>
    <Navbar></Navbar>
    <div className="bg-gray-900 text-white min-h-screen py-12">

      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-semibold text-center mb-8">All Users</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {users.length === 0 ? (
            <div className="col-span-full text-center text-gray-400">No users found.</div>
          ) : (
            users.map((user) => (
              <div
                key={user?._id}
                className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  {/* Profile Picture (Optional) */}
                  <img
                    src={user?.profilePicture || '/default-avatar.png'} // Default avatar if no picture exists
                    alt={user?.username}
                    className="w-24 h-24 rounded-full border-2 border-gray-500 mb-4"
                  />
                  {/* User Info */}
                  <h2 className="text-xl font-semibold">{user?.username}</h2>
                  <p className="text-gray-400">{user?.email}</p>
                  <p className="text-gray-500">Reputation: {user?.reputation ?? 0}</p>
                  <p className="text-gray-500">
                    Joined: {user?.dateJoined ? new Date(user?.dateJoined).toLocaleDateString() : 'N/A'}
                  </p>

                  {/* Buttons */}
                  <div className="mt-4 flex justify-center gap-4">
                    <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200">
                      View Profile
                    </button>
                    <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserList;
