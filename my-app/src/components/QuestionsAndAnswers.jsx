// // import React, { useState, useEffect } from 'react';
// // import { ChevronUp, ChevronDown, MessageCircle } from 'lucide-react';

// // const QuestionsAndAnswers = () => {
// //   const [questions, setQuestions] = useState([]);
// //   const [expandedQuestions, setExpandedQuestions] = useState(new Set());
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     fetchQuestions();
// //   }, []);

// //   const fetchQuestions = async () => {
// //     try {
// //       const response = await fetch('http://localhost:8000/api/questions');
// //       if (!response.ok) throw new Error('Failed to fetch questions');
// //       const data = await response.json();
// //       setQuestions(data);
// //     } catch (err) {
// //       setError('Failed to load questions');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const toggleQuestion = (questionId) => {
// //     setExpandedQuestions(prev => {
// //       const newSet = new Set(prev);
// //       if (newSet.has(questionId)) {
// //         newSet.delete(questionId);
// //       } else {
// //         newSet.add(questionId);
// //       }
// //       return newSet;
// //     });
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'short',
// //       day: 'numeric'
// //     });
// //   };

// //   if (loading) return (
// //     <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-900">
// //       <div className="text-purple-400">Loading questions...</div>
// //     </div>
// //   );

// //   if (error) return (
// //     <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-900">
// //       <div className="text-red-400">{error}</div>
// //     </div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 p-6">
// //       <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
// //         Questions
// //       </h1>

// //       <div className="space-y-4">
// //         {questions.map(question => (
// //           <div
// //             key={question._id}
// //             className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg shadow-lg backdrop-blur-sm"
// //           >
// //             <div className="flex gap-4">
// //               {/* Vote controls */}
// //               <div className="flex flex-col items-center space-y-2">
// //                 <button className="text-gray-400 hover:text-purple-400 transition-colors">
// //                   <ChevronUp size={24} />
// //                 </button>
// //                 <span className="text-white font-medium">0</span>
// //                 <button className="text-gray-400 hover:text-purple-400 transition-colors">
// //                   <ChevronDown size={24} />
// //                 </button>
// //               </div>

// //               {/* Question content */}
// //               <div className="flex-1">
// //                 <h2
// //                   className="text-xl font-semibold text-white cursor-pointer hover:text-purple-400 transition-colors"
// //                   onClick={() => toggleQuestion(question._id)}
// //                 >
// //                   {question.title}
// //                 </h2>

// //                 <p className="mt-2 text-gray-300">{question.body}</p>

// //                 <div className="mt-4 flex flex-wrap gap-2">
// //                   {question.tags.map(tag => (
// //                     <span
// //                       key={tag}
// //                       className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm"
// //                     >
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>

// //                 <div className="mt-4 flex items-center justify-between text-gray-400 text-sm">
// //                   <div className="flex items-center gap-2">
// //                     <MessageCircle size={16} />
// //                     <span>0 answers</span>
// //                   </div>
// //                   <div>
// //                     Asked by {question.user?.username} on {formatDate(question.createdAt)}
// //                   </div>
// //                 </div>

// //                 {/* Answers section */}
// //                 {expandedQuestions.has(question._id) && (
// //                   <div className="mt-6 border-t border-gray-700 pt-4">
// //                     <h3 className="text-lg font-medium text-white mb-4">Answers</h3>

// //                     {/* Answer form */}
// //                     <div className="mb-6">
// //                       <textarea
// //                         className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
// //                         placeholder="Write your answer..."
// //                         rows="4"
// //                       />
// //                       <button className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity">
// //                         Post Answer
// //                       </button>
// //                     </div>

// //                     {/* Answer list placeholder */}
// //                     <div className="text-gray-400">
// //                       No answers yet. Be the first to answer!
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuestionsAndAnswers;
// import React, { useState, useEffect } from 'react';
// import { ChevronUp, ChevronDown, MessageCircle, Search, Filter, Plus } from 'lucide-react';
// import Navbar from './shared/Navbar';

// const QuestionsAndAnswers = () => {
//   const [questions, setQuestions] = useState([]);
//   const [expandedQuestions, setExpandedQuestions] = useState(new Set());
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedTags, setSelectedTags] = useState([]);
//   const [showCreateModal, setShowCreateModal] = useState(false);

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/questions');
//       if (!response.ok) throw new Error('Failed to fetch questions');
//       const data = await response.json();
//       setQuestions(data);
//     } catch (err) {
//       setError('Failed to load questions');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleQuestion = (questionId) => {
//     setExpandedQuestions(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(questionId)) {
//         newSet.delete(questionId);
//       } else {
//         newSet.add(questionId);
//       }
//       return newSet;
//     });
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const allTags = Array.from(new Set(questions.flatMap(q => q.tags)));

//   const toggleTag = (tag) => {
//     setSelectedTags(prev =>
//       prev.includes(tag)
//         ? prev.filter(t => t !== tag)
//         : [...prev, tag]
//     );
//   };

//   const filteredQuestions = questions.filter(question => {
//     const matchesSearch = question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          question.body.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesTags = selectedTags.length === 0 ||
//                        selectedTags.every(tag => question.tags.includes(tag));
//     return matchesSearch && matchesTags;
//   });

//   if (loading) return (
//     <div className="flex justify-center items-center min-h-screen bg-black">
//       <div className="text-white">Loading questions...</div>
//     </div>
//   );

//   if (error) return (
//     <div className="flex justify-center items-center min-h-screen bg-black">
//       <div className="text-red-400">{error}</div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-black text-white">
//         <Navbar></Navbar>
//       {/* Top Navigation Bar */}
//       <div className="border-b border-gray-800 p-4 mt-3">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex-1 max-w-2xl">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search questions..."
//                 className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//           </div>
//           <button
//             onClick={() => setShowCreateModal(true)}
//             className="ml-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
//           >
//             <Plus size={20} />
//             Ask Question
//           </button>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
//         {/* Sidebar Filters */}
//         <div className="w-64 flex-shrink-0">
//           <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
//             <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
//               <Filter size={20} />
//               Filters
//             </h2>
//             <div className="space-y-2">
//               {allTags.map(tag => (
//                 <button
//                   key={tag}
//                   onClick={() => toggleTag(tag)}
//                   className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
//                     selectedTags.includes(tag)
//                       ? 'bg-white text-black'
//                       : 'text-white hover:bg-gray-800'
//                   }`}
//                 >
//                   {tag}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 space-y-4">
//           {filteredQuestions.map(question => (
//             <div
//               key={question._id}
//               className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
//             >
//               <div className="flex gap-4">
//                 <div className="flex flex-col items-center space-y-2">
//                   <button className="text-gray-400 hover:text-white transition-colors">
//                     <ChevronUp size={24} />
//                   </button>
//                   <span className="font-medium">0</span>
//                   <button className="text-gray-400 hover:text-white transition-colors">
//                     <ChevronDown size={24} />
//                   </button>
//                 </div>

//                 <div className="flex-1">
//                   <h2
//                     className="text-xl font-semibold cursor-pointer hover:text-gray-300 transition-colors"
//                     onClick={() => toggleQuestion(question._id)}
//                   >
//                     {question.title}
//                   </h2>

//                   <p className="mt-2 text-gray-400">{question.body}</p>

//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {question.tags.map(tag => (
//                       <span
//                         key={tag}
//                         className="px-3 py-1 rounded-full bg-gray-800 text-white text-sm"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="mt-4 flex items-center justify-between text-gray-400 text-sm">
//                     <div className="flex items-center gap-2">
//                       <MessageCircle size={16} />
//                       <span>0 answers</span>
//                     </div>
//                     <div>
//                       Asked by {question.user?.username} on {formatDate(question.createdAt)}
//                     </div>
//                   </div>

//                   {expandedQuestions.has(question._id) && (
//                     <div className="mt-6 border-t border-gray-800 pt-4">
//                       <h3 className="text-lg font-medium mb-4">Answers</h3>
//                       <div className="mb-6">
//                         <textarea
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-colors"
//                           placeholder="Write your answer..."
//                           rows="4"
//                         />
//                         <button className="mt-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
//                           Post Answer
//                         </button>
//                       </div>
//                       <div className="text-gray-400">
//                         No answers yet. Be the first to answer!
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionsAndAnswers;
// import React, { useState, useEffect } from "react";
// import {
//   ChevronUp,
//   ChevronDown,
//   MessageCircle,
//   Search,
//   Plus,
//   X,
// } from "lucide-react";
// import Cookies from "js-cookie";

// const QuestionsAndAnswers = () => {
//   const [questions, setQuestions] = useState([]);
//   const [expandedQuestions, setExpandedQuestions] = useState(new Set());
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedTags, setSelectedTags] = useState([]);
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     title: "",
//     body: "",
//     tags: "",
//   });
//   const [answers, setAnswers] = useState({});
//   const [newAnswer, setNewAnswer] = useState("");
//   const [alert, setAlert] = useState({ show: false, message: "", type: "" });
//   const token = Cookies.get("token");

//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   };
//   console.log(token);

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   useEffect(() => {
//     if (alert.show) {
//       const timer = setTimeout(() => {
//         setAlert({ show: false, message: "", type: "" });
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [alert]);

//   const fetchQuestions = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/api/questions");
//       if (!response.ok) throw new Error("Failed to fetch questions");
//       const data = await response.json();
//       setQuestions(data);
//     } catch (err) {
//       setError("Failed to load questions");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchAnswers = async (questionId) => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/api/questions/${questionId}/answers`
//       );
//       if (!response.ok) throw new Error("Failed to fetch answers");
//       const data = await response.json();
//       setAnswers((prev) => ({ ...prev, [questionId]: data.answers }));
//     } catch (err) {
//       console.error("Error fetching answers:", err);
//     }
//   };
//   const handleCreateQuestion = async (e) => {
//     e.preventDefault();

//     // Validate that newQuestion contains necessary data
//     if (!newQuestion.title || !newQuestion.body || !newQuestion.tags) {
//       setAlert({
//         show: true,
//         message: "All fields are required!",
//         type: "error",
//       });
//       return;
//     }

//     try {
//       const response = await fetch(
//         "http://localhost:8000/api/questions/create",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${Cookies.get("token")}`, // Ensure token is passed correctly
//           },
//           credentials: "include", // Ensure credentials (cookies) are included in the request
//           body: JSON.stringify({
//             title: newQuestion.title,
//             body: newQuestion.body,
//             tags: newQuestion.tags.split(",").map((tag) => tag.trim()), // Ensure tags are correctly formatted
//           }),
//         }
//       );

//       if (!response.ok)
//         throw new Error(
//           `Failed to create question, Status: ${response.status}`
//         );

//       setShowCreateModal(false); // Hide the modal after successful creation
//       setNewQuestion({ title: "", body: "", tags: "" }); // Reset form fields
//       setAlert({
//         show: true,
//         message: "Question created successfully!",
//         type: "success",
//       }); // Show success alert
//       fetchQuestions(); // Optionally refresh the questions list
//     } catch (err) {
//       console.error(err);
//       setAlert({
//         show: true,
//         message: "Failed to create question. Please try again.",
//         type: "error",
//       }); // Show error alert
//     }
//   };

//   const handlePostAnswer = async (questionId, token, newAnswer) => {
//     try {
//       const response = await fetch("http://localhost:8000/api/answers", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Pass token in the Authorization header
//         },
//         credentials: "include",
//         body: JSON.stringify({
//           questionId,
//           body: newAnswer, // Answer text to be posted
//         }),
//       });

//       if (!response.ok) throw new Error("Failed to post answer");

//       setNewAnswer("");
//       fetchAnswers(questionId);
//       setAlert({
//         show: true,
//         message: "Answer posted successfully!",
//         type: "success",
//       });
//     } catch (err) {
//       setAlert({ show: true, message: "Failed to post answer", type: "error" });
//     }
//   };

//   const toggleQuestion = async (questionId) => {
//     setExpandedQuestions((prev) => {
//       const newSet = new Set(prev);
//       if (newSet.has(questionId)) {
//         newSet.delete(questionId);
//       } else {
//         newSet.add(questionId);
//         fetchAnswers(questionId);
//       }
//       return newSet;
//     });
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const allTags = Array.from(new Set(questions.flatMap((q) => q.tags)));

//   const toggleTag = (tag) => {
//     setSelectedTags((prev) =>
//       prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
//     );
//   };

//   const filteredQuestions = questions.filter((question) => {
//     const matchesSearch =
//       question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       question.body.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesTags =
//       selectedTags.length === 0 ||
//       selectedTags.every((tag) => question.tags.includes(tag));
//     return matchesSearch && matchesTags;
//   });

//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-black">
//         <div className="text-white">Loading questions...</div>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-black">
//         <div className="text-red-400">{error}</div>
//       </div>
//     );


//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Alert */}
//       {alert.show && (
//         <div
//           className={`fixed top-4 right-4 p-4 rounded-lg ${
//             alert.type === "error" ? "bg-red-500" : "bg-green-500"
//           } text-white shadow-lg transition-opacity duration-300`}
//         >
//           {alert.message}
//         </div>
//       )}

//       {/* Modal */}
//       {showCreateModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-gray-900 rounded-lg p-6 w-full max-w-2xl border border-gray-800 relative">
//             <button
//               onClick={() => setShowCreateModal(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-white"
//             >
//               <X size={24} />
//             </button>

//             <h2 className="text-xl font-semibold mb-4">Ask a Question</h2>

//             <form onSubmit={handleCreateQuestion} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Title</label>
//                 <input
//                   type="text"
//                   value={newQuestion.title}
//                   onChange={(e) =>
//                     setNewQuestion((prev) => ({
//                       ...prev,
//                       title: e.target.value,
//                     }))
//                   }
//                   className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:border-gray-600"
//                   placeholder="What's your question?"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Details
//                 </label>
//                 <textarea
//                   value={newQuestion.body}
//                   onChange={(e) =>
//                     setNewQuestion((prev) => ({
//                       ...prev,
//                       body: e.target.value,
//                     }))
//                   }
//                   className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:border-gray-600"
//                   rows="6"
//                   placeholder="Provide more details..."
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Tags (comma-separated)
//                 </label>
//                 <input
//                   type="text"
//                   value={newQuestion.tags}
//                   onChange={(e) =>
//                     setNewQuestion((prev) => ({
//                       ...prev,
//                       tags: e.target.value,
//                     }))
//                   }
//                   className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:border-gray-600"
//                   placeholder="e.g., javascript, react, node"
//                 />
//               </div>

//               <div className="flex justify-end gap-2 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowCreateModal(false)}
//                   className="px-4 py-2 text-gray-400 hover:text-white"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200"
//                 >
//                   Post Question
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Top Navigation Bar */}
//       <div className="border-b border-gray-800 p-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex-1 max-w-2xl">
//             <div className="relative">
//               <Search
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 placeholder="Search questions..."
//                 className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//           </div>
//           <button
//             onClick={() => setShowCreateModal(true)}
//             className="ml-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
//           >
//             <Plus size={20} />
//             Ask Question
//           </button>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
//         {/* Sidebar Filters */}
//         <div className="w-64 flex-shrink-0">
//           <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
//             <h2 className="text-lg font-semibold mb-4">Filters</h2>
//             <div className="space-y-2">
//               {allTags.map((tag) => (
//                 <button
//                   key={tag}
//                   onClick={() => toggleTag(tag)}
//                   className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
//                     selectedTags.includes(tag)
//                       ? "bg-white text-black"
//                       : "text-white hover:bg-gray-800"
//                   }`}
//                 >
//                   {tag}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 space-y-4">
//           {filteredQuestions.map((question) => (
//             <div
//               key={question._id}
//               className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
//             >
//               <div className="flex gap-4">
//                 <div className="flex flex-col items-center space-y-2">
//                   <button className="text-gray-400 hover:text-white transition-colors">
//                     <ChevronUp size={24} />
//                   </button>
//                   <span className="font-medium">0</span>
//                   <button className="text-gray-400 hover:text-white transition-colors">
//                     <ChevronDown size={24} />
//                   </button>
//                 </div>

//                 <div className="flex-1">
//                   <h2
//                     className="text-xl font-semibold cursor-pointer hover:text-gray-300 transition-colors"
//                     onClick={() => toggleQuestion(question._id)}
//                   >
//                     {question.title}
//                   </h2>

//                   <p className="mt-2 text-gray-400">{question.body}</p>

//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {question.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="px-3 py-1 rounded-full bg-gray-800 text-white text-sm"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="mt-4 flex items-center justify-between text-gray-400 text-sm">
//                     <div className="flex items-center gap-2">
//                       <MessageCircle size={16} />
//                       <span>
//                         {(answers[question._id] || []).length} answers
//                       </span>
//                     </div>
//                     <div>
//                       Asked by {question.user?.username} on{" "}
//                       {formatDate(question.createdAt)}
//                     </div>
//                   </div>

//                   {expandedQuestions.has(question._id) && (
//                     <div className="mt-6 border-t border-gray-800 pt-4">
//                       <h3 className="text-lg font-medium mb-4">Answers</h3>

//                       {/* Answer Form */}
//                       <div className="mb-6">
//                         <textarea
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-colors"
//                           placeholder="Write your answer..."
//                           rows="4"
//                           value={newAnswer}
//                           onChange={(e) => setNewAnswer(e.target.value)}
//                         />
//                         <button
//                           onClick={() => handlePostAnswer(question._id)}
//                           className="mt-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
//                         >
//                           Post Answer
//                         </button>
//                       </div>

//                       {/* Answers List */}
//                       <div className="space-y-4">
//                         {answers[question._id] &&
//                         answers[question._id].length > 0 ? (
//                           answers[question._id].map((answer) => (
//                             <div
//                               key={answer._id}
//                               className="border-l-2 border-gray-800 pl-4"
//                             >
//                               <p className="text-gray-300">{answer.body}</p>
//                               <div className="mt-2 text-sm text-gray-400">
//                                 Answered by {answer.user.username} on{" "}
//                                 {formatDate(answer.createdAt)}
//                               </div>
//                             </div>
//                           ))
//                         ) : (
//                           <div className="text-gray-400">
//                             No answers yet. Be the first to answer!
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionsAndAnswers;
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = Cookies.get("token");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/questions");
      if (!response.ok) throw new Error("Failed to fetch questions");
      const data = await response.json();
      setQuestions(data);
    } catch (err) {
      setError("Failed to load questions");
    } finally {
      setLoading(false);
    }
  };

  const handleQuestionClick = (questionId) => {
    // Using traditional anchor tag for navigation
    window.location.href = `/questions/${questionId}`;
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="text-white">Loading questions...</div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="text-red-400">{error}</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        <div className="flex-1 space-y-4">
          {questions.map((question) => (
            <div
              key={question._id}
              className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
            >
              <div className="flex gap-4">
                <div className="flex flex-col items-center space-y-2">
                  {/* You can add any additional elements here like like/dislike buttons */}
                </div>

                <div className="flex-1">
                  <h2
                    className="text-xl font-semibold cursor-pointer hover:text-gray-300 transition-colors"
                    onClick={() => handleQuestionClick(question._id)} // Handle the click for redirection
                  >
                    {question.title}
                  </h2>

                  <p className="mt-2 text-gray-400">{question.body}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {question.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-gray-800 text-white text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;
