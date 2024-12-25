// // // import React, { useEffect, useState } from 'react';

// // // const UserList = () => {
// // //   const [users, setUsers] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   // Fetch users from API
// // //   useEffect(() => {
// // //     const fetchUsers = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:8000/api/auth/users'); // Adjust endpoint if needed
// // //         const data = await response.json();
// // //         setUsers(data);
// // //       } catch (error) {
// // //         setError('Failed to fetch users');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchUsers();
// // //   }, []);

// // //   if (loading) return <div className="text-white text-center">Loading...</div>;
// // //   if (error) return <div className="text-red-500 text-center">{error}</div>;

// // //   return (
// // //     <div className="bg-gradient-to-r from-purple-400 to-pink-600 text-white min-h-screen">
// // //       <div className="container mx-auto py-12 px-6">
// // //         <h1 className="text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-8">
// // //           All Users
// // //         </h1>

// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // //           {users.length === 0 ? (
// // //             <div className="col-span-full text-center text-gray-400">No users found.</div>
// // //           ) : (
// // //             users.map((user) => (
// // //               <div
// // //                 key={user?._id}
// // //                 className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-purple-500 backdrop-blur-lg transition duration-300 transform hover:scale-105"
// // //               >
// // //                 <div className="flex flex-col items-center">
// // //                   {/* Profile Picture (Optional) */}
// // //                   <img
// // //                     src={user?.profilePicture || '/default-avatar.png'} // Default avatar if no picture exists
// // //                     alt={user?.username}
// // //                     className="w-24 h-24 rounded-full border-4 border-purple-500 mb-4"
// // //                   />
// // //                   {/* User Info */}
// // //                   <h2 className="text-xl font-semibold">{user?.username}</h2>
// // //                   <p className="text-gray-300">{user?.email}</p>
// // //                   <p className="text-gray-400">Reputation: {user?.reputation ?? 0}</p>
// // //                   <p className="text-secondary text-gray-400">
// // //                     Joined: {user?.dateJoined ? new Date(user?.dateJoined).toLocaleDateString() : 'N/A'}
// // //                   </p>

// // //                   {/* Buttons */}
// // //                   <div className="mt-4 flex justify-between w-full">
// // //                     <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition-all duration-300">
// // //                       View Profile
// // //                     </button>
// // //                     <button className="bg-gray-800 text-white py-2 px-4 rounded border border-purple-500 hover:border-purple-500 hover:bg-gray-700 transition-all duration-300">
// // //                       Send Message
// // //                     </button>
// // //                   </div>

// // //                   {/* Tags */}
// // //                   <div className="mt-4 flex flex-wrap gap-2 justify-center">
// // //                     <span className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-sm">
// // //                       {user?.reputation > 500 ? 'High Reputation' : 'New User'}
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UserList;
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
// //     <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen">
// //       <div className="container mx-auto py-12 px-6">
// //         <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
// //           All Users
// //         </h1>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
// //           {users.length === 0 ? (
// //             <div className="col-span-full text-center text-gray-400">No users found.</div>
// //           ) : (
// //             users.map((user) => (
// //               <div
// //                 key={user?._id}
// //                 className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
// //               >
// //                 <div className="flex flex-col items-center">
// //                   {/* Profile Picture (Optional) */}
// //                   <img
// //                     src={user?.profilePicture || '/default-avatar.png'} // Default avatar if no picture exists
// //                     alt={user?.username}
// //                     className="w-28 h-28 rounded-full border-4 border-purple-500 mb-4"
// //                   />
// //                   {/* User Info */}
// //                   <h2 className="text-2xl font-semibold text-purple-300">{user?.username}</h2>
// //                   <p className="text-gray-400">{user?.email}</p>
// //                   <p className="text-gray-500">Reputation: {user?.reputation ?? 0}</p>
// //                   <p className="text-gray-500">
// //                     Joined: {user?.dateJoined ? new Date(user?.dateJoined).toLocaleDateString() : 'N/A'}
// //                   </p>

// //                   {/* Buttons */}
// //                   <div className="mt-6 flex justify-between w-full">
// //                     <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
// //                       View Profile
// //                     </button>
// //                     <button className="bg-gray-800 text-white py-2 px-6 rounded-lg border border-purple-500 hover:border-purple-500 hover:bg-gray-700 transition-all duration-300">
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
// import Navbar from './shared/Navbar';

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
//     <div>
//     <Navbar></Navbar>
//     <div className="bg-gray-900 text-white min-h-screen py-12">

//       <div className="container mx-auto px-6">
//         <h1 className="text-3xl font-semibold text-center mb-8">All Users</h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {users.length === 0 ? (
//             <div className="col-span-full text-center text-gray-400">No users found.</div>
//           ) : (
//             users.map((user) => (
//               <div
//                 key={user?._id}
//                 className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-gray-600 transition-all duration-300"
//               >
//                 <div className="flex flex-col items-center">
//                   {/* Profile Picture (Optional) */}
//                   <img
//                     src={user?.profilePicture || '/default-avatar.png'} // Default avatar if no picture exists
//                     alt={user?.username}
//                     className="w-24 h-24 rounded-full border-2 border-gray-500 mb-4"
//                   />
//                   {/* User Info */}
//                   <h2 className="text-xl font-semibold">{user?.username}</h2>
//                   <p className="text-gray-400">{user?.email}</p>
//                   <p className="text-gray-500">Reputation: {user?.reputation ?? 0}</p>
//                   <p className="text-gray-500">
//                     Joined: {user?.dateJoined ? new Date(user?.dateJoined).toLocaleDateString() : 'N/A'}
//                   </p>

//                   {/* Buttons */}
//                   <div className="mt-4 flex justify-center gap-4">
//                     <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200">
//                       View Profile
//                     </button>
//                     <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200">
//                       Send Message
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default UserList;
// import React, { useEffect, useState } from 'react';
// import Navbar from './shared/Navbar';
// import Cookies from 'js-cookie'; // To read cookies

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [profileLoading, setProfileLoading] = useState(false);

//   // Fetch all users
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/api/auth/users');
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

//   // Fetch a specific user's profile
//   const fetchUserProfile = async (userId) => {
//     const token = Cookies.get('token'); // Retrieve token from cookies
//     if (!token) {
//       setError('Authentication token is missing.');
//       return;
//     }

//     setProfileLoading(true);
//     try {
//       const response = await fetch(`http://localhost:8000/api/auth/users/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch user profile');
//       }

//       const data = await response.json();
//       setSelectedUser(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setProfileLoading(false);
//     }
//   };

//   if (loading) return <div className="text-white">Loading...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="bg-gray-900 min-h-screen text-white">
//       <Navbar />
//       <div className="container mx-auto py-6">
//         <h1 className="text-3xl font-bold mb-4">All Users</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {users.map((user) => (
//             <div
//               key={user._id}
//               className="bg-gray-800 p-4 rounded shadow-lg flex flex-col justify-between"
//             >
//               <div>
//                 <h2 className="text-xl font-semibold">{user.username}</h2>
//                 <p className="text-gray-400">{user.email}</p>
//                 {/* <p>Reputation: {user.reputation ?? 0}</p> */}
//               </div>
//               <button
//                 className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
//                 onClick={() => fetchUserProfile(user._id)}
//               >
//                 View Profile
//               </button>
//             </div>
//           ))}
//         </div>
//         {selectedUser && (
//           <div className="bg-gray-800 mt-6 p-6 rounded shadow-lg">
//             <h2 className="text-2xl font-bold">{selectedUser.user.username}</h2>
//             <p>Email: {selectedUser.user.email}</p>
//             <p>Reputation: {selectedUser.user.reputation}</p>
//             <p>
//               Joined: {selectedUser.user.dateJoined ? new Date(selectedUser.user.dateJoined).toLocaleDateString() : 'N/A'}
//             </p>
//             <div>
//               <h3 className="text-xl font-semibold mt-4">Questions</h3>
//               {selectedUser.questions.length === 0 ? (
//                 <p>No questions found.</p>
//               ) : (
//                 <ul className="list-disc ml-6">
//                   {selectedUser.questions.map((question) => (
//                     <li key={question._id}>{question?.title}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mt-4">Answers</h3>
//               {selectedUser.answers.length === 0 ? (
//                 <p>No answers found.</p>
//               ) : (
//                 <ul className="list-disc ml-6">
//                   {selectedUser.answers.map((answer) => (
//                     <li key={answer._id}>
//                       {answer.question?.title} - {answer.body}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         )}
//         {profileLoading && <div className="text-blue-500 mt-4">Loading profile...</div>}
//       </div>
//     </div>
//   );
// };

// export default UserList;
import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import Cookies from 'js-cookie';
import { Popover, Transition } from '@headlessui/react'; // For the profile popover
import { Fragment } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [profileLoading, setProfileLoading] = useState(false);
  const [filters, setFilters] = useState({ reputation: '', email: '' });

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/auth/users');
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on the selected filters
  const applyFilters = () => {
    let result = users;
    if (filters.reputation) {
      result = result.filter(user => user.reputation >= filters.reputation);
    }
    if (filters.email) {
      result = result.filter(user => user.email.includes(filters.email));
    }
    setFilteredUsers(result);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  // Fetch a specific user's profile
  const fetchUserProfile = async (userId) => {
    const token = Cookies.get('token');
    if (!token) {
      setError('Authentication token is missing.');
      return;
    }

    setProfileLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/api/auth/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }

      const data = await response.json();
      setSelectedUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setProfileLoading(false);
    }
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto py-6 flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <div className="mb-4">
            <label className="block text-gray-400">Reputation:</label>
            <input
              type="number"
              className="w-full bg-gray-700 p-2 rounded"
              placeholder="Min reputation"
              value={filters.reputation}
              onChange={(e) => setFilters({ ...filters, reputation: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Email:</label>
            <input
              type="text"
              className="w-full bg-gray-700 p-2 rounded"
              placeholder="Search by email"
              value={filters.email}
              onChange={(e) => setFilters({ ...filters, email: e.target.value })}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 px-4">
          <h1 className="text-3xl font-bold mb-4">All Users</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <Popover key={user._id} className="relative">
                <div className="bg-gray-800 p-4 rounded shadow-lg flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{user.username}</h2>
                    <p className="text-gray-400">{user.email}</p>
                  </div>
                  <Popover.Button
                    className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
                    onClick={() => fetchUserProfile(user._id)}
                  >
                    View Profile
                  </Popover.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 mt-3 w-64 p-4 bg-gray-800 rounded-lg shadow-lg">
                    {profileLoading ? (
                      <div className="text-blue-500">Loading profile...</div>
                    ) : selectedUser ? (
                      <div>
                        <h2 className="text-xl font-bold">{selectedUser.user.username}</h2>
                        <p>Email: {selectedUser.user.email}</p>
                        <p>Reputation: {selectedUser.user.reputation}</p>
                        <p>
                          Joined:{' '}
                          {selectedUser.user.dateJoined
                            ? new Date(selectedUser.user.dateJoined).toLocaleDateString()
                            : 'N/A'}
                        </p>
                      </div>
                    ) : (
                      <div className="text-red-500">No profile data available.</div>
                    )}
                  </Popover.Panel>
                </Transition>
              </Popover>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
