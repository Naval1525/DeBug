// // // // // // import React, { useEffect, useState } from 'react';

// // // // // // const UserList = () => {
// // // // // //   const [users, setUsers] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [error, setError] = useState(null);

// // // // // //   // Fetch users from API
// // // // // //   useEffect(() => {
// // // // // //     const fetchUsers = async () => {
// // // // // //       try {
// // // // // //         const response = await fetch('http://localhost:8000/api/auth/users'); // Adjust endpoint if needed
// // // // // //         const data = await response.json();
// // // // // //         setUsers(data);
// // // // // //       } catch (error) {
// // // // // //         setError('Failed to fetch users');
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchUsers();
// // // // // //   }, []);

// // // // // //   if (loading) return <div className="text-white text-center">Loading...</div>;
// // // // // //   if (error) return <div className="text-red-500 text-center">{error}</div>;

// // // // // //   return (
// // // // // //     <div className="bg-gradient-to-r from-purple-400 to-pink-600 text-white min-h-screen">
// // // // // //       <div className="container mx-auto py-12 px-6">
// // // // // //         <h1 className="text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-8">
// // // // // //           All Users
// // // // // //         </h1>

// // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // // // //           {users.length === 0 ? (
// // // // // //             <div className="col-span-full text-center text-gray-400">No users found.</div>
// // // // // //           ) : (
// // // // // //             users.map((user) => (
// // // // // //               <div
// // // // // //                 key={user?._id}
// // // // // //                 className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-purple-500 backdrop-blur-lg transition duration-300 transform hover:scale-105"
// // // // // //               >
// // // // // //                 <div className="flex flex-col items-center">
// // // // // //                   {/* Profile Picture (Optional) */}
// // // // // //                   <img
// // // // // //                     src={user?.profilePicture || '/default-avatar.png'} // Default avatar if no picture exists
// // // // // //                     alt={user?.username}
// // // // // //                     className="w-24 h-24 rounded-full border-4 border-purple-500 mb-4"
// // // // // //                   />
// // // // // //                   {/* User Info */}
// // // // // //                   <h2 className="text-xl font-semibold">{user?.username}</h2>
// // // // // //                   <p className="text-gray-300">{user?.email}</p>
// // // // // //                   <p className="text-gray-400">Reputation: {user?.reputation ?? 0}</p>
// // // // // //                   <p className="text-secondary text-gray-400">
// // // // // //                     Joined: {user?.dateJoined ? new Date(user?.dateJoined).toLocaleDateString() : 'N/A'}
// // // // // //                   </p>

// // // // // //                   {/* Buttons */}
// // // // // //                   <div className="mt-4 flex justify-between w-full">
// // // // // //                     <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition-all duration-300">
// // // // // //                       View Profile
// // // // // //                     </button>
// // // // // //                     <button className="bg-gray-800 text-white py-2 px-4 rounded border border-purple-500 hover:border-purple-500 hover:bg-gray-700 transition-all duration-300">
// // // // // //                       Send Message
// // // // // //                     </button>
// // // // // //                   </div>

// // // // // //                   {/* Tags */}
// // // // // //                   <div className="mt-4 flex flex-wrap gap-2 justify-center">
// // // // // //                     <span className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-sm">
// // // // // //                       {user?.reputation > 500 ? 'High Reputation' : 'New User'}
// // // // // //                     </span>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             ))
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default UserList;
// // // // // import React, { useEffect, useState } from 'react';

// // // // // const UserList = () => {
// // // // //   const [users, setUsers] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   // Fetch users from API
// // // // //   useEffect(() => {
// // // // //     const fetchUsers = async () => {
// // // // //       try {
// // // // //         const response = await fetch('http://localhost:8000/api/auth/users'); // Adjust endpoint if needed
// // // // //         const data = await response.json();
// // // // //         setUsers(data);
// // // // //       } catch (error) {
// // // // //         setError('Failed to fetch users');
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchUsers();
// // // // //   }, []);

// // // // //   if (loading) return <div className="text-white text-center">Loading...</div>;
// // // // //   if (error) return <div className="text-red-500 text-center">{error}</div>;

// // // // //   return (
// // // // //     <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen">
// // // // //       <div className="container mx-auto py-12 px-6">
// // // // //         <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
// // // // //           All Users
// // // // //         </h1>

// // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
// // // // //           {users.length === 0 ? (
// // // // //             <div className="col-span-full text-center text-gray-400">No users found.</div>
// // // // //           ) : (
// // // // //             users.map((user) => (
// // // // //               <div
// // // // //                 key={user?._id}
// // // // //                 className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
// // // // //               >
// // // // //                 <div className="flex flex-col items-center">
// // // // //                   {/* Profile Picture (Optional) */}
// // // // //                   <img
// // // // //                     src={user?.profilePicture || '/default-avatar.png'} // Default avatar if no picture exists
// // // // //                     alt={user?.username}
// // // // //                     className="w-28 h-28 rounded-full border-4 border-purple-500 mb-4"
// // // // //                   />
// // // // //                   {/* User Info */}
// // // // //                   <h2 className="text-2xl font-semibold text-purple-300">{user?.username}</h2>
// // // // //                   <p className="text-gray-400">{user?.email}</p>
// // // // //                   <p className="text-gray-500">Reputation: {user?.reputation ?? 0}</p>
// // // // //                   <p className="text-gray-500">
// // // // //                     Joined: {user?.dateJoined ? new Date(user?.dateJoined).toLocaleDateString() : 'N/A'}
// // // // //                   </p>

// // // // //                   {/* Buttons */}
// // // // //                   <div className="mt-6 flex justify-between w-full">
// // // // //                     <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
// // // // //                       View Profile
// // // // //                     </button>
// // // // //                     <button className="bg-gray-800 text-white py-2 px-6 rounded-lg border border-purple-500 hover:border-purple-500 hover:bg-gray-700 transition-all duration-300">
// // // // //                       Send Message
// // // // //                     </button>
// // // // //                   </div>

// // // // //                   {/* Tags */}
// // // // //                   <div className="mt-4 flex flex-wrap gap-2 justify-center">
// // // // //                     <span className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-sm">
// // // // //                       {user?.reputation > 500 ? 'High Reputation' : 'New User'}
// // // // //                     </span>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default UserList;
// // // // import React, { useEffect, useState } from 'react';
// // // // import Navbar from './shared/Navbar';

// // // // const UserList = () => {
// // // //   const [users, setUsers] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   // Fetch users from API
// // // //   useEffect(() => {
// // // //     const fetchUsers = async () => {
// // // //       try {
// // // //         const response = await fetch('http://localhost:8000/api/auth/users'); // Adjust endpoint if needed
// // // //         const data = await response.json();
// // // //         setUsers(data);
// // // //       } catch (error) {
// // // //         setError('Failed to fetch users');
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchUsers();
// // // //   }, []);

// // // //   if (loading) return <div className="text-white text-center">Loading...</div>;
// // // //   if (error) return <div className="text-red-500 text-center">{error}</div>;

// // // //   return (
// // // //     <div>
// // // //     <Navbar></Navbar>
// // // //     <div className="bg-gray-900 text-white min-h-screen py-12">

// // // //       <div className="container mx-auto px-6">
// // // //         <h1 className="text-3xl font-semibold text-center mb-8">All Users</h1>

// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // //           {users.length === 0 ? (
// // // //             <div className="col-span-full text-center text-gray-400">No users found.</div>
// // // //           ) : (
// // // //             users.map((user) => (
// // // //               <div
// // // //                 key={user?._id}
// // // //                 className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-gray-600 transition-all duration-300"
// // // //               >
// // // //                 <div className="flex flex-col items-center">
// // // //                   {/* Profile Picture (Optional) */}
// // // //                   <img
// // // //                     src={user?.profilePicture || '/default-avatar.png'} // Default avatar if no picture exists
// // // //                     alt={user?.username}
// // // //                     className="w-24 h-24 rounded-full border-2 border-gray-500 mb-4"
// // // //                   />
// // // //                   {/* User Info */}
// // // //                   <h2 className="text-xl font-semibold">{user?.username}</h2>
// // // //                   <p className="text-gray-400">{user?.email}</p>
// // // //                   <p className="text-gray-500">Reputation: {user?.reputation ?? 0}</p>
// // // //                   <p className="text-gray-500">
// // // //                     Joined: {user?.dateJoined ? new Date(user?.dateJoined).toLocaleDateString() : 'N/A'}
// // // //                   </p>

// // // //                   {/* Buttons */}
// // // //                   <div className="mt-4 flex justify-center gap-4">
// // // //                     <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200">
// // // //                       View Profile
// // // //                     </button>
// // // //                     <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200">
// // // //                       Send Message
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UserList;
// // // // import React, { useEffect, useState } from 'react';
// // // // import Navbar from './shared/Navbar';
// // // // import Cookies from 'js-cookie'; // To read cookies

// // // // const UserList = () => {
// // // //   const [users, setUsers] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [selectedUser, setSelectedUser] = useState(null);
// // // //   const [profileLoading, setProfileLoading] = useState(false);

// // // //   // Fetch all users
// // // //   useEffect(() => {
// // // //     const fetchUsers = async () => {
// // // //       try {
// // // //         const response = await fetch('http://localhost:8000/api/auth/users');
// // // //         const data = await response.json();
// // // //         setUsers(data);
// // // //       } catch (error) {
// // // //         setError('Failed to fetch users');
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchUsers();
// // // //   }, []);

// // // //   // Fetch a specific user's profile
// // // //   const fetchUserProfile = async (userId) => {
// // // //     const token = Cookies.get('token'); // Retrieve token from cookies
// // // //     if (!token) {
// // // //       setError('Authentication token is missing.');
// // // //       return;
// // // //     }

// // // //     setProfileLoading(true);
// // // //     try {
// // // //       const response = await fetch(`http://localhost:8000/api/auth/users/${userId}`, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       });

// // // //       if (!response.ok) {
// // // //         throw new Error('Failed to fetch user profile');
// // // //       }

// // // //       const data = await response.json();
// // // //       setSelectedUser(data);
// // // //     } catch (error) {
// // // //       setError(error.message);
// // // //     } finally {
// // // //       setProfileLoading(false);
// // // //     }
// // // //   };

// // // //   if (loading) return <div className="text-white">Loading...</div>;
// // // //   if (error) return <div className="text-red-500">{error}</div>;

// // // //   return (
// // // //     <div className="bg-gray-900 min-h-screen text-white">
// // // //       <Navbar />
// // // //       <div className="container mx-auto py-6">
// // // //         <h1 className="text-3xl font-bold mb-4">All Users</h1>
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {users.map((user) => (
// // // //             <div
// // // //               key={user._id}
// // // //               className="bg-gray-800 p-4 rounded shadow-lg flex flex-col justify-between"
// // // //             >
// // // //               <div>
// // // //                 <h2 className="text-xl font-semibold">{user.username}</h2>
// // // //                 <p className="text-gray-400">{user.email}</p>
// // // //                 {/* <p>Reputation: {user.reputation ?? 0}</p> */}
// // // //               </div>
// // // //               <button
// // // //                 className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
// // // //                 onClick={() => fetchUserProfile(user._id)}
// // // //               >
// // // //                 View Profile
// // // //               </button>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //         {selectedUser && (
// // // //           <div className="bg-gray-800 mt-6 p-6 rounded shadow-lg">
// // // //             <h2 className="text-2xl font-bold">{selectedUser.user.username}</h2>
// // // //             <p>Email: {selectedUser.user.email}</p>
// // // //             <p>Reputation: {selectedUser.user.reputation}</p>
// // // //             <p>
// // // //               Joined: {selectedUser.user.dateJoined ? new Date(selectedUser.user.dateJoined).toLocaleDateString() : 'N/A'}
// // // //             </p>
// // // //             <div>
// // // //               <h3 className="text-xl font-semibold mt-4">Questions</h3>
// // // //               {selectedUser.questions.length === 0 ? (
// // // //                 <p>No questions found.</p>
// // // //               ) : (
// // // //                 <ul className="list-disc ml-6">
// // // //                   {selectedUser.questions.map((question) => (
// // // //                     <li key={question._id}>{question?.title}</li>
// // // //                   ))}
// // // //                 </ul>
// // // //               )}
// // // //             </div>
// // // //             <div>
// // // //               <h3 className="text-xl font-semibold mt-4">Answers</h3>
// // // //               {selectedUser.answers.length === 0 ? (
// // // //                 <p>No answers found.</p>
// // // //               ) : (
// // // //                 <ul className="list-disc ml-6">
// // // //                   {selectedUser.answers.map((answer) => (
// // // //                     <li key={answer._id}>
// // // //                       {answer.question?.title} - {answer.body}
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //         {profileLoading && <div className="text-blue-500 mt-4">Loading profile...</div>}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UserList;
// // // import React, { useEffect, useState } from 'react';
// // // import Navbar from './shared/Navbar';
// // // import Cookies from 'js-cookie';
// // // import { Popover, Transition } from '@headlessui/react'; // For the profile popover
// // // import { Fragment } from 'react';

// // // const UserList = () => {
// // //   const [users, setUsers] = useState([]);
// // //   const [filteredUsers, setFilteredUsers] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [selectedUser, setSelectedUser] = useState(null);
// // //   const [profileLoading, setProfileLoading] = useState(false);
// // //   const [filters, setFilters] = useState({ reputation: '', email: '' });

// // //   // Fetch all users
// // //   useEffect(() => {
// // //     const fetchUsers = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:8000/api/auth/users');
// // //         const data = await response.json();
// // //         setUsers(data);
// // //         setFilteredUsers(data);
// // //       } catch (error) {
// // //         setError('Failed to fetch users');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchUsers();
// // //   }, []);

// // //   // Filter users based on the selected filters
// // //   const applyFilters = () => {
// // //     let result = users;
// // //     if (filters.reputation) {
// // //       result = result.filter(user => user.reputation >= filters.reputation);
// // //     }
// // //     if (filters.email) {
// // //       result = result.filter(user => user.email.includes(filters.email));
// // //     }
// // //     setFilteredUsers(result);
// // //   };

// // //   useEffect(() => {
// // //     applyFilters();
// // //   }, [filters]);

// // //   // Fetch a specific user's profile
// // //   const fetchUserProfile = async (userId) => {
// // //     const token = Cookies.get('token');
// // //     if (!token) {
// // //       setError('Authentication token is missing.');
// // //       return;
// // //     }

// // //     setProfileLoading(true);
// // //     try {
// // //       const response = await fetch(`http://localhost:8000/api/auth/users/${userId}`, {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       });

// // //       if (!response.ok) {
// // //         throw new Error('Failed to fetch user profile');
// // //       }

// // //       const data = await response.json();
// // //       setSelectedUser(data);
// // //     } catch (error) {
// // //       setError(error.message);
// // //     } finally {
// // //       setProfileLoading(false);
// // //     }
// // //   };

// // //   if (loading) return <div className="text-white">Loading...</div>;
// // //   if (error) return <div className="text-red-500">{error}</div>;

// // //   return (
// // //     <div className="bg-gray-900 min-h-screen text-white">
// // //       <Navbar />
// // //       <div className="container mx-auto py-6 flex">
// // //         {/* Sidebar */}
// // //         <div className="w-1/4 bg-gray-800 p-4 rounded-lg">
// // //           <h2 className="text-xl font-bold mb-4">Filters</h2>
// // //           <div className="mb-4">
// // //             <label className="block text-gray-400">Reputation:</label>
// // //             <input
// // //               type="number"
// // //               className="w-full bg-gray-700 p-2 rounded"
// // //               placeholder="Min reputation"
// // //               value={filters.reputation}
// // //               onChange={(e) => setFilters({ ...filters, reputation: e.target.value })}
// // //             />
// // //           </div>
// // //           <div className="mb-4">
// // //             <label className="block text-gray-400">Email:</label>
// // //             <input
// // //               type="text"
// // //               className="w-full bg-gray-700 p-2 rounded"
// // //               placeholder="Search by email"
// // //               value={filters.email}
// // //               onChange={(e) => setFilters({ ...filters, email: e.target.value })}
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Main Content */}
// // //         <div className="w-3/4 px-4">
// // //           <h1 className="text-3xl font-bold mb-4">All Users</h1>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {filteredUsers.map((user) => (
// // //               <Popover key={user._id} className="relative">
// // //                 <div className="bg-gray-800 p-4 rounded shadow-lg flex flex-col justify-between">
// // //                   <div>
// // //                     <h2 className="text-xl font-semibold">{user.username}</h2>
// // //                     <p className="text-gray-400">{user.email}</p>
// // //                   </div>
// // //                   <Popover.Button
// // //                     className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
// // //                     onClick={() => fetchUserProfile(user._id)}
// // //                   >
// // //                     View Profile
// // //                   </Popover.Button>
// // //                 </div>
// // //                 <Transition
// // //                   as={Fragment}
// // //                   enter="transition ease-out duration-200"
// // //                   enterFrom="opacity-0 translate-y-1"
// // //                   enterTo="opacity-100 translate-y-0"
// // //                   leave="transition ease-in duration-150"
// // //                   leaveFrom="opacity-100 translate-y-0"
// // //                   leaveTo="opacity-0 translate-y-1"
// // //                 >
// // //                   <Popover.Panel className="absolute z-10 mt-3 w-64 p-4 bg-gray-800 rounded-lg shadow-lg">
// // //                     {profileLoading ? (
// // //                       <div className="text-blue-500">Loading profile...</div>
// // //                     ) : selectedUser ? (
// // //                       <div>
// // //                         <h2 className="text-xl font-bold">{selectedUser.user.username}</h2>
// // //                         <p>Email: {selectedUser.user.email}</p>
// // //                         <p>Reputation: {selectedUser.user.reputation}</p>
// // //                         <p>
// // //                           Joined:{' '}
// // //                           {selectedUser.user.dateJoined
// // //                             ? new Date(selectedUser.user.dateJoined).toLocaleDateString()
// // //                             : 'N/A'}
// // //                         </p>
// // //                       </div>
// // //                     ) : (
// // //                       <div className="text-red-500">No profile data available.</div>
// // //                     )}
// // //                   </Popover.Panel>
// // //                 </Transition>
// // //               </Popover>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UserList;


// // import React, { useEffect, useState } from 'react';
// // import { Fragment } from 'react';
// // import { Popover, Transition } from '@headlessui/react';
// // import { Search, SlidersHorizontal, X } from 'lucide-react';
// // import Cookies from 'js-cookie';
// // import Navbar from './shared/Navbar';
// // import {
// //   Card,
// //   CardContent,
// //   CardHeader,
// //   CardTitle
// // } from '@/components/ui/card';
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";

// // const UserList = () => {
// //   const [users, setUsers] = useState([]);
// //   const [filteredUsers, setFilteredUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [profileLoading, setProfileLoading] = useState(false);
// //   const [showFilters, setShowFilters] = useState(false);

// //   const [filters, setFilters] = useState({
// //     reputation: '',
// //     email: '',
// //     joinedAfter: '',
// //     joinedBefore: '',
// //     sortBy: 'username',
// //     sortOrder: 'asc',
// //     minPosts: '',
// //     maxPosts: '',
// //     status: 'all'
// //   });

// //   const [searchQuery, setSearchQuery] = useState('');

// //   const sortOptions = [
// //     { value: 'username', label: 'Username' },
// //     { value: 'reputation', label: 'Reputation' },
// //     { value: 'dateJoined', label: 'Join Date' },
// //     { value: 'posts', label: 'Post Count' }
// //   ];

// //   const statusOptions = [
// //     { value: 'all', label: 'All Users' },
// //     { value: 'active', label: 'Active' },
// //     { value: 'inactive', label: 'Inactive' },
// //     { value: 'banned', label: 'Banned' }
// //   ];

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await fetch('http://localhost:8000/api/auth/users');
// //         const data = await response.json();
// //         setUsers(data);
// //         setFilteredUsers(data);
// //       } catch (error) {
// //         setError('Failed to fetch users');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

// //   const applyFilters = () => {
// //     let result = [...users];

// //     // Search query filter
// //     if (searchQuery) {
// //       const query = searchQuery.toLowerCase();
// //       result = result.filter(user =>
// //         user.username.toLowerCase().includes(query) ||
// //         user.email.toLowerCase().includes(query)
// //       );
// //     }

// //     // Reputation filter
// //     if (filters.reputation) {
// //       result = result.filter(user => user.reputation >= parseInt(filters.reputation));
// //     }

// //     // Email filter
// //     if (filters.email) {
// //       result = result.filter(user => user.email.toLowerCase().includes(filters.email.toLowerCase()));
// //     }

// //     // Date joined filters
// //     if (filters.joinedAfter) {
// //       result = result.filter(user => new Date(user.dateJoined) >= new Date(filters.joinedAfter));
// //     }
// //     if (filters.joinedBefore) {
// //       result = result.filter(user => new Date(user.dateJoined) <= new Date(filters.joinedBefore));
// //     }

// //     // Posts count filters
// //     if (filters.minPosts) {
// //       result = result.filter(user => user.posts >= parseInt(filters.minPosts));
// //     }
// //     if (filters.maxPosts) {
// //       result = result.filter(user => user.posts <= parseInt(filters.maxPosts));
// //     }

// //     // Status filter
// //     if (filters.status !== 'all') {
// //       result = result.filter(user => user.status === filters.status);
// //     }

// //     // Sorting
// //     result.sort((a, b) => {
// //       const aValue = a[filters.sortBy];
// //       const bValue = b[filters.sortBy];

// //       if (typeof aValue === 'string') {
// //         return filters.sortOrder === 'asc'
// //           ? aValue.localeCompare(bValue)
// //           : bValue.localeCompare(aValue);
// //       }

// //       return filters.sortOrder === 'asc'
// //         ? aValue - bValue
// //         : bValue - aValue;
// //     });

// //     setFilteredUsers(result);
// //   };

// //   useEffect(() => {
// //     applyFilters();
// //   }, [filters, searchQuery]);

// //   const fetchUserProfile = async (userId) => {
// //     const token = Cookies.get('token');
// //     if (!token) {
// //       setError('Authentication token is missing.');
// //       return;
// //     }

// //     setProfileLoading(true);
// //     try {
// //       const response = await fetch(`http://localhost:8000/api/auth/users/${userId}`, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });

// //       if (!response.ok) throw new Error('Failed to fetch user profile');
// //       const data = await response.json();
// //       setSelectedUser(data);
// //     } catch (error) {
// //       setError(error.message);
// //     } finally {
// //       setProfileLoading(false);
// //     }
// //   };

// //   const resetFilters = () => {
// //     setFilters({
// //       reputation: '',
// //       email: '',
// //       joinedAfter: '',
// //       joinedBefore: '',
// //       sortBy: 'username',
// //       sortOrder: 'asc',
// //       minPosts: '',
// //       maxPosts: '',
// //       status: 'all'
// //     });
// //     setSearchQuery('');
// //   };

// //   if (loading) return <div className="text-white">Loading...</div>;
// //   if (error) return <div className="text-red-500">{error}</div>;

// //   return (
// //     <div className="bg-gray-900 min-h-screen text-white">
// //       <Navbar />
// //       <div className="container mx-auto py-6">
// //         {/* Search and Filter Header */}
// //         <div className="mb-6">
// //           <div className="flex items-center justify-between mb-4">
// //             <h1 className="text-3xl font-bold">All Users</h1>
// //             <button
// //               onClick={() => setShowFilters(!showFilters)}
// //               className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
// //             >
// //               <SlidersHorizontal size={20} />
// //               {showFilters ? 'Hide Filters' : 'Show Filters'}
// //             </button>
// //           </div>

// //           <div className="relative">
// //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
// //             <input
// //               type="text"
// //               placeholder="Search users by username or email..."
// //               className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //             />
// //           </div>
// //         </div>

// //         {/* Advanced Filters */}
// //         {showFilters && (
// //           <Card className="mb-6 bg-gray-800 border-gray-700">
// //             <CardHeader>
// //               <div className="flex justify-between items-center">
// //                 <CardTitle>Advanced Filters</CardTitle>
// //                 <button
// //                   onClick={resetFilters}
// //                   className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
// //                 >
// //                   <X size={16} />
// //                   Reset Filters
// //                 </button>
// //               </div>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                 <div>
// //                   <label className="block text-sm font-medium mb-1">Minimum Reputation</label>
// //                   <input
// //                     type="number"
// //                     className="w-full bg-gray-700 p-2 rounded"
// //                     value={filters.reputation}
// //                     onChange={(e) => setFilters({ ...filters, reputation: e.target.value })}
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium mb-1">Email Contains</label>
// //                   <input
// //                     type="text"
// //                     className="w-full bg-gray-700 p-2 rounded"
// //                     value={filters.email}
// //                     onChange={(e) => setFilters({ ...filters, email: e.target.value })}
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium mb-1">Joined After</label>
// //                   <input
// //                     type="date"
// //                     className="w-full bg-gray-700 p-2 rounded"
// //                     value={filters.joinedAfter}
// //                     onChange={(e) => setFilters({ ...filters, joinedAfter: e.target.value })}
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium mb-1">Joined Before</label>
// //                   <input
// //                     type="date"
// //                     className="w-full bg-gray-700 p-2 rounded"
// //                     value={filters.joinedBefore}
// //                     onChange={(e) => setFilters({ ...filters, joinedBefore: e.target.value })}
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium mb-1">Posts Range</label>
// //                   <div className="flex gap-2">
// //                     <input
// //                       type="number"
// //                       placeholder="Min"
// //                       className="w-1/2 bg-gray-700 p-2 rounded"
// //                       value={filters.minPosts}
// //                       onChange={(e) => setFilters({ ...filters, minPosts: e.target.value })}
// //                     />
// //                     <input
// //                       type="number"
// //                       placeholder="Max"
// //                       className="w-1/2 bg-gray-700 p-2 rounded"
// //                       value={filters.maxPosts}
// //                       onChange={(e) => setFilters({ ...filters, maxPosts: e.target.value })}
// //                     />
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium mb-1">Status</label>
// //                   <Select
// //                     value={filters.status}
// //                     onValueChange={(value) => setFilters({ ...filters, status: value })}
// //                   >
// //                     <SelectTrigger className="w-full bg-gray-700">
// //                       <SelectValue placeholder="Select status" />
// //                     </SelectTrigger>
// //                     <SelectContent>
// //                       {statusOptions.map((option) => (
// //                         <SelectItem key={option.value} value={option.value}>
// //                           {option.label}
// //                         </SelectItem>
// //                       ))}
// //                     </SelectContent>
// //                   </Select>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium mb-1">Sort By</label>
// //                   <Select
// //                     value={filters.sortBy}
// //                     onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
// //                   >
// //                     <SelectTrigger className="w-full bg-gray-700">
// //                       <SelectValue placeholder="Select sort field" />
// //                     </SelectTrigger>
// //                     <SelectContent>
// //                       {sortOptions.map((option) => (
// //                         <SelectItem key={option.value} value={option.value}>
// //                           {option.label}
// //                         </SelectItem>
// //                       ))}
// //                     </SelectContent>
// //                   </Select>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium mb-1">Sort Order</label>
// //                   <Select
// //                     value={filters.sortOrder}
// //                     onValueChange={(value) => setFilters({ ...filters, sortOrder: value })}
// //                   >
// //                     <SelectTrigger className="w-full bg-gray-700">
// //                       <SelectValue placeholder="Select sort order" />
// //                     </SelectTrigger>
// //                     <SelectContent>
// //                       <SelectItem value="asc">Ascending</SelectItem>
// //                       <SelectItem value="desc">Descending</SelectItem>
// //                     </SelectContent>
// //                   </Select>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         )}

// //         {/* User Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {filteredUsers.map((user) => (
// //             <Popover key={user._id} className="relative">
// //               <Card className="bg-gray-800 border-gray-700">
// //                 <CardHeader>
// //                   <CardTitle>{user.username}</CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <p className="text-gray-400">{user.email}</p>
// //                   <p className="text-gray-400">Reputation: {user.reputation}</p>
// //                   <p className="text-gray-400">Posts: {user.posts}</p>
// //                   <Popover.Button
// //                     className="mt-4 w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
// //                     onClick={() => fetchUserProfile(user._id)}
// //                   >
// //                     View Profile
// //                   </Popover.Button>
// //                 </CardContent>
// //               </Card>

// //               <Transition
// //                 as={Fragment}
// //                 enter="transition ease-out duration-200"
// //                 enterFrom="opacity-0 translate-y-1"
// //                 enterTo="opacity-100 translate-y-0"
// //                 leave="transition ease-in duration-150"
// //                 leaveFrom="opacity-100 translate-y-0"
// //                 leaveTo="opacity-0 translate-y-1"
// //               >
// //                 <Popover.Panel className="absolute z-10 mt-3 w-64 p-4 bg-gray-800 rounded-lg shadow-lg">
// //                   {profileLoading ? (
// //                     <div className="text-blue-500">Loading profile...</div>
// //                   ) : selectedUser ? (
// //                     <div>
// //                       <h2 className="text-xl font-bold">{selectedUser.user.username}</h2>
// //                       <p>Email: {selectedUser.user.email}</p>
// //                       <p>Reputation: {selectedUser.user.reputation}</p>
// //                       <p>Posts: {selectedUser.user.posts}</p>
// //                       <p>Status: {selectedUser.user.status}</p>
// //                       <p>
// //                         Joined:{' '}
// //                         {selectedUser.user.dateJoined
// //                           ? new Date(selectedUser.user.dateJoined).toLocaleDateString()
// //                           : 'N/A'}
// //                       </p>
// //                     </div>
// //                   ) : (
// //                     <div className="text-red-500">No profile data available.</div>
// //                   )}
// //                 </Popover.Panel>
// //               </Transition>
// //             </Popover>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserList;
// import React, { useEffect, useState } from 'react';
// import { Fragment } from 'react';
// import { Popover, Transition } from '@headlessui/react';
// import { Search, SlidersHorizontal, X } from 'lucide-react';
// import Cookies from 'js-cookie';
// import Navbar from './shared/Navbar';
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle
// } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [profileLoading, setProfileLoading] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);

//   const [filters, setFilters] = useState({
//     reputation: '',
//     email: '',
//     joinedAfter: '',
//     joinedBefore: '',
//     sortBy: 'username',
//     sortOrder: 'asc',
//     minPosts: '',
//     maxPosts: '',
//     status: 'all'
//   });

//   const [searchQuery, setSearchQuery] = useState('');

//   const sortOptions = [
//     { value: 'username', label: 'Username' },
//     { value: 'reputation', label: 'Reputation' },
//     { value: 'dateJoined', label: 'Join Date' },
//     { value: 'posts', label: 'Post Count' }
//   ];

//   const statusOptions = [
//     { value: 'all', label: 'All Users' },
//     { value: 'active', label: 'Active' },
//     { value: 'inactive', label: 'Inactive' },
//     { value: 'banned', label: 'Banned' }
//   ];

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/api/auth/users');
//         const data = await response.json();
//         setUsers(data);
//         setFilteredUsers(data);
//       } catch (error) {
//         setError('Failed to fetch users');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const applyFilters = () => {
//     let result = [...users];

//     // Search query filter
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase();
//       result = result.filter(user =>
//         user.username.toLowerCase().includes(query) ||
//         user.email.toLowerCase().includes(query)
//       );
//     }

//     // Reputation filter
//     if (filters.reputation) {
//       result = result.filter(user => user.reputation >= parseInt(filters.reputation));
//     }

//     // Email filter
//     if (filters.email) {
//       result = result.filter(user => user.email.toLowerCase().includes(filters.email.toLowerCase()));
//     }

//     // Date joined filters
//     if (filters.joinedAfter) {
//       result = result.filter(user => new Date(user.dateJoined) >= new Date(filters.joinedAfter));
//     }
//     if (filters.joinedBefore) {
//       result = result.filter(user => new Date(user.dateJoined) <= new Date(filters.joinedBefore));
//     }

//     // Posts count filters
//     if (filters.minPosts) {
//       result = result.filter(user => user.posts >= parseInt(filters.minPosts));
//     }
//     if (filters.maxPosts) {
//       result = result.filter(user => user.posts <= parseInt(filters.maxPosts));
//     }

//     // Status filter
//     if (filters.status !== 'all') {
//       result = result.filter(user => user.status === filters.status);
//     }

//     // Sorting
//     result.sort((a, b) => {
//       const aValue = a[filters.sortBy];
//       const bValue = b[filters.sortBy];

//       if (typeof aValue === 'string') {
//         return filters.sortOrder === 'asc'
//           ? aValue.localeCompare(bValue)
//           : bValue.localeCompare(aValue);
//       }

//       return filters.sortOrder === 'asc'
//         ? aValue - bValue
//         : bValue - aValue;
//     });

//     setFilteredUsers(result);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [filters, searchQuery]);

//   const fetchUserProfile = async (userId) => {
//     const token = Cookies.get('token');
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

//       if (!response.ok) throw new Error('Failed to fetch user profile');
//       const data = await response.json();
//       setSelectedUser(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setProfileLoading(false);
//     }
//   };

//   const resetFilters = () => {
//     setFilters({
//       reputation: '',
//       email: '',
//       joinedAfter: '',
//       joinedBefore: '',
//       sortBy: 'username',
//       sortOrder: 'asc',
//       minPosts: '',
//       maxPosts: '',
//       status: 'all'
//     });
//     setSearchQuery('');
//   };

//   if (loading) return <div className="text-white">Loading...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="bg-gray-900 min-h-screen text-white">
//       <Navbar />
//       <div className="container mx-auto py-6">
//         {/* Search and Filter Header */}
//         <div className="mb-6">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-3xl font-bold">All Users</h1>
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
//             >
//               <SlidersHorizontal size={20} />
//               {showFilters ? 'Hide Filters' : 'Show Filters'}
//             </button>
//           </div>

//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search users by username or email..."
//               className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Advanced Filters */}
//         {showFilters && (
//           <Card className="mb-6 bg-gray-800 border-gray-700">
//             <CardHeader>
//               <div className="flex justify-between items-center">
//                 <CardTitle>Advanced Filters</CardTitle>
//                 <button
//                   onClick={resetFilters}
//                   className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
//                 >
//                   <X size={16} />
//                   Reset Filters
//                 </button>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Minimum Reputation</label>
//                   <input
//                     type="number"
//                     className="w-full bg-gray-700 p-2 rounded"
//                     value={filters.reputation}
//                     onChange={(e) => setFilters({ ...filters, reputation: e.target.value })}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Email Contains</label>
//                   <input
//                     type="text"
//                     className="w-full bg-gray-700 p-2 rounded"
//                     value={filters.email}
//                     onChange={(e) => setFilters({ ...filters, email: e.target.value })}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Joined After</label>
//                   <input
//                     type="date"
//                     className="w-full bg-gray-700 p-2 rounded"
//                     value={filters.joinedAfter}
//                     onChange={(e) => setFilters({ ...filters, joinedAfter: e.target.value })}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Joined Before</label>
//                   <input
//                     type="date"
//                     className="w-full bg-gray-700 p-2 rounded"
//                     value={filters.joinedBefore}
//                     onChange={(e) => setFilters({ ...filters, joinedBefore: e.target.value })}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Posts Range</label>
//                   <div className="flex gap-2">
//                     <input
//                       type="number"
//                       placeholder="Min"
//                       className="w-1/2 bg-gray-700 p-2 rounded"
//                       value={filters.minPosts}
//                       onChange={(e) => setFilters({ ...filters, minPosts: e.target.value })}
//                     />
//                     <input
//                       type="number"
//                       placeholder="Max"
//                       className="w-1/2 bg-gray-700 p-2 rounded"
//                       value={filters.maxPosts}
//                       onChange={(e) => setFilters({ ...filters, maxPosts: e.target.value })}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Status</label>
//                   <Select
//                     defaultValue={filters.status}
//                     onValueChange={(value) => setFilters({ ...filters, status: value })}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select status" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {statusOptions.map((option) => (
//                         <SelectItem key={option.value} value={option.value}>
//                           {option.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Sort By</label>
//                   <Select
//                     defaultValue={filters.sortBy}
//                     onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select sort field" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {sortOptions.map((option) => (
//                         <SelectItem key={option.value} value={option.value}>
//                           {option.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Sort Order</label>
//                   <Select
//                     defaultValue={filters.sortOrder}
//                     onValueChange={(value) => setFilters({ ...filters, sortOrder: value })}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select sort order" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="asc">Ascending</SelectItem>
//                       <SelectItem value="desc">Descending</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {/* User Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredUsers.map((user) => (
//             <Popover key={user._id} className="relative">
//               <Card className="bg-gray-800 border-gray-700">
//                 <CardHeader>
//                   <CardTitle className="text-white">{user.username}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-400">{user.email}</p>
//                   <p className="text-gray-400">Reputation: {user.reputation}</p>
//                   <p className="text-gray-400">Posts: {user.posts}</p>
//                   <Popover.Button
//                     className="mt-4 w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
//                     onClick={() => fetchUserProfile(user._id)}
//                   >
//                     View Profile
//                   </Popover.Button>
//                 </CardContent>
//               </Card>

//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 translate-y-1"
//                 enterTo="opacity-100 translate-y-0"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 translate-y-0"
//                 leaveTo="opacity-0 translate-y-1"
//               >
//                 <Popover.Panel className="absolute z-10 mt-3 w-64 p-4 bg-gray-800 rounded-lg shadow-lg">
//                   {profileLoading ? (
//                     <div className="text-blue-500">Loading profile...</div>
//                   ) : selectedUser ? (
//                     <div>
//                       <h2 className="text-xl font-bold">{selectedUser.user.username}</h2>
//                       <p>Email: {selectedUser.user.email}</p>
//                       <p>Reputation: {selectedUser.user.reputation}</p>
//                       <p>Posts: {selectedUser.user.posts}</p>
//                       <p>Status: {selectedUser.user.status}</p>
//                       <p>
//                         Joined:{' '}
//                         {selectedUser.user.dateJoined
//                           ? new Date(selectedUser.user.dateJoined).toLocaleDateString()
//                           : 'N/A'}
//                       </p>
//                     </div>
//                   ) : (
//                     <div className="text-red-500">No profile data available.</div>
//                   )}
//                 </Popover.Panel>
//               </Transition>
//             </Popover>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;
// import React, { useEffect, useState } from 'react';
// import { Fragment } from 'react';
// import { Popover, Transition } from '@headlessui/react';
// import { Search, SlidersHorizontal, X } from 'lucide-react';
// import Cookies from 'js-cookie';
// import Navbar from './shared/Navbar';
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle
// } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [profileLoading, setProfileLoading] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);

//   const [filters, setFilters] = useState({
//     reputation: '',
//     username: '',
//     email: '',
//     sortBy: 'username',
//     sortOrder: 'asc',
//     questionCount: '',
//     answerCount: '',
//     dateJoined: ''
//   });

//   const [searchQuery, setSearchQuery] = useState('');

//   const sortOptions = [
//     { value: 'username', label: 'Username' },
//     { value: 'reputation', label: 'Reputation' },
//     { value: 'questions.length', label: 'Question Count' },
//     { value: 'answers.length', label: 'Answer Count' }
//   ];

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/api/auth/users');
//         const data = await response.json();
//         setUsers(data);
//         setFilteredUsers(data);
//       } catch (error) {
//         setError('Failed to fetch users');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const applyFilters = () => {
//     let result = [...users];

//     // Search query filter for username or email
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase();
//       result = result.filter(user =>
//         user.username?.toLowerCase().includes(query) ||
//         user.email?.toLowerCase().includes(query)
//       );
//     }

//     // Reputation filter
//     if (filters.reputation) {
//       result = result.filter(user => user.reputation >= parseInt(filters.reputation));
//     }

//     // Username filter
//     if (filters.username) {
//       result = result.filter(user =>
//         user.username?.toLowerCase().includes(filters.username.toLowerCase())
//       );
//     }

//     // Email filter
//     if (filters.email) {
//       result = result.filter(user =>
//         user.email?.toLowerCase().includes(filters.email.toLowerCase())
//       );
//     }

//     // Question count filter
//     if (filters.questionCount) {
//       result = result.filter(user =>
//         (user.questions?.length || 0) >= parseInt(filters.questionCount)
//       );
//     }

//     // Answer count filter
//     if (filters.answerCount) {
//       result = result.filter(user =>
//         (user.answers?.length || 0) >= parseInt(filters.answerCount)
//       );
//     }

//     // Date joined filter
//     if (filters.dateJoined) {
//       const filterDate = new Date(filters.dateJoined);
//       result = result.filter(user => {
//         const userDate = new Date(user.createdAt);
//         return userDate >= filterDate;
//       });
//     }

//     // Sorting
//     result.sort((a, b) => {
//       let aValue = a[filters.sortBy];
//       let bValue = b[filters.sortBy];

//       // Handle nested properties for questions and answers length
//       if (filters.sortBy === 'questions.length') {
//         aValue = a.questions?.length || 0;
//         bValue = b.questions?.length || 0;
//       } else if (filters.sortBy === 'answers.length') {
//         aValue = a.answers?.length || 0;
//         bValue = b.answers?.length || 0;
//       }

//       if (typeof aValue === 'string') {
//         return filters.sortOrder === 'asc'
//           ? aValue.localeCompare(bValue)
//           : bValue.localeCompare(aValue);
//       }

//       return filters.sortOrder === 'asc'
//         ? aValue - bValue
//         : bValue - aValue;
//     });

//     setFilteredUsers(result);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [filters, searchQuery]);

//   const fetchUserProfile = async (userId) => {
//     const token = Cookies.get('token');
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

//       if (!response.ok) throw new Error('Failed to fetch user profile');
//       const data = await response.json();
//       setSelectedUser(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setProfileLoading(false);
//     }
//   };

//   const resetFilters = () => {
//     setFilters({
//       reputation: '',
//       username: '',
//       email: '',
//       sortBy: 'username',
//       sortOrder: 'asc',
//       questionCount: '',
//       answerCount: '',
//       dateJoined: ''
//     });
//     setSearchQuery('');
//   };

//   if (loading) return <div className="text-white">Loading...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="bg-gray-900 min-h-screen text-white">
//       <Navbar />
//       <div className="container mx-auto py-6">
//         {/* Search and Filter Header */}
//         <div className="mb-6">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-3xl font-bold">All Users</h1>
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
//             >
//               <SlidersHorizontal size={20} />
//               {showFilters ? 'Hide Filters' : 'Show Filters'}
//             </button>
//           </div>

//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search users by username or email..."
//               className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Advanced Filters */}
//         {showFilters && (
//           <Card className="mb-6 bg-gray-800 border-gray-700">
//             <CardHeader>
//               <div className="flex justify-between items-center">
//                 <CardTitle>Advanced Filters</CardTitle>
//                 <button
//                   onClick={resetFilters}
//                   className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
//                 >
//                   <X size={16} />
//                   Reset Filters
//                 </button>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Minimum Reputation</label>
//                   <input
//                     type="number"
//                     className="w-full bg-gray-700 p-2 rounded"
//                     value={filters.reputation}
//                     onChange={(e) => setFilters({ ...filters, reputation: e.target.value })}
//                     placeholder="Enter minimum reputation"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Username Contains</label>
//                   <input
//                     type="text"
//                     className="w-full bg-gray-700 p-2 rounded"
//                     value={filters.username}
//                     onChange={(e) => setFilters({ ...filters, username: e.target.value })}
//                     placeholder="Filter by username"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Email Contains</label>
//                   <input
//                     type="text"
//                     className="w-full bg-gray-700 p-2 rounded"
//                     value={filters.email}
//                     onChange={(e) => setFilters({ ...filters, email: e.target.value })}
//                     placeholder="Filter by email"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Minimum Questions</label>
//                   <input
//                     type="number"
//                     className="w-full bg-gray-700 p-2 rounded"
//                     value={filters.questionCount}
//                     onChange={(e) => setFilters({ ...filters, questionCount: e.target.value })}
//                     placeholder="Min number of questions"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Minimum Answers</label>
//                   <input
//                     type="number"
//                     className="w-full bg-gray-700 p-2 rounded"
//                     value={filters.answerCount}
//                     onChange={(e) => setFilters({ ...filters, answerCount: e.target.value })}
//                     placeholder="Min number of answers"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Joined After</label>
//                   <input
//                     type="date"
//                     className="w-full bg-gray-700 p-2 rounded"
//                     value={filters.dateJoined}
//                     onChange={(e) => setFilters({ ...filters, dateJoined: e.target.value })}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Sort By</label>
//                   <Select
//                     defaultValue={filters.sortBy}
//                     onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select sort field" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {sortOptions.map((option) => (
//                         <SelectItem key={option.value} value={option.value}>
//                           {option.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Sort Order</label>
//                   <Select
//                     defaultValue={filters.sortOrder}
//                     onValueChange={(value) => setFilters({ ...filters, sortOrder: value })}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select sort order" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="asc">Ascending</SelectItem>
//                       <SelectItem value="desc">Descending</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {/* User Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredUsers.map((user) => (
//             <Popover key={user._id} className="relative">
//               <Card className="bg-gray-800 border-gray-700">
//                 <CardHeader>
//                   <CardTitle>{user.username}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-400">{user.email}</p>
//                   <p className="text-gray-400">Reputation: {user.reputation || 0}</p>
//                   <p className="text-gray-400">Questions: {user.questions?.length || 0}</p>
//                   <p className="text-gray-400">Answers: {user.answers?.length || 0}</p>
//                   <Popover.Button
//                     className="mt-4 w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
//                     onClick={() => fetchUserProfile(user._id)}
//                   >
//                     View Profile
//                   </Popover.Button>
//                 </CardContent>
//               </Card>

//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 translate-y-1"
//                 enterTo="opacity-100 translate-y-0"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 translate-y-0"
//                 leaveTo="opacity-0 translate-y-1"
//               >
//                 <Popover.Panel className="absolute z-10 mt-3 w-64 p-4 bg-gray-800 rounded-lg shadow-lg">
//                   {profileLoading ? (
//                     <div className="text-blue-500">Loading profile...</div>
//                   ) : selectedUser ? (
//                     <div>
//                       <h2 className="text-xl font-bold">{selectedUser.user.username}</h2>
//                       <p>Email: {selectedUser.user.email}</p>
//                       <p>Reputation: {selectedUser.user.reputation}</p>
//                       <p>Questions: {selectedUser.questions?.length || 0}</p>
//                       <p>Answers: {selectedUser.answers?.length || 0}</p>
//                       <p>
//                         Joined:{' '}
//                         {selectedUser.user.createdAt
//                           ? new Date(selectedUser.user.createdAt).toLocaleDateString()
//                           : 'N/A'}
//                       </p>
//                     </div>
//                   ) : (
//                     <div className="text-red-500">No profile data available.</div>
//                   )}
//                 </Popover.Panel>
//               </Transition>
//             </Popover>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Cookies from 'js-cookie';
import Navbar from './shared/Navbar';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [profileLoading, setProfileLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    username: '',
    email: '',
    sortBy: 'username',
    sortOrder: 'asc'
  });

  const [searchQuery, setSearchQuery] = useState('');

  const sortOptions = [
    { value: 'username', label: 'Username' },
  ];

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

  const applyFilters = () => {
    let result = [...users];

    // Search query filter for username or email
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(user =>
        user.username?.toLowerCase().includes(query) ||
        user.email?.toLowerCase().includes(query)
      );
    }

    // Username filter
    if (filters.username) {
      result = result.filter(user =>
        user.username?.toLowerCase().includes(filters.username.toLowerCase())
      );
    }

    // Email filter
    if (filters.email) {
      result = result.filter(user =>
        user.email?.toLowerCase().includes(filters.email.toLowerCase())
      );
    }

    // Sorting
    result.sort((a, b) => {
      const aValue = a[filters.sortBy];
      const bValue = b[filters.sortBy];

      if (typeof aValue === 'string') {
        return filters.sortOrder === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
    });

    setFilteredUsers(result);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, searchQuery]);

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

      if (!response.ok) throw new Error('Failed to fetch user profile');
      const data = await response.json();
      setSelectedUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setProfileLoading(false);
    }
  };

  const resetFilters = () => {
    setFilters({
      username: '',
      email: '',
      sortBy: 'username',
      sortOrder: 'asc'
    });
    setSearchQuery('');
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto py-6">
        {/* Search and Filter Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">All Users</h1>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              <SlidersHorizontal size={20} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search users by username or email..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <Card className="mb-6 bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Advanced Filters</CardTitle>
                <button
                  onClick={resetFilters}
                  className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
                >
                  <X size={16} />
                  Reset Filters
                </button>
              </div>
            </CardHeader>
            <CardContent className="text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Username Contains</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 p-2 rounded"
                    value={filters.username}
                    onChange={(e) => setFilters({ ...filters, username: e.target.value })}
                    placeholder="Filter by username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email Contains</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 p-2 rounded"
                    value={filters.email}
                    onChange={(e) => setFilters({ ...filters, email: e.target.value })}
                    placeholder="Filter by email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Sort By</label>
                  <Select
                    defaultValue={filters.sortBy}
                    onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select sort field" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Sort Order</label>
                  <Select
                    defaultValue={filters.sortOrder}
                    onValueChange={(value) => setFilters({ ...filters, sortOrder: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select sort order" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asc">Ascending</SelectItem>
                      <SelectItem value="desc">Descending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* User Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <Popover key={user._id} className="relative">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">{user.username}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{user.email}</p>
                  <Popover.Button
                    className="mt-4 w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
                    onClick={() => fetchUserProfile(user._id)}
                  >
                    View Profile
                  </Popover.Button>
                </CardContent>
              </Card>

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
                      <h2 className="text-xl font-bold mb-3">{selectedUser.user.username}</h2>
                      <div className="space-y-2">
                        <p className="text-gray-300">Email: {selectedUser.user.email}</p>
                        <p className="text-gray-300">Reputation: {selectedUser.user.reputation}</p>
                        <p className="text-gray-300">Questions: {selectedUser.questions?.length || 0}</p>
                        <p className="text-gray-300">Answers: {selectedUser.answers?.length || 0}</p>
                        <p className="text-gray-300">
                          Joined:{' '}
                          {selectedUser.user.createdAt
                            ? new Date(selectedUser.user.createdAt).toLocaleDateString()
                            : 'N/A'}
                        </p>
                      </div>
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
  );
};

export default UserList;