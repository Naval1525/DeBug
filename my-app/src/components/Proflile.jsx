// // // import { useEffect, useState } from 'react';
// // // import axios from 'axios';

// // // const Profile = () => {
// // //   const [user, setUser] = useState(null);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchUserDetails = async () => {
// // //       const token = localStorage.getItem('token'); // or wherever the token is stored

// // //       try {
// // //         const response = await axios.get('http://localhost:8000/api/auth/user', {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         });
// // //         setUser(response.data.user);
// // //       } catch (err) {
// // //         setError('Error fetching user details.');
// // //         console.error(err);
// // //       }
// // //     };

// // //     fetchUserDetails();
// // //   }, []);

// // //   if (error) return <div className="text-red-500">{error}</div>;
// // //   if (!user) return <div>Loading...</div>;

// // //   return (
// // //     <div className="bg-gradient-to-r from-purple-400 to-pink-600 p-6 rounded-lg shadow-lg text-white">
// // //       <div className="flex flex-col items-center">
// // //         <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
// // //           {user.username}'s Profile
// // //         </h1>
// // //         <div className="bg-gray-800/50 p-4 rounded-lg mb-4 border border-gray-700 w-full max-w-md">
// // //           <div className="flex justify-between mb-2">
// // //             <div className="text-gray-300">Email:</div>
// // //             <div>{user.email}</div>
// // //           </div>
// // //           <div className="flex justify-between mb-2">
// // //             <div className="text-gray-300">Reputation:</div>
// // //             <div>{user.reputation}</div>
// // //           </div>
// // //           <div className="flex justify-between mb-2">
// // //             <div className="text-gray-300">Joined on:</div>
// // //             <div>{new Date(user.dateJoined).toLocaleDateString()}</div>
// // //           </div>
// // //         </div>
// // //         <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white hover:bg-gray-700">
// // //           Edit Profile
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Profile;
// // import { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Cookies from 'js-cookie';  // Import js-cookie to access cookies

// // const Profile = () => {
// //   const [user, setUser] = useState(null);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchUserDetails = async () => {
// //       const token = Cookies.get('token'); // Get the token from the cookie

// //       if (!token) {
// //         setError('No token found. Please log in again.');
// //         return;
// //       }

// //       try {
// //         const response = await axios.get('http://localhost:8000/api/auth/user', {
// //           headers: {
// //             Authorization: `Bearer ${token}`, // Pass token in the Authorization header
// //           },
// //         });
// //         setUser(response.data.user);
// //       } catch (err) {
// //         if (err.response?.data?.error === 'jwt expired') {
// //           // Token expired, attempt to refresh it (if you have a refresh token mechanism)
// //           const refreshedTokens = await refreshAccessToken();
// //           if (refreshedTokens) {
// //             // Store the new access token in cookies
// //             Cookies.set('token', refreshedTokens.accessToken);
// //             setUser(await fetchUserDetails());  // Retry the original request
// //           } else {
// //             // Redirect to login if refresh failed
// //             window.location.href = '/login';
// //           }
// //         } else {
// //           setError('Error fetching user details.');
// //         }
// //       }
// //     };

// //     fetchUserDetails();
// //   }, []);

// //   const refreshAccessToken = async () => {
// //     const refreshToken = Cookies.get('refreshToken'); // Assuming you also store a refresh token

// //     try {
// //       const response = await axios.post('/api/refresh-token', { refreshToken });
// //       return response.data;  // Return new access token
// //     } catch (error) {
// //       console.error('Failed to refresh access token:', error);
// //       return null;
// //     }
// //   };

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
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import Navbar from './shared/Navbar'
// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [view, setView] = useState('questions'); // For toggle between questions and answers

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = Cookies.get('token'); // Ensure 'token' is the correct cookie name

//       if (!token) {
//         setError('No token found. Please log in.');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:8000/api/auth/user', {
//           headers: {
//             Authorization: `Bearer ${token}`, // Correctly send the token in the Authorization header
//           },
//         });

//         setUser(response.data.user); // Assuming the response contains the 'user' object
//         setQuestions(response.data.questions); // Assuming the response contains the 'questions' array
//         setAnswers(response.data.answers); // Assuming the response contains the 'answers' array
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch user details.');
//         setLoading(false);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   if (loading) return <div className="text-white">Loading...</div>;

//   if (error) return <div className="text-white">{error}</div>;

//   // Heatmap logic based on questions and answers
//   const getHeatmapColor = (count) => {
//     if (count === 0) return 'bg-gray-700'; // No activity
//     if (count <= 3) return 'bg-pink-300'; // Low activity
//     if (count <= 6) return 'bg-pink-500'; // Moderate activity
//     return 'bg-pink-700'; // High activity
//   };

//   return (
//     <div>
//     <Navbar></Navbar>

//     <div className="bg-gray-900 min-h-screen py-10 px-6 text-white">


//       <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg">
//         <h1 className="text-4xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
//           User Profile
//         </h1>

//         {/* Profile Information Section */}
//         <div className="bg-gray-700 p-4 rounded-lg mb-6">
//           <p className="text-xl"><strong>Username:</strong> {user.username}</p>
//           <p className="text-xl"><strong>Email:</strong> {user.email}</p>
//           <p className="text-gray-400 text-lg"><strong>Reputation:</strong> {user.reputation}</p>
//           <p className="text-gray-400 text-lg"><strong>Date Joined:</strong> {new Date(user.dateJoined).toLocaleDateString()}</p>
//         </div>

//         {/* Heatmap Section */}
//         <div className="bg-gray-700 p-4 rounded-lg mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Activity Heatmap</h2>
//           <div className="grid grid-cols-7 gap-2">
//             {questions.length > 0 &&
//               questions.map((question, index) => (
//                 <div key={question._id} className={`w-8 h-8 ${getHeatmapColor(index + 1)} rounded-md`} />
//               ))}
//             {answers.length > 0 &&
//               answers.map((answer, index) => (
//                 <div key={answer._id} className={`w-8 h-8 ${getHeatmapColor(index + 1)} rounded-md`} />
//               ))}
//           </div>
//         </div>

//         {/* Toggle Section for Questions & Answers */}
//         <div className="flex justify-between items-center mb-6">
//           <button
//             className={`text-lg font-semibold py-2 px-4 rounded-lg ${view === 'questions' ? 'bg-pink-600 text-white' : 'bg-gray-600'}`}
//             onClick={() => setView('questions')}
//           >
//             Questions Asked
//           </button>
//           <button
//             className={`text-lg font-semibold py-2 px-4 rounded-lg ${view === 'answers' ? 'bg-pink-600 text-white' : 'bg-gray-600'}`}
//             onClick={() => setView('answers')}
//           >
//             Answers Given
//           </button>
//         </div>

//         {/* Display Questions or Answers based on the view */}
//         <div className="bg-gray-700 p-4 rounded-lg">
//           {view === 'questions' && (
//             <>
//               <h3 className="text-2xl font-semibold mb-4">Questions Asked</h3>
//               {questions.length > 0 ? (
//                 <ul>
//                   {questions.map((question) => (
//                     <li key={question._id} className="text-gray-300 mb-2">
//                       <div className="flex justify-between items-center">
//                         <span className="text-lg font-semibold">{question.title}</span>
//                         <span className={`px-2 py-1 text-sm rounded-md ${getHeatmapColor(questions.length)}`}>{questions.length} Qs</span>
//                       </div>
//                       <p className="text-gray-400 text-sm">{question.body}</p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-400">No questions asked yet.</p>
//               )}
//             </>
//           )}

//           {view === 'answers' && (
//             <>
//               <h3 className="text-2xl font-semibold mb-4">Answers Given</h3>
//               {answers.length > 0 ? (
//                 <ul>
//                   {answers.map((answer) => (
//                     <li key={answer._id} className="text-gray-300 mb-2">
//                       <div className="flex justify-between items-center">
//                         <span className="text-lg font-semibold">{answer?.question?.title}</span>
//                         <span className={`px-2 py-1 text-sm rounded-md ${getHeatmapColor(answers.length)}`}>{answers.length} Ans</span>
//                       </div>
//                       <p className="text-gray-400 text-sm">{answer.body}</p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-400">No answers given yet.</p>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Profile;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import Navbar from './shared/Navbar';
// import HeatMap from 'react-heatmap-grid'; // Importing the HeatMap component

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [view, setView] = useState('questions'); // For toggle between questions and answers

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = Cookies.get('token'); // Ensure 'token' is the correct cookie name

//       if (!token) {
//         setError('No token found. Please log in.');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:8000/api/auth/user', {
//           headers: {
//             Authorization: `Bearer ${token}`, // Correctly send the token in the Authorization header
//           },
//         });

//         setUser(response.data.user); // Assuming the response contains the 'user' object
//         setQuestions(response.data.questions); // Assuming the response contains the 'questions' array
//         setAnswers(response.data.answers); // Assuming the response contains the 'answers' array
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch user details.');
//         setLoading(false);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   if (loading) return <div className="text-white">Loading...</div>;

//   if (error) return <div className="text-white">{error}</div>;

//   // Prepare data for the heatmap
//   const xLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const yLabels = ["Questions", "Answers"];

//   // Create 2D data array (7 days, 2 rows for questions and answers)
//   const data = new Array(yLabels.length)
//     .fill(0)
//     .map(() => new Array(xLabels.length).fill(0));

//   // Populate data array with question and answer counts per day (example logic)
//   questions.forEach((question, index) => {
//     const dayIndex = new Date(question.createdAt).getDay(); // Get the day of the week
//     data[0][dayIndex] += 1; // Increment the count for questions
//   });

//   answers.forEach((answer, index) => {
//     const dayIndex = new Date(answer.createdAt).getDay(); // Get the day of the week
//     data[1][dayIndex] += 1; // Increment the count for answers
//   });

//   // Heatmap cell color function based on the value
//   const cellStyle = (background, value, min, max, data, x, y) => ({
//     background: `rgba(66, 86, 244, ${1 - (max - value) / (max - min)})`,
//     fontSize: "11px",
//   });

//   return (
//     <div className="bg-gray-900 min-h-screen  text-white">
//       <Navbar />
//       <div className="bg-gray-900 min-h-screen py-10 px-6 text-white">
//         <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg">
//           <h1 className="text-4xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
//             User Profile
//           </h1>

//           {/* Profile Information Section */}
//           <div className="bg-gray-700 p-4 rounded-lg mb-6">
//             <p className="text-xl"><strong>Username:</strong> {user.username}</p>
//             <p className="text-xl"><strong>Email:</strong> {user.email}</p>
//             <p className="text-gray-400 text-lg"><strong>Reputation:</strong> {user.reputation}</p>
//             <p className="text-gray-400 text-lg"><strong>Date Joined:</strong> {new Date(user.dateJoined).toLocaleDateString()}</p>
//           </div>

//           {/* Heatmap Section */}
//           <div className="bg-gray-700 p-4 rounded-lg mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Activity Heatmap</h2>
//             <HeatMap
//               xLabels={xLabels}
//               yLabels={yLabels}
//               data={data}
//               height={30} // Adjust the cell height
//               squares={true} // Makes the cells square
//               cellStyle={cellStyle} // Custom style for the cells
//               cellRender={(value) => value} // Optional custom rendering for cell content
//             />
//           </div>

//           {/* Toggle Section for Questions & Answers */}
//           <div className="flex justify-between items-center mb-6">
//             <button
//               className={`text-lg font-semibold py-2 px-4 rounded-lg ${view === 'questions' ? 'bg-pink-600 text-white' : 'bg-gray-600'}`}
//               onClick={() => setView('questions')}
//             >
//               Questions Asked
//             </button>
//             <button
//               className={`text-lg font-semibold py-2 px-4 rounded-lg ${view === 'answers' ? 'bg-pink-600 text-white' : 'bg-gray-600'}`}
//               onClick={() => setView('answers')}
//             >
//               Answers Given
//             </button>
//           </div>

//           {/* Display Questions or Answers based on the view */}
//           <div className="bg-gray-700 p-4 rounded-lg">
//             {view === 'questions' && (
//               <>
//                 <h3 className="text-2xl font-semibold mb-4">Questions Asked</h3>
//                 {questions.length > 0 ? (
//                   <ul>
//                     {questions.map((question) => (
//                       <li key={question._id} className="text-gray-300 mb-2">
//                         <div className="flex justify-between items-center">
//                           <span className="text-lg font-semibold">{question.title}</span>
//                           <span className="px-2 py-1 text-sm rounded-md bg-pink-600">{questions.length} Qs</span>
//                         </div>
//                         <p className="text-gray-400 text-sm">{question.body}</p>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="text-gray-400">No questions asked yet.</p>
//                 )}
//               </>
//             )}

//             {view === 'answers' && (
//               <>
//                 <h3 className="text-2xl font-semibold mb-4">Answers Given</h3>
//                 {answers.length > 0 ? (
//                   <ul>
//                     {answers.map((answer) => (
//                       <li key={answer._id} className="text-gray-300 mb-2">
//                         <div className="flex justify-between items-center">
//                           <span className="text-lg font-semibold">{answer?.question?.title}</span>
//                           <span className="px-2 py-1 text-sm rounded-md bg-pink-600">{answers.length} Ans</span>
//                         </div>
//                         <p className="text-gray-400 text-sm">{answer.body}</p>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="text-gray-400">No answers given yet.</p>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import Navbar from './shared/Navbar';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [activityData, setActivityData] = useState(new Map());
//   const [selectedActivity, setSelectedActivity] = useState(null);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = Cookies.get('token');
//       if (!token) {
//         setError('Authentication required');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:8000/api/auth/user', {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         setUser(response.data.user);
//         setQuestions(response.data.questions);
//         setAnswers(response.data.answers);
//         processActivityData(response.data.questions, response.data.answers);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   const processActivityData = (questions, answers) => {
//     const activityMap = new Map();
//     const currentDate = new Date();
//     const yearAgo = new Date(currentDate);
//     yearAgo.setFullYear(currentDate.getFullYear() - 1);

//     // Initialize all dates
//     for (let d = new Date(yearAgo); d <= currentDate; d.setDate(d.getDate() + 1)) {
//       activityMap.set(d.toISOString().split('T')[0], {
//         questions: 0,
//         answers: 0,
//         total: 0
//       });
//     }

//     // Process questions
//     questions.forEach(question => {
//       const date = new Date(question.createdAt).toISOString().split('T')[0];
//       if (activityMap.has(date)) {
//         const current = activityMap.get(date);
//         current.questions += 1;
//         current.total += 1;
//         activityMap.set(date, current);
//       }
//     });

//     // Process answers
//     answers.forEach(answer => {
//       const date = new Date(answer.createdAt).toISOString().split('T')[0];
//       if (activityMap.has(date)) {
//         const current = activityMap.get(date);
//         current.answers += 1;
//         current.total += 1;
//         activityMap.set(date, current);
//       }
//     });

//     setActivityData(activityMap);
//   };

//   const getActivityColor = (count) => {
//     if (count === 0) return 'bg-gray-800';
//     if (count <= 2) return 'bg-blue-900';
//     if (count <= 4) return 'bg-blue-700';
//     if (count <= 6) return 'bg-blue-500';
//     return 'bg-blue-400';
//   };

//   if (loading) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">Loading...</div>;
//   if (error) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">{error}</div>;
//   if (!user) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">No user data found</div>;

//   return (
//     <div className="bg-gray-900  shadow-xl">
//     <Navbar></Navbar>
//     <div className="min-h-screen bg-gray-950 text-white p-8 ">

//       <div className="max-w-7xl mx-auto space-y-8 mt-8">
//         {/* Profile Header */}
//         <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
//           <div className="flex items-center space-x-6">
//             <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold">
//               {user.username.charAt(0).toUpperCase()}
//             </div>
//             <div>
//               <h1 className="text-3xl font-bold">{user.username}</h1>
//               <p className="text-gray-400">{user.email}</p>
//               <div className="mt-2 flex items-center space-x-4">
//                 <div className="px-3 py-1 bg-blue-500 rounded-full text-sm">
//                   {user.reputation} reputation
//                 </div>
//                 <div className="text-gray-400">
//                   Joined {new Date(user.dateJoined).toLocaleDateString()}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="bg-gray-900 rounded-lg p-6 text-center">
//             <div className="text-3xl font-bold text-blue-500">{questions.length}</div>
//             <div className="text-gray-400">Questions Asked</div>
//           </div>
//           <div className="bg-gray-900 rounded-lg p-6 text-center">
//             <div className="text-3xl font-bold text-purple-500">{answers.length}</div>
//             <div className="text-gray-400">Answers Given</div>
//           </div>
//           <div className="bg-gray-900 rounded-lg p-6 text-center">
//             <div className="text-3xl font-bold text-green-500">
//               {answers.filter(a => a.status === 'accepted').length}
//             </div>
//             <div className="text-gray-400">Accepted Answers</div>
//           </div>
//         </div>

//         {/* Activity Heatmap */}
//         {/* <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
//           <h2 className="text-xl font-bold mb-6">Yearly Activity</h2>
//           <div className="overflow-x-auto">
//             <div className="min-w-max">
//               {/* Month Labels */}
//               {/* <div className="flex mb-2">
//                 <div className="w-10"></div>
//                 <div className="flex-1 grid grid-cols-52 gap-1">
//                   {Array.from(activityData.keys()).map((date, i) => (
//                     i % 7 === 0 && new Date(date).getDate() <= 7 && (
//                       <div key={date} className="text-xs text-gray-400 -ml-2">
//                         {new Date(date).toLocaleString('default', { month: 'short' })}
//                       </div>
//                     )
//                   ))}
//                 </div>
//               </div> */}

//               {/* Activity Grid */}
//               {/* <div className="flex">
//                 <div className="w-10 flex flex-col justify-between text-xs text-gray-400 py-1">
//                   <span>Mon</span>
//                   <span>Wed</span>
//                   <span>Fri</span>
//                 </div>
//                 <div className="flex-1 grid grid-cols-52 gap-1">
//                   {Array.from(activityData.entries()).map(([date, data]) => (
//                     <div
//                       key={date}
//                       className={`w-4 h-4 rounded-sm ${getActivityColor(data.total)} cursor-pointer transition-colors duration-200`}
//                       onMouseEnter={() => setSelectedActivity({ date, data })}
//                       onMouseLeave={() => setSelectedActivity(null)}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Activity Legend */}
//               {/* <div className="mt-4 flex items-center justify-end space-x-2"> */}
//                 {/* <span className="text-xs text-gray-400">Less</span>
//                 {[0, 2, 4, 6, 8].map((value) => (
//                   <div
//                     key={value}
//                     className={`w-4 h-4 rounded-sm ${getActivityColor(value)}`}
//                   />
//                 ))}
//                 <span className="text-xs text-gray-400">More</span>
//               </div>

//               Activity Tooltip */}
//               {/* {selectedActivity && (
//                 <div className="mt-2 text-sm text-gray-400">
//                   {new Date(selectedActivity.date).toLocaleDateString()}: {selectedActivity.data.total} activities
//                   ({selectedActivity.data.questions} questions, {selectedActivity.data.answers} answers)
//                 </div>
//               )}
//             </div>
//           </div> */}
//         {/* // </div> */}

//         {/* Recent Activity */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Recent Questions */}
//           <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
//             <h2 className="text-xl font-bold mb-4">Recent Questions</h2>
//             <div className="space-y-4">
//               {questions.slice(0, 5).map((question) => (
//                 <div key={question._id} className="border-b border-gray-800 pb-4">
//                   <h3 className="font-semibold text-blue-400">{question.title}</h3>
//                   <p className="text-gray-400 text-sm mt-1">{question.body.substring(0, 100)}...</p>
//                   <div className="mt-2 flex flex-wrap gap-2">
//                     {question.tags.map((tag, index) => (
//                       <span key={index} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Recent Answers */}
//           <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
//             <h2 className="text-xl font-bold mb-4">Recent Answers</h2>
//             <div className="space-y-4">
//               {answers.slice(0, 5).map((answer) => (
//                 <div key={answer._id} className="border-b border-gray-800 pb-4">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <span className={`px-2 py-1 rounded-full text-xs ${
//                         answer.status === 'accepted' ? 'bg-green-900 text-green-400' : 'bg-gray-800 text-gray-400'
//                       }`}>
//                         {answer.status}
//                       </span>
//                       <span className="text-gray-400 text-sm">
//                         {answer.upvotes - answer.downvotes} votes
//                       </span>
//                     </div>
//                   </div>
//                   <p className="text-gray-400 text-sm mt-2">{answer.body.substring(0, 100)}...</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>

//   );
// };

// export default Profile;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import Navbar from './shared/Navbar';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [activityData, setActivityData] = useState(new Map());
//   const [selectedActivity, setSelectedActivity] = useState(null);


//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = Cookies.get('token');
//       if (!token) {
//         setError('Authentication required');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:8000/api/auth/user', {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         setUser(response.data.user); // Assuming reputation is part of 'user' object
//         setQuestions(response.data.questions);
//         setAnswers(response.data.answers);
//         processActivityData(response.data.questions, response.data.answers);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   const processActivityData = (questions, answers) => {
//     const activityMap = new Map();
//     const currentDate = new Date();
//     const yearAgo = new Date(currentDate);
//     yearAgo.setFullYear(currentDate.getFullYear() - 1);

//     // Initialize all dates
//     for (let d = new Date(yearAgo); d <= currentDate; d.setDate(d.getDate() + 1)) {
//       activityMap.set(d.toISOString().split('T')[0], {
//         questions: 0,
//         answers: 0,
//         total: 0
//       });
//     }

//     // Process questions
//     questions.forEach(question => {
//       const date = new Date(question.createdAt).toISOString().split('T')[0];
//       if (activityMap.has(date)) {
//         const current = activityMap.get(date);
//         current.questions += 1;
//         current.total += 1;
//         activityMap.set(date, current);
//       }
//     });

//     // Process answers
//     answers.forEach(answer => {
//       const date = new Date(answer.createdAt).toISOString().split('T')[0];
//       if (activityMap.has(date)) {
//         const current = activityMap.get(date);
//         current.answers += 1;
//         current.total += 1;
//         activityMap.set(date, current);
//       }
//     });

//     setActivityData(activityMap);
//   };

//   const getActivityColor = (count) => {
//     if (count === 0) return 'bg-gray-800';
//     if (count <= 2) return 'bg-blue-900';
//     if (count <= 4) return 'bg-blue-700';
//     if (count <= 6) return 'bg-blue-500';
//     return 'bg-blue-400';
//   };

//   if (loading) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">Loading...</div>;
//   if (error) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">{error}</div>;
//   if (!user) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">No user data found</div>;

//   return (
//     <div className="bg-gray-900 shadow-xl">
//       <Navbar />
//       <div className="min-h-screen bg-gray-950 text-white p-8">
//         <div className="max-w-7xl mx-auto space-y-8 mt-8">
//           {/* Profile Header */}
//           <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
//             <div className="flex items-center space-x-6">
//               <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold">
//                 {user.username.charAt(0).toUpperCase()}
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold">{user.username}</h1>
//                 <p className="text-gray-400">{user.email}</p>
//                 <div className="mt-2 flex items-center space-x-4">
//                   <div className="px-3 py-1 bg-blue-500 rounded-full text-sm">
//                     {user.reputation} reputation
//                   </div>
//                   <div className="text-gray-400">
//                     Joined {new Date(user.dateJoined).toLocaleDateString()}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Stats Overview */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="bg-gray-900 rounded-lg p-6 text-center">
//               <div className="text-3xl font-bold text-blue-500">{questions.length}</div>
//               <div className="text-gray-400">Questions Asked</div>
//             </div>
//             <div className="bg-gray-900 rounded-lg p-6 text-center">
//               <div className="text-3xl font-bold text-purple-500">{answers.length}</div>
//               <div className="text-gray-400">Answers Given</div>
//             </div>
//             <div className="bg-gray-900 rounded-lg p-6 text-center">
//               <div className="text-3xl font-bold text-green-500">
//                 {answers.filter(a => a.status === 'accepted').length}
//               </div>
//               <div className="text-gray-400">Accepted Answers</div>
//             </div>
//           </div>

//           {/* Recent Activity */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Recent Questions */}
//             <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
//               <h2 className="text-xl font-bold mb-4">Recent Questions</h2>
//               <div className="space-y-4">
//                 {questions.slice(0, 5).map((question) => (
//                   <div key={question._id} className="border-b border-gray-800 pb-4">
//                     <h3 className="font-semibold text-blue-400">{question.title}</h3>
//                     <p className="text-gray-400 text-sm mt-1">{question.body.substring(0, 100)}...</p>
//                     <div className="mt-2 flex flex-wrap gap-2">
//                       {question.tags.map((tag, index) => (
//                         <span key={index} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Recent Answers */}
//             <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
//               <h2 className="text-xl font-bold mb-4">Recent Answers</h2>
//               <div className="space-y-4">
//                 {answers.slice(0, 5).map((answer) => (
//                   <div key={answer._id} className="border-b border-gray-800 pb-4">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-2">
//                         <span className={`px-2 py-1 rounded-full text-xs ${
//                           answer.status === 'accepted' ? 'bg-green-900 text-green-400' : 'bg-gray-800 text-gray-400'
//                         }`}>
//                           {answer.status}
//                         </span>
//                         <span className="text-gray-400 text-sm">
//                           {answer.upvotes - answer.downvotes} votes
//                         </span>
//                       </div>
//                     </div>
//                     <p className="text-gray-400 text-sm mt-2">{answer.body.substring(0, 100)}...</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import HeatMap from '@uiw/react-heat-map';
// import Navbar from './shared/Navbar';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [activityData, setActivityData] = useState([]);
//   const [selectedActivity, setSelectedActivity] = useState(null);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = Cookies.get('token');
//       if (!token) {
//         setError('Authentication required');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:8000/api/auth/user', {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         setUser(response.data.user);
//         setQuestions(response.data.questions);
//         setAnswers(response.data.answers);
//         processActivityData(response.data.questions, response.data.answers);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   const processActivityData = (questions, answers) => {
//     const activityMap = new Map();

//     // Process questions
//     questions.forEach(question => {
//       const date = new Date(question.createdAt).toISOString().split('T')[0].replace(/-/g, '/');
//       const currentCount = activityMap.get(date) || 0;
//       activityMap.set(date, currentCount + 1);
//     });

//     // Process answers
//     answers.forEach(answer => {
//       const date = new Date(answer.createdAt).toISOString().split('T')[0].replace(/-/g, '/');
//       const currentCount = activityMap.get(date) || 0;
//       activityMap.set(date, currentCount + 1);
//     });

//     // Convert map to array format required by HeatMap
//     const heatmapData = Array.from(activityMap, ([date, count]) => ({
//       date,
//       count
//     }));

//     setActivityData(heatmapData);
//   };

//   if (loading) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">Loading...</div>;
//   if (error) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">{error}</div>;
//   if (!user) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">No user data found</div>;

//   const oneYearAgo = new Date();
//   oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

//   return (
//     <div className="bg-gray-900 shadow-xl">
//       <Navbar />
//       <div className="min-h-screen bg-gray-950 text-white p-8">
//         <div className="max-w-7xl mx-auto space-y-8 mt-8">
//           {/* Profile Header */}
//           <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
//             <div className="flex items-center space-x-6">
//               <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold">
//                 {user.username.charAt(0).toUpperCase()}
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold">{user.username}</h1>
//                 <p className="text-gray-400">{user.email}</p>
//                 <div className="mt-2 flex items-center space-x-4">
//                   <div className="px-3 py-1 bg-blue-500 rounded-full text-sm">
//                     {user.reputation} reputation
//                   </div>
//                   <div className="text-gray-400">
//                     Joined {new Date(user.dateJoined).toLocaleDateString()}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Activity Heat Map */}
//           <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
//             <h2 className="text-xl font-bold mb-4">Activity Overview</h2>
//             <div className="mt-4">
//               <HeatMap
//                 value={activityData}
//                 startDate={oneYearAgo}
//                 width={800}
//                 rectSize={12}
//                 space={4}
//                 style={{ color: '#4F46E5' }}
//                 panelColors={['#1F2937', '#3730A3', '#4F46E5', '#6366F1', '#818CF8']}
//                 rectProps={{
//                   rx: 2
//                 }}
//                 weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
//                 legendRender={(props) => <rect {...props} rx={2} />}
//               />
//             </div>
//           </div>

//           {/* Stats Overview */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="bg-gray-900 rounded-lg p-6 text-center">
//               <div className="text-3xl font-bold text-blue-500">{questions.length}</div>
//               <div className="text-gray-400">Questions Asked</div>
//             </div>
//             <div className="bg-gray-900 rounded-lg p-6 text-center">
//               <div className="text-3xl font-bold text-purple-500">{answers.length}</div>
//               <div className="text-gray-400">Answers Given</div>
//             </div>
//             <div className="bg-gray-900 rounded-lg p-6 text-center">
//               <div className="text-3xl font-bold text-green-500">
//                 {answers.filter(a => a.status === 'accepted').length}
//               </div>
//               <div className="text-gray-400">Accepted Answers</div>
//             </div>
//           </div>

//           {/* Recent Activity Sections */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Recent Questions */}
//             <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
//               <h2 className="text-xl font-bold mb-4">Recent Questions</h2>
//               <div className="space-y-4">
//                 {questions.slice(0, 5).map((question) => (
//                   <div key={question._id} className="border-b border-gray-800 pb-4">
//                     <h3 className="font-semibold text-blue-400">{question.title}</h3>
//                     <p className="text-gray-400 text-sm mt-1">{question.body.substring(0, 100)}...</p>
//                     <div className="mt-2 flex flex-wrap gap-2">
//                       {question.tags.map((tag, index) => (
//                         <span key={index} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Recent Answers */}
//             <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
//               <h2 className="text-xl font-bold mb-4">Recent Answers</h2>
//               <div className="space-y-4">
//                 {answers.slice(0, 5).map((answer) => (
//                   <div key={answer._id} className="border-b border-gray-800 pb-4">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-2">
//                         <span className={`px-2 py-1 rounded-full text-xs ${
//                           answer.status === 'accepted' ? 'bg-green-900 text-green-400' : 'bg-gray-800 text-gray-400'
//                         }`}>
//                           {answer.status}
//                         </span>
//                         <span className="text-gray-400 text-sm">
//                           {answer.upvotes - answer.downvotes} votes
//                         </span>
//                       </div>
//                     </div>
//                     <p className="text-gray-400 text-sm mt-2">{answer.body.substring(0, 100)}...</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;










// src/components/Profile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import { Calendar, Clock, Award, MessageSquare } from 'lucide-react';
import Navbar from './shared/Navbar';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activityData, setActivityData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [yearStats, setYearStats] = useState({});
  const [availableYears, setAvailableYears] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = Cookies.get('token');
      if (!token) {
        setError('Authentication required');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/auth/user', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setUser(response.data.user);
        setQuestions(response.data.questions);
        setAnswers(response.data.answers);
        processAllActivityData(response.data.questions, response.data.answers);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const processAllActivityData = (questions, answers) => {
    // Get all activity dates
    const allDates = [
      ...questions.map(q => new Date(q.createdAt)),
      ...answers.map(a => new Date(a.createdAt))
    ];

    // Extract unique years and sort them
    const years = [...new Set(allDates.map(date => date.getFullYear()))].sort();
    setAvailableYears(years);

    // Set initial selected year to most recent
    if (years.length > 0) {
      const mostRecentYear = Math.max(...years);
      setSelectedYear(mostRecentYear);
    }

    // Process statistics for each year
    const yearlyStats = {};
    years.forEach(year => {
      const yearData = processYearData(year, questions, answers);
      yearlyStats[year] = {
        totalActivity: yearData.reduce((sum, day) => sum + day.count, 0),
        questions: questions.filter(q => new Date(q.createdAt).getFullYear() === year).length,
        answers: answers.filter(a => new Date(a.createdAt).getFullYear() === year).length,
        maxDay: Math.max(...yearData.map(day => day.count))
      };
    });

    setYearStats(yearlyStats);
    updateYearData(selectedYear, questions, answers);
  };

  const processYearData = (year, questions, answers) => {
    const activityMap = new Map();

    // Initialize all dates for the year
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dateKey = d.toISOString().split('T')[0].replace(/-/g, '/');
      activityMap.set(dateKey, {
        count: 0,
        questions: 0,
        answers: 0,
        details: []
      });
    }

    // Process questions
    questions
      .filter(q => new Date(q.createdAt).getFullYear() === year)
      .forEach(question => {
        const date = new Date(question.createdAt).toISOString().split('T')[0].replace(/-/g, '/');
        if (activityMap.has(date)) {
          const current = activityMap.get(date);
          current.count += 1;
          current.questions += 1;
          current.details.push({
            type: 'question',
            title: question.title,
            time: new Date(question.createdAt).toLocaleTimeString(),
            tags: question.tags
          });
          activityMap.set(date, current);
        }
      });

    // Process answers
    answers
      .filter(a => new Date(a.createdAt).getFullYear() === year)
      .forEach(answer => {
        const date = new Date(answer.createdAt).toISOString().split('T')[0].replace(/-/g, '/');
        if (activityMap.has(date)) {
          const current = activityMap.get(date);
          current.count += 1;
          current.answers += 1;
          current.details.push({
            type: 'answer',
            excerpt: answer.body.substring(0, 50) + '...',
            time: new Date(answer.createdAt).toLocaleTimeString(),
            status: answer.status
          });
          activityMap.set(date, current);
        }
      });

    return Array.from(activityMap, ([date, data]) => ({
      date,
      count: data.count,
      questions: data.questions,
      answers: data.answers,
      details: data.details
    }));
  };

  const updateYearData = (year, questions, answers) => {
    const yearData = processYearData(year, questions, answers);
    setActivityData(yearData);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    updateYearData(year, questions, answers);
  };

  if (loading) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">{error}</div>;
  if (!user) return <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">No user data found</div>;

  return (
    <div className="bg-gray-900 shadow-xl">
    <Navbar></Navbar>
    <div className="bg-gray-900 shadow-xl">
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <div className="max-w-7xl mx-auto space-y-8 mt-8">
          {/* Profile Header */}
          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
            <div className="flex items-center space-x-6">
              <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{user.username}</h1>
                <p className="text-gray-400">{user.email}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <div className="px-3 py-1 bg-blue-500 rounded-full text-sm">
                    {user.reputation} reputation
                  </div>
                  <div className="text-gray-400 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Joined {new Date(user.dateJoined).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Heat Map Section */}
          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Activity Overview</h2>
              <div className="flex items-center space-x-4">
                <select
                  value={selectedYear}
                  onChange={(e) => handleYearChange(parseInt(e.target.value))}
                  className="bg-gray-800 text-white rounded-lg px-3 py-1 border border-gray-700"
                >
                  {availableYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Year Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Total Activity</span>
                  <Clock className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold">
                  {yearStats[selectedYear]?.totalActivity || 0}
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Questions</span>
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-blue-500">
                  {yearStats[selectedYear]?.questions || 0}
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Answers</span>
                  <Award className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-purple-500">
                  {yearStats[selectedYear]?.answers || 0}
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Most Active Day</span>
                  <Award className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-green-500">
                  {yearStats[selectedYear]?.maxDay || 0}
                </div>
              </div>
            </div>

            {/* Heat Map */}
            <div className="mt-4 overflow-x-auto">
              <HeatMap
                value={activityData}
                startDate={new Date(selectedYear, 0, 1)}
                endDate={new Date(selectedYear, 11, 31)}
                width={800}
                rectSize={12}
                space={4}
                style={{ color: '#4F46E5' }}
                panelColors={['#1F2937', '#3730A3', '#4F46E5', '#6366F1', '#818CF8']}
                rectProps={{
                  rx: 2
                }}
                weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
                rectRender={(props, data) => {
                  if (!data.count) return <rect {...props} />;
                  return (
                    <Tooltip
                      placement="top"
                      content={
                        <div className="p-2 max-w-xs">
                          <div className="font-bold">
                            {new Date(data.date).toLocaleDateString()}
                          </div>
                          <div className="grid grid-cols-2 gap-2 mt-4">
                            <div className="text-sm">
                              <span className="text-blue-400">Questions:</span> {data.questions}
                            </div>
                            <div className="text-sm">
                              <span className="text-purple-400">Answers:</span> {data.answers}
                            </div>
                          </div>
                          {data.details.length > 0 && (
                            <div className="mt-2 border-t border-gray-700 pt-2">
                              <div className="text-sm font-semibold mb-1">Activity:</div>
                              {data.details.map((detail, i) => (
                                <div key={i} className="text-xs text-gray-300 mb-1">
                                  {detail.time} - {detail.type === 'question' ? '❓' : '✍️'}{' '}
                                  {detail.type === 'question' ? detail.title : detail.excerpt}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      }
                    >
                      <rect {...props} />
                    </Tooltip>
                  );
                }}
              />
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-500">{questions.length}</div>
              <div className="text-gray-400">Questions Asked</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-500">{answers.length}</div>
              <div className="text-gray-400">Answers Given</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-500">
                {answers.filter(a => a.status === 'accepted').length}
              </div>
              <div className="text-gray-400">Accepted Answers</div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Questions */}
            <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
              <h2 className="text-xl font-bold mb-4">Recent Questions</h2>
              <div className="space-y-4">
                {questions.slice(0, 5).map((question) => (
                  <div key={question._id} className="border-b border-gray-800 pb-4">
                    <h3 className="font-semibold text-blue-400">{question.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{question.body.substring(0, 100)}...</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {question.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          {/* Recent Answers */}
          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
              <h2 className="text-xl font-bold mb-4">Recent Answers</h2>
              <div className="space-y-4">
                {answers.slice(0, 5).map((answer) => (
                  <div key={answer._id} className="border-b border-gray-800 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          answer.status === 'accepted' ? 'bg-green-900 text-green-400' : 'bg-gray-800 text-gray-400'
                        }`}>
                          {answer.status}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {answer.upvotes - answer.downvotes} votes
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{answer.body.substring(0, 100)}...</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;