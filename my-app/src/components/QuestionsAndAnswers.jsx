// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { ChevronUp, ChevronDown, MessageCircle } from 'lucide-react';

// // // // // const QuestionsAndAnswers = () => {
// // // // //   const [questions, setQuestions] = useState([]);
// // // // //   const [expandedQuestions, setExpandedQuestions] = useState(new Set());
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     fetchQuestions();
// // // // //   }, []);

// // // // //   const fetchQuestions = async () => {
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:8000/api/questions');
// // // // //       if (!response.ok) throw new Error('Failed to fetch questions');
// // // // //       const data = await response.json();
// // // // //       setQuestions(data);
// // // // //     } catch (err) {
// // // // //       setError('Failed to load questions');
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const toggleQuestion = (questionId) => {
// // // // //     setExpandedQuestions(prev => {
// // // // //       const newSet = new Set(prev);
// // // // //       if (newSet.has(questionId)) {
// // // // //         newSet.delete(questionId);
// // // // //       } else {
// // // // //         newSet.add(questionId);
// // // // //       }
// // // // //       return newSet;
// // // // //     });
// // // // //   };

// // // // //   const formatDate = (dateString) => {
// // // // //     return new Date(dateString).toLocaleDateString('en-US', {
// // // // //       year: 'numeric',
// // // // //       month: 'short',
// // // // //       day: 'numeric'
// // // // //     });
// // // // //   };

// // // // //   if (loading) return (
// // // // //     <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-900">
// // // // //       <div className="text-purple-400">Loading questions...</div>
// // // // //     </div>
// // // // //   );

// // // // //   if (error) return (
// // // // //     <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-900">
// // // // //       <div className="text-red-400">{error}</div>
// // // // //     </div>
// // // // //   );

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 p-6">
// // // // //       <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
// // // // //         Questions
// // // // //       </h1>

// // // // //       <div className="space-y-4">
// // // // //         {questions.map(question => (
// // // // //           <div
// // // // //             key={question._id}
// // // // //             className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg shadow-lg backdrop-blur-sm"
// // // // //           >
// // // // //             <div className="flex gap-4">
// // // // //               {/* Vote controls */}
// // // // //               <div className="flex flex-col items-center space-y-2">
// // // // //                 <button className="text-gray-400 hover:text-purple-400 transition-colors">
// // // // //                   <ChevronUp size={24} />
// // // // //                 </button>
// // // // //                 <span className="text-white font-medium">0</span>
// // // // //                 <button className="text-gray-400 hover:text-purple-400 transition-colors">
// // // // //                   <ChevronDown size={24} />
// // // // //                 </button>
// // // // //               </div>

// // // // //               {/* Question content */}
// // // // //               <div className="flex-1">
// // // // //                 <h2
// // // // //                   className="text-xl font-semibold text-white cursor-pointer hover:text-purple-400 transition-colors"
// // // // //                   onClick={() => toggleQuestion(question._id)}
// // // // //                 >
// // // // //                   {question.title}
// // // // //                 </h2>

// // // // //                 <p className="mt-2 text-gray-300">{question.body}</p>

// // // // //                 <div className="mt-4 flex flex-wrap gap-2">
// // // // //                   {question.tags.map(tag => (
// // // // //                     <span
// // // // //                       key={tag}
// // // // //                       className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm"
// // // // //                     >
// // // // //                       {tag}
// // // // //                     </span>
// // // // //                   ))}
// // // // //                 </div>

// // // // //                 <div className="mt-4 flex items-center justify-between text-gray-400 text-sm">
// // // // //                   <div className="flex items-center gap-2">
// // // // //                     <MessageCircle size={16} />
// // // // //                     <span>0 answers</span>
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     Asked by {question.user?.username} on {formatDate(question.createdAt)}
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Answers section */}
// // // // //                 {expandedQuestions.has(question._id) && (
// // // // //                   <div className="mt-6 border-t border-gray-700 pt-4">
// // // // //                     <h3 className="text-lg font-medium text-white mb-4">Answers</h3>

// // // // //                     {/* Answer form */}
// // // // //                     <div className="mb-6">
// // // // //                       <textarea
// // // // //                         className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
// // // // //                         placeholder="Write your answer..."
// // // // //                         rows="4"
// // // // //                       />
// // // // //                       <button className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity">
// // // // //                         Post Answer
// // // // //                       </button>
// // // // //                     </div>

// // // // //                     {/* Answer list placeholder */}
// // // // //                     <div className="text-gray-400">
// // // // //                       No answers yet. Be the first to answer!
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default QuestionsAndAnswers;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { ChevronUp, ChevronDown, MessageCircle, Search, Filter, Plus } from 'lucide-react';
// // // // import Navbar from './shared/Navbar';

// // // // const QuestionsAndAnswers = () => {
// // // //   const [questions, setQuestions] = useState([]);
// // // //   const [expandedQuestions, setExpandedQuestions] = useState(new Set());
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [searchQuery, setSearchQuery] = useState('');
// // // //   const [selectedTags, setSelectedTags] = useState([]);
// // // //   const [showCreateModal, setShowCreateModal] = useState(false);

// // // //   useEffect(() => {
// // // //     fetchQuestions();
// // // //   }, []);

// // // //   const fetchQuestions = async () => {
// // // //     try {
// // // //       const response = await fetch('http://localhost:8000/api/questions');
// // // //       if (!response.ok) throw new Error('Failed to fetch questions');
// // // //       const data = await response.json();
// // // //       setQuestions(data);
// // // //     } catch (err) {
// // // //       setError('Failed to load questions');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const toggleQuestion = (questionId) => {
// // // //     setExpandedQuestions(prev => {
// // // //       const newSet = new Set(prev);
// // // //       if (newSet.has(questionId)) {
// // // //         newSet.delete(questionId);
// // // //       } else {
// // // //         newSet.add(questionId);
// // // //       }
// // // //       return newSet;
// // // //     });
// // // //   };

// // // //   const formatDate = (dateString) => {
// // // //     return new Date(dateString).toLocaleDateString('en-US', {
// // // //       year: 'numeric',
// // // //       month: 'short',
// // // //       day: 'numeric'
// // // //     });
// // // //   };

// // // //   const allTags = Array.from(new Set(questions.flatMap(q => q.tags)));

// // // //   const toggleTag = (tag) => {
// // // //     setSelectedTags(prev =>
// // // //       prev.includes(tag)
// // // //         ? prev.filter(t => t !== tag)
// // // //         : [...prev, tag]
// // // //     );
// // // //   };

// // // //   const filteredQuestions = questions.filter(question => {
// // // //     const matchesSearch = question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //                          question.body.toLowerCase().includes(searchQuery.toLowerCase());
// // // //     const matchesTags = selectedTags.length === 0 ||
// // // //                        selectedTags.every(tag => question.tags.includes(tag));
// // // //     return matchesSearch && matchesTags;
// // // //   });

// // // //   if (loading) return (
// // // //     <div className="flex justify-center items-center min-h-screen bg-black">
// // // //       <div className="text-white">Loading questions...</div>
// // // //     </div>
// // // //   );

// // // //   if (error) return (
// // // //     <div className="flex justify-center items-center min-h-screen bg-black">
// // // //       <div className="text-red-400">{error}</div>
// // // //     </div>
// // // //   );

// // // //   return (
// // // //     <div className="min-h-screen bg-black text-white">
// // // //         <Navbar></Navbar>
// // // //       {/* Top Navigation Bar */}
// // // //       <div className="border-b border-gray-800 p-4 mt-3">
// // // //         <div className="max-w-7xl mx-auto flex items-center justify-between">
// // // //           <div className="flex-1 max-w-2xl">
// // // //             <div className="relative">
// // // //               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Search questions..."
// // // //                 className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600"
// // // //                 value={searchQuery}
// // // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <button
// // // //             onClick={() => setShowCreateModal(true)}
// // // //             className="ml-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
// // // //           >
// // // //             <Plus size={20} />
// // // //             Ask Question
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
// // // //         {/* Sidebar Filters */}
// // // //         <div className="w-64 flex-shrink-0">
// // // //           <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
// // // //             <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
// // // //               <Filter size={20} />
// // // //               Filters
// // // //             </h2>
// // // //             <div className="space-y-2">
// // // //               {allTags.map(tag => (
// // // //                 <button
// // // //                   key={tag}
// // // //                   onClick={() => toggleTag(tag)}
// // // //                   className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
// // // //                     selectedTags.includes(tag)
// // // //                       ? 'bg-white text-black'
// // // //                       : 'text-white hover:bg-gray-800'
// // // //                   }`}
// // // //                 >
// // // //                   {tag}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Main Content */}
// // // //         <div className="flex-1 space-y-4">
// // // //           {filteredQuestions.map(question => (
// // // //             <div
// // // //               key={question._id}
// // // //               className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
// // // //             >
// // // //               <div className="flex gap-4">
// // // //                 <div className="flex flex-col items-center space-y-2">
// // // //                   <button className="text-gray-400 hover:text-white transition-colors">
// // // //                     <ChevronUp size={24} />
// // // //                   </button>
// // // //                   <span className="font-medium">0</span>
// // // //                   <button className="text-gray-400 hover:text-white transition-colors">
// // // //                     <ChevronDown size={24} />
// // // //                   </button>
// // // //                 </div>

// // // //                 <div className="flex-1">
// // // //                   <h2
// // // //                     className="text-xl font-semibold cursor-pointer hover:text-gray-300 transition-colors"
// // // //                     onClick={() => toggleQuestion(question._id)}
// // // //                   >
// // // //                     {question.title}
// // // //                   </h2>

// // // //                   <p className="mt-2 text-gray-400">{question.body}</p>

// // // //                   <div className="mt-4 flex flex-wrap gap-2">
// // // //                     {question.tags.map(tag => (
// // // //                       <span
// // // //                         key={tag}
// // // //                         className="px-3 py-1 rounded-full bg-gray-800 text-white text-sm"
// // // //                       >
// // // //                         {tag}
// // // //                       </span>
// // // //                     ))}
// // // //                   </div>

// // // //                   <div className="mt-4 flex items-center justify-between text-gray-400 text-sm">
// // // //                     <div className="flex items-center gap-2">
// // // //                       <MessageCircle size={16} />
// // // //                       <span>0 answers</span>
// // // //                     </div>
// // // //                     <div>
// // // //                       Asked by {question.user?.username} on {formatDate(question.createdAt)}
// // // //                     </div>
// // // //                   </div>

// // // //                   {expandedQuestions.has(question._id) && (
// // // //                     <div className="mt-6 border-t border-gray-800 pt-4">
// // // //                       <h3 className="text-lg font-medium mb-4">Answers</h3>
// // // //                       <div className="mb-6">
// // // //                         <textarea
// // // //                           className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-colors"
// // // //                           placeholder="Write your answer..."
// // // //                           rows="4"
// // // //                         />
// // // //                         <button className="mt-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
// // // //                           Post Answer
// // // //                         </button>
// // // //                       </div>
// // // //                       <div className="text-gray-400">
// // // //                         No answers yet. Be the first to answer!
// // // //                       </div>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default QuestionsAndAnswers;
// // // // import React, { useState, useEffect } from "react";
// // // // import {
// // // //   ChevronUp,
// // // //   ChevronDown,
// // // //   MessageCircle,
// // // //   Search,
// // // //   Plus,
// // // //   X,
// // // // } from "lucide-react";
// // // // import Cookies from "js-cookie";

// // // // const QuestionsAndAnswers = () => {
// // // //   const [questions, setQuestions] = useState([]);
// // // //   const [expandedQuestions, setExpandedQuestions] = useState(new Set());
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [searchQuery, setSearchQuery] = useState("");
// // // //   const [selectedTags, setSelectedTags] = useState([]);
// // // //   const [showCreateModal, setShowCreateModal] = useState(false);
// // // //   const [newQuestion, setNewQuestion] = useState({
// // // //     title: "",
// // // //     body: "",
// // // //     tags: "",
// // // //   });
// // // //   const [answers, setAnswers] = useState({});
// // // //   const [newAnswer, setNewAnswer] = useState("");
// // // //   const [alert, setAlert] = useState({ show: false, message: "", type: "" });
// // // //   const token = Cookies.get("token");

// // // //   const headers = {
// // // //     "Content-Type": "application/json",
// // // //     Authorization: `Bearer ${token}`,
// // // //   };
// // // //   console.log(token);

// // // //   useEffect(() => {
// // // //     fetchQuestions();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (alert.show) {
// // // //       const timer = setTimeout(() => {
// // // //         setAlert({ show: false, message: "", type: "" });
// // // //       }, 3000);
// // // //       return () => clearTimeout(timer);
// // // //     }
// // // //   }, [alert]);

// // // //   const fetchQuestions = async () => {
// // // //     try {
// // // //       const response = await fetch("http://localhost:8000/api/questions");
// // // //       if (!response.ok) throw new Error("Failed to fetch questions");
// // // //       const data = await response.json();
// // // //       setQuestions(data);
// // // //     } catch (err) {
// // // //       setError("Failed to load questions");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const fetchAnswers = async (questionId) => {
// // // //     try {
// // // //       const response = await fetch(
// // // //         `http://localhost:8000/api/questions/${questionId}/answers`
// // // //       );
// // // //       if (!response.ok) throw new Error("Failed to fetch answers");
// // // //       const data = await response.json();
// // // //       setAnswers((prev) => ({ ...prev, [questionId]: data.answers }));
// // // //     } catch (err) {
// // // //       console.error("Error fetching answers:", err);
// // // //     }
// // // //   };
// // // //   const handleCreateQuestion = async (e) => {
// // // //     e.preventDefault();

// // // //     // Validate that newQuestion contains necessary data
// // // //     if (!newQuestion.title || !newQuestion.body || !newQuestion.tags) {
// // // //       setAlert({
// // // //         show: true,
// // // //         message: "All fields are required!",
// // // //         type: "error",
// // // //       });
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const response = await fetch(
// // // //         "http://localhost:8000/api/questions/create",
// // // //         {
// // // //           method: "POST",
// // // //           headers: {
// // // //             "Content-Type": "application/json",
// // // //             Authorization: `Bearer ${Cookies.get("token")}`, // Ensure token is passed correctly
// // // //           },
// // // //           credentials: "include", // Ensure credentials (cookies) are included in the request
// // // //           body: JSON.stringify({
// // // //             title: newQuestion.title,
// // // //             body: newQuestion.body,
// // // //             tags: newQuestion.tags.split(",").map((tag) => tag.trim()), // Ensure tags are correctly formatted
// // // //           }),
// // // //         }
// // // //       );

// // // //       if (!response.ok)
// // // //         throw new Error(
// // // //           `Failed to create question, Status: ${response.status}`
// // // //         );

// // // //       setShowCreateModal(false); // Hide the modal after successful creation
// // // //       setNewQuestion({ title: "", body: "", tags: "" }); // Reset form fields
// // // //       setAlert({
// // // //         show: true,
// // // //         message: "Question created successfully!",
// // // //         type: "success",
// // // //       }); // Show success alert
// // // //       fetchQuestions(); // Optionally refresh the questions list
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       setAlert({
// // // //         show: true,
// // // //         message: "Failed to create question. Please try again.",
// // // //         type: "error",
// // // //       }); // Show error alert
// // // //     }
// // // //   };

// // // //   const handlePostAnswer = async (questionId, token, newAnswer) => {
// // // //     try {
// // // //       const response = await fetch("http://localhost:8000/api/answers", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //           Authorization: `Bearer ${token}`, // Pass token in the Authorization header
// // // //         },
// // // //         credentials: "include",
// // // //         body: JSON.stringify({
// // // //           questionId,
// // // //           body: newAnswer, // Answer text to be posted
// // // //         }),
// // // //       });

// // // //       if (!response.ok) throw new Error("Failed to post answer");

// // // //       setNewAnswer("");
// // // //       fetchAnswers(questionId);
// // // //       setAlert({
// // // //         show: true,
// // // //         message: "Answer posted successfully!",
// // // //         type: "success",
// // // //       });
// // // //     } catch (err) {
// // // //       setAlert({ show: true, message: "Failed to post answer", type: "error" });
// // // //     }
// // // //   };

// // // //   const toggleQuestion = async (questionId) => {
// // // //     setExpandedQuestions((prev) => {
// // // //       const newSet = new Set(prev);
// // // //       if (newSet.has(questionId)) {
// // // //         newSet.delete(questionId);
// // // //       } else {
// // // //         newSet.add(questionId);
// // // //         fetchAnswers(questionId);
// // // //       }
// // // //       return newSet;
// // // //     });
// // // //   };

// // // //   const formatDate = (dateString) => {
// // // //     return new Date(dateString).toLocaleDateString("en-US", {
// // // //       year: "numeric",
// // // //       month: "short",
// // // //       day: "numeric",
// // // //     });
// // // //   };

// // // //   const allTags = Array.from(new Set(questions.flatMap((q) => q.tags)));

// // // //   const toggleTag = (tag) => {
// // // //     setSelectedTags((prev) =>
// // // //       prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
// // // //     );
// // // //   };

// // // //   const filteredQuestions = questions.filter((question) => {
// // // //     const matchesSearch =
// // // //       question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //       question.body.toLowerCase().includes(searchQuery.toLowerCase());
// // // //     const matchesTags =
// // // //       selectedTags.length === 0 ||
// // // //       selectedTags.every((tag) => question.tags.includes(tag));
// // // //     return matchesSearch && matchesTags;
// // // //   });

// // // //   if (loading)
// // // //     return (
// // // //       <div className="flex justify-center items-center min-h-screen bg-black">
// // // //         <div className="text-white">Loading questions...</div>
// // // //       </div>
// // // //     );

// // // //   if (error)
// // // //     return (
// // // //       <div className="flex justify-center items-center min-h-screen bg-black">
// // // //         <div className="text-red-400">{error}</div>
// // // //       </div>
// // // //     );

// // // //   return (
// // // //     <div className="min-h-screen bg-black text-white">
// // // //       {/* Alert */}
// // // //       {alert.show && (
// // // //         <div
// // // //           className={`fixed top-4 right-4 p-4 rounded-lg ${
// // // //             alert.type === "error" ? "bg-red-500" : "bg-green-500"
// // // //           } text-white shadow-lg transition-opacity duration-300`}
// // // //         >
// // // //           {alert.message}
// // // //         </div>
// // // //       )}

// // // //       {/* Modal */}
// // // //       {showCreateModal && (
// // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // // //           <div className="bg-gray-900 rounded-lg p-6 w-full max-w-2xl border border-gray-800 relative">
// // // //             <button
// // // //               onClick={() => setShowCreateModal(false)}
// // // //               className="absolute top-4 right-4 text-gray-400 hover:text-white"
// // // //             >
// // // //               <X size={24} />
// // // //             </button>

// // // //             <h2 className="text-xl font-semibold mb-4">Ask a Question</h2>

// // // //             <form onSubmit={handleCreateQuestion} className="space-y-4">
// // // //               <div>
// // // //                 <label className="block text-sm font-medium mb-1">Title</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   value={newQuestion.title}
// // // //                   onChange={(e) =>
// // // //                     setNewQuestion((prev) => ({
// // // //                       ...prev,
// // // //                       title: e.target.value,
// // // //                     }))
// // // //                   }
// // // //                   className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:border-gray-600"
// // // //                   placeholder="What's your question?"
// // // //                   required
// // // //                 />
// // // //               </div>

// // // //               <div>
// // // //                 <label className="block text-sm font-medium mb-1">
// // // //                   Details
// // // //                 </label>
// // // //                 <textarea
// // // //                   value={newQuestion.body}
// // // //                   onChange={(e) =>
// // // //                     setNewQuestion((prev) => ({
// // // //                       ...prev,
// // // //                       body: e.target.value,
// // // //                     }))
// // // //                   }
// // // //                   className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:border-gray-600"
// // // //                   rows="6"
// // // //                   placeholder="Provide more details..."
// // // //                   required
// // // //                 />
// // // //               </div>

// // // //               <div>
// // // //                 <label className="block text-sm font-medium mb-1">
// // // //                   Tags (comma-separated)
// // // //                 </label>
// // // //                 <input
// // // //                   type="text"
// // // //                   value={newQuestion.tags}
// // // //                   onChange={(e) =>
// // // //                     setNewQuestion((prev) => ({
// // // //                       ...prev,
// // // //                       tags: e.target.value,
// // // //                     }))
// // // //                   }
// // // //                   className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:border-gray-600"
// // // //                   placeholder="e.g., javascript, react, node"
// // // //                 />
// // // //               </div>

// // // //               <div className="flex justify-end gap-2 pt-4">
// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={() => setShowCreateModal(false)}
// // // //                   className="px-4 py-2 text-gray-400 hover:text-white"
// // // //                 >
// // // //                   Cancel
// // // //                 </button>
// // // //                 <button
// // // //                   type="submit"
// // // //                   className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200"
// // // //                 >
// // // //                   Post Question
// // // //                 </button>
// // // //               </div>
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* Top Navigation Bar */}
// // // //       <div className="border-b border-gray-800 p-4">
// // // //         <div className="max-w-7xl mx-auto flex items-center justify-between">
// // // //           <div className="flex-1 max-w-2xl">
// // // //             <div className="relative">
// // // //               <Search
// // // //                 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
// // // //                 size={20}
// // // //               />
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Search questions..."
// // // //                 className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600"
// // // //                 value={searchQuery}
// // // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <button
// // // //             onClick={() => setShowCreateModal(true)}
// // // //             className="ml-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
// // // //           >
// // // //             <Plus size={20} />
// // // //             Ask Question
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
// // // //         {/* Sidebar Filters */}
// // // //         <div className="w-64 flex-shrink-0">
// // // //           <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
// // // //             <h2 className="text-lg font-semibold mb-4">Filters</h2>
// // // //             <div className="space-y-2">
// // // //               {allTags.map((tag) => (
// // // //                 <button
// // // //                   key={tag}
// // // //                   onClick={() => toggleTag(tag)}
// // // //                   className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
// // // //                     selectedTags.includes(tag)
// // // //                       ? "bg-white text-black"
// // // //                       : "text-white hover:bg-gray-800"
// // // //                   }`}
// // // //                 >
// // // //                   {tag}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Main Content */}
// // // //         <div className="flex-1 space-y-4">
// // // //           {filteredQuestions.map((question) => (
// // // //             <div
// // // //               key={question._id}
// // // //               className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
// // // //             >
// // // //               <div className="flex gap-4">
// // // //                 <div className="flex flex-col items-center space-y-2">
// // // //                   <button className="text-gray-400 hover:text-white transition-colors">
// // // //                     <ChevronUp size={24} />
// // // //                   </button>
// // // //                   <span className="font-medium">0</span>
// // // //                   <button className="text-gray-400 hover:text-white transition-colors">
// // // //                     <ChevronDown size={24} />
// // // //                   </button>
// // // //                 </div>

// // // //                 <div className="flex-1">
// // // //                   <h2
// // // //                     className="text-xl font-semibold cursor-pointer hover:text-gray-300 transition-colors"
// // // //                     onClick={() => toggleQuestion(question._id)}
// // // //                   >
// // // //                     {question.title}
// // // //                   </h2>

// // // //                   <p className="mt-2 text-gray-400">{question.body}</p>

// // // //                   <div className="mt-4 flex flex-wrap gap-2">
// // // //                     {question.tags.map((tag) => (
// // // //                       <span
// // // //                         key={tag}
// // // //                         className="px-3 py-1 rounded-full bg-gray-800 text-white text-sm"
// // // //                       >
// // // //                         {tag}
// // // //                       </span>
// // // //                     ))}
// // // //                   </div>

// // // //                   <div className="mt-4 flex items-center justify-between text-gray-400 text-sm">
// // // //                     <div className="flex items-center gap-2">
// // // //                       <MessageCircle size={16} />
// // // //                       <span>
// // // //                         {(answers[question._id] || []).length} answers
// // // //                       </span>
// // // //                     </div>
// // // //                     <div>
// // // //                       Asked by {question.user?.username} on{" "}
// // // //                       {formatDate(question.createdAt)}
// // // //                     </div>
// // // //                   </div>

// // // //                   {expandedQuestions.has(question._id) && (
// // // //                     <div className="mt-6 border-t border-gray-800 pt-4">
// // // //                       <h3 className="text-lg font-medium mb-4">Answers</h3>

// // // //                       {/* Answer Form */}
// // // //                       <div className="mb-6">
// // // //                         <textarea
// // // //                           className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-colors"
// // // //                           placeholder="Write your answer..."
// // // //                           rows="4"
// // // //                           value={newAnswer}
// // // //                           onChange={(e) => setNewAnswer(e.target.value)}
// // // //                         />
// // // //                         <button
// // // //                           onClick={() => handlePostAnswer(question._id)}
// // // //                           className="mt-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
// // // //                         >
// // // //                           Post Answer
// // // //                         </button>
// // // //                       </div>

// // // //                       {/* Answers List */}
// // // //                       <div className="space-y-4">
// // // //                         {answers[question._id] &&
// // // //                         answers[question._id].length > 0 ? (
// // // //                           answers[question._id].map((answer) => (
// // // //                             <div
// // // //                               key={answer._id}
// // // //                               className="border-l-2 border-gray-800 pl-4"
// // // //                             >
// // // //                               <p className="text-gray-300">{answer.body}</p>
// // // //                               <div className="mt-2 text-sm text-gray-400">
// // // //                                 Answered by {answer.user.username} on{" "}
// // // //                                 {formatDate(answer.createdAt)}
// // // //                               </div>
// // // //                             </div>
// // // //                           ))
// // // //                         ) : (
// // // //                           <div className="text-gray-400">
// // // //                             No answers yet. Be the first to answer!
// // // //                           </div>
// // // //                         )}
// // // //                       </div>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default QuestionsAndAnswers;
// // // import { useState, useEffect } from 'react';
// // // import Cookies from 'js-cookie';

// // // const QuestionsAndAnswers = () => {
// // //   const [questions, setQuestions] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const token = Cookies.get("token");

// // //   const headers = {
// // //     "Content-Type": "application/json",
// // //     Authorization: `Bearer ${token}`,
// // //   };

// // //   useEffect(() => {
// // //     fetchQuestions();
// // //   }, []);

// // //   const fetchQuestions = async () => {
// // //     try {
// // //       const response = await fetch("http://localhost:8000/api/questions");
// // //       if (!response.ok) throw new Error("Failed to fetch questions");
// // //       const data = await response.json();
// // //       setQuestions(data);
// // //     } catch (err) {
// // //       setError("Failed to load questions");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleQuestionClick = (questionId) => {
// // //     // Using traditional anchor tag for navigation
// // //     window.location.href = `/questions/${questionId}`;
// // //   };

// // //   if (loading)
// // //     return (
// // //       <div className="flex justify-center items-center min-h-screen bg-black">
// // //         <div className="text-white">Loading questions...</div>
// // //       </div>
// // //     );

// // //   if (error)
// // //     return (
// // //       <div className="flex justify-center items-center min-h-screen bg-black">
// // //         <div className="text-red-400">{error}</div>
// // //       </div>
// // //     );

// // //   return (
// // //     <div className="min-h-screen bg-black text-white">
// // //       <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
// // //         <div className="flex-1 space-y-4">
// // //           {questions.map((question) => (
// // //             <div
// // //               key={question._id}
// // //               className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
// // //             >
// // //               <div className="flex gap-4">
// // //                 <div className="flex flex-col items-center space-y-2">
// // //                   {/* You can add any additional elements here like like/dislike buttons */}
// // //                 </div>

// // //                 <div className="flex-1">
// // //                   <h2
// // //                     className="text-xl font-semibold cursor-pointer hover:text-gray-300 transition-colors"
// // //                     onClick={() => handleQuestionClick(question._id)} // Handle the click for redirection
// // //                   >
// // //                     {question.title}
// // //                   </h2>

// // //                   <p className="mt-2 text-gray-400">{question.body}</p>

// // //                   <div className="mt-4 flex flex-wrap gap-2">
// // //                     {question.tags.map((tag) => (
// // //                       <span
// // //                         key={tag}
// // //                         className="px-3 py-1 rounded-full bg-gray-800 text-white text-sm"
// // //                       >
// // //                         {tag}
// // //                       </span>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default QuestionsAndAnswers;
// // import { useState, useEffect } from 'react';
// // import Cookies from 'js-cookie';
// // import Navbar from './shared/Navbar';

// // const QuestionsAndAnswers = () => {
// //   const [questions, setQuestions] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [filters, setFilters] = useState({
// //     search: '',
// //     tags: [],
// //     sortBy: 'newest'
// //   });
// //   const [availableTags, setAvailableTags] = useState([]);

// //   const token = Cookies.get("token");

// //   const headers = {
// //     "Content-Type": "application/json",
// //     Authorization: `Bearer ${token}`,
// //   };

// //   useEffect(() => {
// //     fetchQuestions();
// //   }, []);

// //   useEffect(() => {
// //     // Extract unique tags from questions
// //     const tags = [...new Set(questions.flatMap(q => q.tags))];
// //     setAvailableTags(tags);
// //   }, [questions]);

// //   const fetchQuestions = async () => {
// //     try {
// //       const response = await fetch("http://localhost:8000/api/questions");
// //       if (!response.ok) throw new Error("Failed to fetch questions");
// //       const data = await response.json();
// //       setQuestions(data);
// //     } catch (err) {
// //       setError("Failed to load questions");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleVote = (questionId, voteType) => {
// //     // Implement voting logic here
// //     console.log(`Voted ${voteType} for question ${questionId}`);
// //   };

// //   const filteredQuestions = questions.filter(question => {
// //     const matchesSearch =
// //       question.title.toLowerCase().includes(filters.search.toLowerCase()) ||
// //       question.body.toLowerCase().includes(filters.search.toLowerCase());

// //     const matchesTags =
// //       filters.tags.length === 0 ||
// //       filters.tags.some(tag => question.tags.includes(tag));

// //     return matchesSearch && matchesTags;
// //   });

// //   const sortedQuestions = [...filteredQuestions].sort((a, b) => {
// //     switch (filters.sortBy) {
// //       case 'votes':
// //         return (b.votes || 0) - (a.votes || 0);
// //       case 'answers':
// //         return (b.answers || 0) - (a.answers || 0);
// //       default:
// //         return new Date(b.createdAt) - new Date(a.createdAt);
// //     }
// //   });

// //   if (loading) return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-900">
// //       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
// //     </div>
// //   );

// //   if (error) return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-900">
// //       <div className="text-red-400 bg-red-400/10 px-4 py-2 rounded-lg">{error}</div>
// //     </div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-gray-900">
// //         <Navbar></Navbar>
// //       <div className="max-w-7xl mx-auto px-4 py-6">
// //         {/* Filters Section */}
// //         <div className="mb-8 space-y-4">
// //           <div className="flex gap-4 items-center">
// //             <input
// //               type="text"
// //               placeholder="Search questions..."
// //               className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
// //               value={filters.search}
// //               onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
// //             />
// //             <select
// //               className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
// //               value={filters.sortBy}
// //               onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
// //             >
// //               <option value="newest">Newest</option>
// //               <option value="votes">Most Votes</option>
// //               <option value="answers">Most Answers</option>
// //             </select>
// //           </div>
// //           <div className="flex flex-wrap gap-2">
// //             {availableTags.map(tag => (
// //               <button
// //                 key={tag}
// //                 className={`px-3 py-1 rounded-full text-sm transition-colors ${
// //                   filters.tags.includes(tag)
// //                     ? 'bg-purple-500 text-white'
// //                     : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
// //                 }`}
// //                 onClick={() => setFilters(prev => ({
// //                   ...prev,
// //                   tags: prev.tags.includes(tag)
// //                     ? prev.tags.filter(t => t !== tag)
// //                     : [...prev.tags, tag]
// //                 }))}
// //               >
// //                 {tag}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Questions List */}
// //         <div className="space-y-4">
// //           {sortedQuestions.map((question, index) => (
// //             <div
// //               key={question._id}
// //               className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transform hover:scale-101 transition-all"
// //             >
// //               <div className="flex items-start gap-4">
// //                 <div className="flex flex-col items-center gap-2 min-w-[80px]">
// //                   <button
// //                     onClick={() => handleVote(question._id, 'up')}
// //                     className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
// //                   >
// //                     ▲
// //                   </button>
// //                   <span className="text-xl font-semibold text-white">
// //                     {question.votes || 0}
// //                   </span>
// //                   <button
// //                     onClick={() => handleVote(question._id, 'down')}
// //                     className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
// //                   >
// //                     ▼
// //                   </button>
// //                 </div>

// //                 <div className="flex-1">
// //                   <h3
// //                     className="text-xl font-semibold text-white hover:text-purple-400 transition-colors cursor-pointer"
// //                     onClick={() => window.location.href = `/questions/${question._id}`}
// //                   >
// //                     {question.title}
// //                   </h3>
// //                   <p className="mt-2 text-gray-300">{question.body}</p>

// //                   <div className="flex flex-wrap gap-4 items-center mt-4">
// //                     <span className="text-purple-400">
// //                       {question.answers || 0} answers
// //                     </span>
// //                     <span className="text-gray-400">
// //                       {new Date(question.createdAt).toLocaleDateString()}
// //                     </span>
// //                     <div className="flex items-center gap-2">
// //                       <img
// //                         src={`/api/placeholder/32/32`}
// //                         alt={question.author?.name}
// //                         className="w-6 h-6 rounded-full"
// //                       />
// //                       <span className="text-gray-300">
// //                         {question.author?.name}
// //                       </span>
// //                       <span className="text-purple-400">
// //                         {question.author?.reputation?.toLocaleString() || 0} rep
// //                       </span>
// //                     </div>
// //                   </div>

// //                   <div className="flex gap-2 mt-4">
// //                     {question.tags.map((tag, tagIndex) => (
// //                       <span
// //                         key={tagIndex}
// //                         className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm hover:bg-purple-500/30 cursor-pointer transition-colors"
// //                         onClick={() => setFilters(prev => ({
// //                           ...prev,
// //                           tags: prev.tags.includes(tag)
// //                             ? prev.tags.filter(t => t !== tag)
// //                             : [...prev.tags, tag]
// //                         }))}
// //                       >
// //                         {tag}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuestionsAndAnswers;
// import { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';
// import { Sliders, Calendar, Tag, Award, MessageCircle } from 'lucide-react';

// const QuestionsAndAnswers = () => {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     search: '',
//     tags: [],
//     dateRange: 'all',
//     minVotes: '',
//     maxVotes: '',
//     minAnswers: '',
//     maxAnswers: '',
//     userReputation: 'all',
//     sortBy: 'newest',
//     hasAcceptedAnswer: null,
//     questionStatus: 'all'
//   });
//   const [availableTags, setAvailableTags] = useState([]);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const token = Cookies.get("token");

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   useEffect(() => {
//     const tags = [...new Set(questions.flatMap(q => q.tags))];
//     setAvailableTags(tags);
//   }, [questions]);

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

//   const handleVote = (questionId, voteType) => {
//     console.log(`Voted ${voteType} for question ${questionId}`);
//   };

//   const filteredQuestions = questions.filter(question => {
//     const matchesSearch =
//       question.title.toLowerCase().includes(filters.search.toLowerCase()) ||
//       question.body.toLowerCase().includes(filters.search.toLowerCase());

//     const matchesTags =
//       filters.tags.length === 0 ||
//       filters.tags.some(tag => question.tags.includes(tag));

//     const matchesVotes =
//       (!filters.minVotes || question.votes >= parseInt(filters.minVotes)) &&
//       (!filters.maxVotes || question.votes <= parseInt(filters.maxVotes));

//     const matchesAnswers =
//       (!filters.minAnswers || question.answers >= parseInt(filters.minAnswers)) &&
//       (!filters.maxAnswers || question.answers <= parseInt(filters.maxAnswers));

//     const matchesDate = () => {
//       if (filters.dateRange === 'all') return true;
//       const questionDate = new Date(question.createdAt);
//       const now = new Date();
//       switch (filters.dateRange) {
//         case 'today':
//           return questionDate.toDateString() === now.toDateString();
//         case 'week':
//           return questionDate >= new Date(now - 7 * 24 * 60 * 60 * 1000);
//         case 'month':
//           return questionDate >= new Date(now - 30 * 24 * 60 * 60 * 1000);
//         default:
//           return true;
//       }
//     };

//     return matchesSearch && matchesTags && matchesVotes && matchesAnswers && matchesDate();
//   });

//   const FilterSection = ({ title, children }) => (
//     <div className="mb-6">
//       <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
//       <div className="space-y-2">{children}</div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-900">
//       <div className="max-w-7xl mx-auto">
//         {/* Search Bar */}
//         <div className="p-4 border-b border-gray-800">
//           <input
//             type="text"
//             placeholder="Search questions..."
//             className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
//             value={filters.search}
//             onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
//           />
//         </div>

//         <div className="flex">
//           {/* Sidebar */}
//           <div className={`w-64 border-r border-gray-800 p-4 bg-gray-800/50 ${isSidebarOpen ? '' : 'hidden'}`}>
//             {/* Sort Options */}
//             <FilterSection title="Sort By">
//               <select
//                 className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
//                 value={filters.sortBy}
//                 onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
//               >
//                 <option value="newest">Newest</option>
//                 <option value="votes">Most Votes</option>
//                 <option value="answers">Most Answers</option>
//                 <option value="trending">Trending</option>
//               </select>
//             </FilterSection>

//             {/* Date Range Filter */}
//             <FilterSection title="Date Posted">
//               <div className="space-y-2">
//                 {['all', 'today', 'week', 'month'].map(range => (
//                   <label key={range} className="flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer">
//                     <input
//                       type="radio"
//                       name="dateRange"
//                       checked={filters.dateRange === range}
//                       onChange={() => setFilters(prev => ({ ...prev, dateRange: range }))}
//                       className="text-purple-500"
//                     />
//                     <span className="capitalize">{range}</span>
//                   </label>
//                 ))}
//               </div>
//             </FilterSection>

//             {/* Vote Range Filter */}
//             <FilterSection title="Vote Range">
//               <div className="flex gap-2">
//                 <input
//                   type="number"
//                   placeholder="Min"
//                   className="w-1/2 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
//                   value={filters.minVotes}
//                   onChange={(e) => setFilters(prev => ({ ...prev, minVotes: e.target.value }))}
//                 />
//                 <input
//                   type="number"
//                   placeholder="Max"
//                   className="w-1/2 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
//                   value={filters.maxVotes}
//                   onChange={(e) => setFilters(prev => ({ ...prev, maxVotes: e.target.value }))}
//                 />
//               </div>
//             </FilterSection>

//             {/* Answer Range Filter */}
//             <FilterSection title="Answer Range">
//               <div className="flex gap-2">
//                 <input
//                   type="number"
//                   placeholder="Min"
//                   className="w-1/2 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
//                   value={filters.minAnswers}
//                   onChange={(e) => setFilters(prev => ({ ...prev, minAnswers: e.target.value }))}
//                 />
//                 <input
//                   type="number"
//                   placeholder="Max"
//                   className="w-1/2 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
//                   value={filters.maxAnswers}
//                   onChange={(e) => setFilters(prev => ({ ...prev, maxAnswers: e.target.value }))}
//                 />
//               </div>
//             </FilterSection>

//             {/* Tags Filter */}
//             <FilterSection title="Tags">
//               <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
//                 {availableTags.map(tag => (
//                   <button
//                     key={tag}
//                     className={`px-3 py-1 rounded-full text-sm transition-colors ${
//                       filters.tags.includes(tag)
//                         ? 'bg-purple-500 text-white'
//                         : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//                     }`}
//                     onClick={() => setFilters(prev => ({
//                       ...prev,
//                       tags: prev.tags.includes(tag)
//                         ? prev.tags.filter(t => t !== tag)
//                         : [...prev.tags, tag]
//                     }))}
//                   >
//                     {tag}
//                   </button>
//                 ))}
//               </div>
//             </FilterSection>

//             {/* Question Status */}
//             <FilterSection title="Question Status">
//               <select
//                 className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
//                 value={filters.questionStatus}
//                 onChange={(e) => setFilters(prev => ({ ...prev, questionStatus: e.target.value }))}
//               >
//                 <option value="all">All Questions</option>
//                 <option value="answered">Answered</option>
//                 <option value="unanswered">Unanswered</option>
//                 <option value="solved">Solved</option>
//               </select>
//             </FilterSection>
//           </div>

//           {/* Main Content */}
//           <div className="flex-1 p-4">
//             {loading ? (
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//               </div>
//             ) : error ? (
//               <div className="text-red-400 bg-red-400/10 px-4 py-2 rounded-lg">{error}</div>
//             ) : (
//               <div className="space-y-4">
//                 {filteredQuestions.map((question) => (
//                   <div
//                     key={question._id}
//                     className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transform hover:scale-101 transition-all"
//                   >
//                     <div className="flex items-start gap-4">
//                       <div className="flex flex-col items-center gap-2 min-w-[80px]">
//                         <button
//                           onClick={() => handleVote(question._id, 'up')}
//                           className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
//                         >
//                           ▲
//                         </button>
//                         <span className="text-xl font-semibold text-white">
//                           {question.votes || 0}
//                         </span>
//                         <button
//                           onClick={() => handleVote(question._id, 'down')}
//                           className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
//                         >
//                           ▼
//                         </button>
//                       </div>

//                       <div className="flex-1">
//                         <h3
//                           className="text-xl font-semibold text-white hover:text-purple-400 transition-colors cursor-pointer"
//                           onClick={() => window.location.href = `/questions/${question._id}`}
//                         >
//                           {question.title}
//                         </h3>
//                         <p className="mt-2 text-gray-300">{question.body}</p>

//                         <div className="flex flex-wrap gap-4 items-center mt-4">
//                           <span className="text-purple-400">
//                             {question.answers || 0} answers
//                           </span>
//                           <span className="text-gray-400">
//                             {new Date(question.createdAt).toLocaleDateString()}
//                           </span>
//                           <div className="flex items-center gap-2">
//                             <img
//                               src={`/api/placeholder/32/32`}
//                               alt={question.author?.name}
//                               className="w-6 h-6 rounded-full"
//                             />
//                             <span className="text-gray-300">
//                               {question.author?.name}
//                             </span>
//                             <span className="text-purple-400">
//                               {question.author?.reputation?.toLocaleString() || 0} rep
//                             </span>
//                           </div>
//                         </div>

//                         <div className="flex gap-2 mt-4">
//                           {question.tags.map((tag, tagIndex) => (
//                             <span
//                               key={tagIndex}
//                               className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm hover:bg-purple-500/30 cursor-pointer transition-colors"
//                               onClick={() => setFilters(prev => ({
//                                 ...prev,
//                                 tags: prev.tags.includes(tag)
//                                   ? prev.tags.filter(t => t !== tag)
//                                   : [...prev.tags, tag]
//                               }))}
//                             >
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionsAndAnswers;
import { useState, useEffect } from "react";
import CreateQuestionForm from "./CreateQuestionForm";
import Cookies from "js-cookie";
import { Sliders, Calendar, Tag, Award, MessageCircle } from "lucide-react";
import Navbar from "./shared/Navbar";

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    tags: [],
    dateRange: "all",
    minVotes: "",
    maxVotes: "",
    minAnswers: "",
    maxAnswers: "",
    userReputation: "all",
    sortBy: "newest",
    hasAcceptedAnswer: null,
    questionStatus: "all",
  });

  const [availableTags, setAvailableTags] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const token = Cookies.get("token");

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    const tags = [...new Set(questions.flatMap((q) => q.tags))];
    setAvailableTags(tags);
  }, [questions]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/questions");
      if (!response.ok) throw new Error("Failed to fetch questions");
      console.log(response)
      const data = await response.json();
      setQuestions(data);
    } catch (err) {
      setError("Failed to load questions");
    } finally {
      setLoading(false);
    }
  };

  const handleVote = (questionId, voteType) => {
    console.log(`Voted ${voteType} for question ${questionId}`);
  };
  const handleQuestionCreated = (newQuestion) => {
    setQuestions(prev => [newQuestion, ...prev]);
  };

  const filteredQuestions = questions.filter((question) => {
    const matchesSearch =
      question.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      question.body.toLowerCase().includes(filters.search.toLowerCase());

    const matchesTags =
      filters.tags.length === 0 ||
      filters.tags.some((tag) => question.tags.includes(tag));

    const matchesVotes =
      (!filters.minVotes || question.votes >= parseInt(filters.minVotes)) &&
      (!filters.maxVotes || question.votes <= parseInt(filters.maxVotes));

    const matchesAnswers =
      (!filters.minAnswers ||
        question.answers >= parseInt(filters.minAnswers)) &&
      (!filters.maxAnswers || question.answers <= parseInt(filters.maxAnswers));

    const matchesDate = () => {
      if (filters.dateRange === "all") return true;
      const questionDate = new Date(question.createdAt);
      const now = new Date();
      switch (filters.dateRange) {
        case "today":
          return questionDate.toDateString() === now.toDateString();
        case "week":
          return questionDate >= new Date(now - 7 * 24 * 60 * 60 * 1000);
        case "month":
          return questionDate >= new Date(now - 30 * 24 * 60 * 60 * 1000);
        default:
          return true;
      }
    };

    return (
      matchesSearch &&
      matchesTags &&
      matchesVotes &&
      matchesAnswers &&
      matchesDate()
    );
  });

  const FilterSection = ({ title, children }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );

  return (
    // Using a subtle dark background that's easier on the eyes
    <div className="min-h-screen bg-[#121622]">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        {/* Search Bar with softer colors */}
        <div className="p-4 border-b border-gray-800/50">
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full bg-[#1a1f2e] border border-gray-700/30 rounded-lg px-4 py-3 text-gray-200
                     placeholder-gray-400 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                     focus:ring-indigo-400/30 transition-all duration-200"
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, search: e.target.value }))
            }
          />
        </div>
        {/* Create Question Button */}
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600
               transition-colors duration-200 flex items-center gap-2"
          >
            <span className="text-lg">+</span>
            Create Question
          </button>
        </div>

        {/* Create Question Modal */}
        {isCreateModalOpen && (
          <CreateQuestionForm
            onClose={() => setIsCreateModalOpen(false)}
            onQuestionCreated={handleQuestionCreated}
          />
        )}

        <div className="flex">
          {/* Sidebar with improved contrast and spacing */}
          <div className="w-72 border-r border-gray-800/50 p-6 bg-[#161a27]">
            {/* Sort Options */}
            <FilterSection title="Sort By">
              <select
                className="w-full bg-[#1e2333] border border-gray-700/30 rounded-lg px-3 py-2.5
                         text-gray-200 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                         focus:ring-indigo-400/30 transition-all duration-200"
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
                }
              >
                <option value="newest">Newest First</option>
                <option value="votes">Most Voted</option>
                <option value="answers">Most Answered</option>
                <option value="trending">Trending</option>
              </select>
            </FilterSection>

            {/* Date Range Filter */}
            <FilterSection title="Time Period">
              <div className="space-y-2 pl-1">
                {["all", "today", "week", "month"].map((range) => (
                  <label
                    key={range}
                    className="flex items-center space-x-3 text-gray-300 hover:text-gray-100
                                              cursor-pointer transition-colors duration-150 py-1"
                  >
                    <input
                      type="radio"
                      name="dateRange"
                      checked={filters.dateRange === range}
                      onChange={() =>
                        setFilters((prev) => ({ ...prev, dateRange: range }))
                      }
                      className="text-indigo-400 focus:ring-indigo-400/30 focus:ring-offset-gray-800"
                    />
                    <span className="capitalize">{range}</span>
                  </label>
                ))}
              </div>
            </FilterSection>

            {/* Number Range Filters */}
            <FilterSection title="Vote Range">
              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-1/2 bg-[#1e2333] border border-gray-700/30 rounded-lg px-3 py-2
                           text-gray-200 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                           focus:ring-indigo-400/30 transition-all duration-200"
                  value={filters.minVotes}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      minVotes: e.target.value,
                    }))
                  }
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-1/2 bg-[#1e2333] border border-gray-700/30 rounded-lg px-3 py-2
                           text-gray-200 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                           focus:ring-indigo-400/30 transition-all duration-200"
                  value={filters.maxVotes}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      maxVotes: e.target.value,
                    }))
                  }
                />
              </div>
            </FilterSection>

            {/* Tags with improved visual hierarchy */}
            <FilterSection title="Tags">
              <div
                className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2
                            scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800/30"
              >
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                      filters.tags.includes(tag)
                        ? "bg-indigo-400/20 text-indigo-200 border border-indigo-400/30"
                        : "bg-[#1e2333] text-gray-300 border border-gray-700/30 hover:bg-[#252b3d] hover:border-gray-600/50"
                    }`}
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        tags: prev.tags.includes(tag)
                          ? prev.tags.filter((t) => t !== tag)
                          : [...prev.tags, tag],
                      }))
                    }
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </FilterSection>
          </div>

          {/* Main Content with improved card design */}
          <div className="flex-1 p-6 bg-[#141824]">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-400"></div>
              </div>
            ) : error ? (
              <div className="text-red-400 bg-red-400/10 px-4 py-2 rounded-lg">
                {error}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredQuestions.map((question) => (
                  <div
                    key={question._id}
                    className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-700/20 hover:border-indigo-400/30
                             transform transition-all duration-200 hover:shadow-lg hover:shadow-indigo-400/5"
                  >
                    <div className="flex items-start gap-6">
                      {/* Vote buttons with softer interaction */}
                      <div className="flex flex-col items-center gap-2 min-w-[80px]">
                        <button
                          onClick={() => handleVote(question._id, "up")}
                          className="p-2 rounded-lg bg-[#1e2333] hover:bg-[#252b3d] text-gray-300
                                   transition-colors duration-200"
                        >
                          ▲
                        </button>
                        <span className="text-xl font-medium text-gray-200">
                          {question.votes || 0}
                        </span>
                        <button
                          onClick={() => handleVote(question._id, "down")}
                          className="p-2 rounded-lg bg-[#1e2333] hover:bg-[#252b3d] text-gray-300
                                   transition-colors duration-200"
                        >
                          ▼
                        </button>
                      </div>

                      <div className="flex-1">
                        <h3
                          className="text-xl font-medium text-gray-100 hover:text-indigo-300
                                   transition-colors duration-200 cursor-pointer"
                          onClick={() =>
                            (window.location.href = `/questions/${question._id}`)
                          }
                        >
                          {question.title}
                        </h3>
                        <p className="mt-3 text-gray-300 leading-relaxed">
                          {question.body}
                        </p>

                        <div className="flex flex-wrap gap-4 items-center mt-4">
                          <span className="text-indigo-300">
                            {question.answerCount || 0} answers
                          </span>
                          <span className="text-gray-400">
                            {new Date(question.createdAt).toLocaleDateString()}
                          </span>
                          <div className="flex items-center gap-2">
                            <img
                              src={`/api/placeholder/32/32`}
                              alt={question.author?.name}
                              className="w-6 h-6 rounded-full bg-gray-700"
                            />
                            <span className="text-gray-300">
                              {question.author?.name}
                            </span>
                            <span className="text-indigo-300">
                              {question.author?.reputation?.toLocaleString() ||
                                0}{" "}
                              rep
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {question.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 rounded-full bg-indigo-400/10 text-indigo-200 text-sm
                                       hover:bg-indigo-400/20 cursor-pointer transition-all duration-200"
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;

// import React, { useState, useEffect } from 'react';
// import { QuestionCard } from '../components/QuestionCard';
// import { Sidebar } from '../components/Sidebar';
// import { useQuestions } from '../hooks/useQuestions';

// const QuestionsAndAnswers = () => {
//   const { questions, loading, error, hasMore, lastQuestionElementRef } = useQuestions();
//   const [filters, setFilters] = useState({
//     search: '',
//     tags: [],
//     dateRange: 'all',
//     minVotes: '',
//     maxVotes: '',
//     sortBy: 'newest'
//   });
//   const [availableTags, setAvailableTags] = useState([]);

//   useEffect(() => {
//     if (questions.length > 0) {
//       const tags = [...new Set(questions.flatMap(q => q.tags))];
//       setAvailableTags(tags);
//     }
//   }, [questions]);

//   const filteredQuestions = questions.filter(question => {
//     const matchesSearch =
//       question.title.toLowerCase().includes(filters.search.toLowerCase()) ||
//       question.body.toLowerCase().includes(filters.search.toLowerCase());

//     const matchesTags =
//       filters.tags.length === 0 ||
//       filters.tags.some(tag => question.tags.includes(tag));

//     const matchesVotes =
//       (!filters.minVotes || question.votes >= parseInt(filters.minVotes)) &&
//       (!filters.maxVotes || question.votes <= parseInt(filters.maxVotes));

//     return matchesSearch && matchesTags && matchesVotes;
//   });

//   return (
//     <div className="min-h-screen bg-[#121622]">
//       <div className="max-w-7xl mx-auto">
//         <div className="p-4 border-b border-gray-800/50">
//           <input
//             type="text"
//             placeholder="Search questions..."
//             className="w-full bg-[#1a1f2e] border border-gray-700/30 rounded-lg px-4 py-3
//                      text-gray-200 placeholder-gray-400 focus:outline-none focus:border-indigo-400/50
//                      focus:ring-1 focus:ring-indigo-400/30 transition-all duration-200"
//             value={filters.search}
//             onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
//           />
//         </div>

//         <div className="flex">
//           <Sidebar
//             filters={filters}
//             setFilters={setFilters}
//             availableTags={availableTags}
//           />

//           <div className="flex-1 p-6 bg-[#141824]">
//             {error ? (
//               <div className="text-red-400 bg-red-400/10 px-4 py-2 rounded-lg">{error}</div>
//             ) : (
//               <div className="space-y-6">
//                 {filteredQuestions.map((question, index) => {
//                   if (filteredQuestions.length === index + 1) {
//                     return (
//                       <QuestionCard
//                         key={question._id}
//                         question={question}
//                         ref={lastQuestionElementRef}
//                       />
//                     );
//                   } else {
//                     return <QuestionCard key={question._id} question={question} />;
//                   }
//                 })}
//                 {loading && (
//                   <div className="flex justify-center items-center py-4">
//                     <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-400"></div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionsAndAnswers;
