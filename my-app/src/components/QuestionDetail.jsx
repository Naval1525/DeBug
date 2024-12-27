// // // // import { useEffect, useState } from "react";

// // // // const QuestionDetail = () => {
// // // //   const [question, setQuestion] = useState(null);
// // // //   const [answers, setAnswers] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const questionId = window.location.pathname.split("/")[2];

// // // //     const fetchQuestionDetail = async () => {
// // // //       try {
// // // //         const response = await fetch(`http://localhost:8000/api/questions/${questionId}/user-answers`);
// // // //         if (!response.ok) throw new Error("Failed to fetch question details");
// // // //         const data = await response.json();
// // // //         setQuestion(data.question);
// // // //         setAnswers(data.answers);
// // // //       } catch (err) {
// // // //         setError("Failed to load question details");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchQuestionDetail();
// // // //   }, []);

// // // //   if (loading)
// // // //     return <div>Loading...</div>;

// // // //   if (error)
// // // //     return <div>{error}</div>;

// // // //   return (
// // // //     <div>
// // // //       <h1>{question?.title}</h1>
// // // //       <p>{question?.body}</p>
// // // //       <h3>Author: {question?.questionAuthor?.username}</h3>

// // // //       <div>
// // // //         <h2>Answers:</h2>
// // // //         {answers?.map(answer => (
// // // //           <div key={answer?._id}>
// // // //             <p>{answer?.body}</p>
// // // //             <p>Answered by: {answer?.user?.username}</p>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default QuestionDetail;
// // // import { useState, useEffect } from 'react';
// // // import Cookies from 'js-cookie';
// // // import { MessageCircle, ChevronUp, ChevronDown } from 'lucide-react';

// // // const QuestionDetail = () => {
// // //   const [question, setQuestion] = useState(null);
// // //   const [answers, setAnswers] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [newAnswer, setNewAnswer] = useState('');
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [submitError, setSubmitError] = useState('');

// // //   useEffect(() => {
// // //     const questionId = window.location.pathname.split("/")[2];
// // //     fetchQuestionDetail(questionId);
// // //   }, []);

// // //   const fetchQuestionDetail = async (questionId) => {
// // //     try {
// // //       const response = await fetch(`http://localhost:8000/api/questions/${questionId}/user-answers`);
// // //       if (!response.ok) throw new Error("Failed to fetch question details");
// // //       const data = await response.json();
// // //       setQuestion(data.question);
// // //       setAnswers(data.answers || []);
// // //     } catch (err) {
// // //       setError("Failed to load question details");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleSubmitAnswer = async (e) => {
// // //     e.preventDefault();
// // //     setIsSubmitting(true);
// // //     setSubmitError('');

// // //     const questionId = window.location.pathname.split("/")[2];
// // //     const token = Cookies.get('token');

// // //     try {
// // //       const response = await fetch('http://localhost:8000/api/answers', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           'Authorization': `Bearer ${token}`
// // //         },
// // //         body: JSON.stringify({
// // //           questionId,
// // //           body: newAnswer
// // //         })
// // //       });

// // //       if (!response.ok) {
// // //         const data = await response.json();
// // //         throw new Error(data.error || 'Failed to post answer');
// // //       }

// // //       const answer = await response.json();
// // //       setAnswers(prev => [answer, ...prev]);
// // //       setNewAnswer('');
// // //       await fetchQuestionDetail(questionId); // Refresh the question details
// // //     } catch (err) {
// // //       setSubmitError(err.message);
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen bg-[#121622] flex items-center justify-center">
// // //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-400"></div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen bg-[#121622] p-6">
// // //         <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg">
// // //           {error}
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#121622] p-6">
// // //       <div className="max-w-4xl mx-auto">
// // //         {/* Question Section */}
// // //         <div className="bg-[#1a1f2e] rounded-xl p-6 mb-8 border border-gray-700/20">
// // //           <h1 className="text-2xl font-semibold text-white mb-4">{question?.title}</h1>
// // //           <p className="text-gray-300 leading-relaxed mb-6">{question?.body}</p>

// // //           <div className="flex items-center gap-4 text-gray-400">
// // //             <div className="flex items-center gap-2">
// // //               <img
// // //                 src="/api/placeholder/32/32"
// // //                 alt={question?.questionAuthor?.username}
// // //                 className="w-6 h-6 rounded-full bg-gray-700"
// // //               />
// // //               <span>{question?.questionAuthor?.username}</span>
// // //             </div>
// // //             <span>•</span>
// // //             <span>{new Date(question?.createdAt).toLocaleDateString()}</span>
// // //           </div>
// // //         </div>

// // //         {/* Add Answer Section */}
// // //         <div className="bg-[#1a1f2e] rounded-xl p-6 mb-8 border border-gray-700/20">
// // //           <h2 className="text-xl font-semibold text-white mb-4">Your Answer</h2>
// // //           {submitError && (
// // //             <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-4">
// // //               {submitError}
// // //             </div>
// // //           )}
// // //           <form onSubmit={handleSubmitAnswer}>
// // //             <textarea
// // //               value={newAnswer}
// // //               onChange={(e) => setNewAnswer(e.target.value)}
// // //               className="w-full bg-[#1e2333] border border-gray-700/30 rounded-lg px-4 py-3 text-gray-200
// // //                        placeholder-gray-400 focus:outline-none focus:border-indigo-400/50 focus:ring-1
// // //                        focus:ring-indigo-400/30 min-h-[200px] mb-4"
// // //               placeholder="Write your answer here..."
// // //               required
// // //             />
// // //             <button
// // //               type="submit"
// // //               disabled={isSubmitting || !newAnswer.trim()}
// // //               className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600
// // //                        transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
// // //             >
// // //               {isSubmitting ? 'Posting...' : 'Post Your Answer'}
// // //             </button>
// // //           </form>
// // //         </div>

// // //         {/* Answers Section */}
// // //         <div className="bg-[#1a1f2e] rounded-xl p-6 border border-gray-700/20">
// // //           <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
// // //             <MessageCircle className="w-5 h-5" />
// // //             {answers.length} {answers.length === 1 ? 'Answer' : 'Answers'}
// // //           </h2>

// // //           <div className="space-y-6">
// // //             {answers.map(answer => (
// // //               <div
// // //                 key={answer._id}
// // //                 className="border-t border-gray-700/20 pt-6 first:border-t-0 first:pt-0"
// // //               >
// // //                 <p className="text-gray-300 leading-relaxed mb-4">{answer.body}</p>
// // //                 <div className="flex items-center gap-4 text-gray-400">
// // //                   <div className="flex items-center gap-2">
// // //                     <img
// // //                       src="/api/placeholder/32/32"
// // //                       alt={answer.user?.username}
// // //                       className="w-6 h-6 rounded-full bg-gray-700"
// // //                     />
// // //                     <span>{answer.user?.username}</span>
// // //                   </div>
// // //                   <span>•</span>
// // //                   <span>{new Date(answer.createdAt).toLocaleDateString()}</span>
// // //                 </div>
// // //               </div>
// // //             ))}

// // //             {answers.length === 0 && (
// // //               <p className="text-gray-400 text-center py-8">
// // //                 No answers yet. Be the first to answer this question!
// // //               </p>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default QuestionDetail;
// // import { useState, useEffect } from 'react';
// // import Cookies from 'js-cookie';
// // import { MessageCircle, ChevronUp, ChevronDown } from 'lucide-react';

// // const QuestionDetail = () => {
// //   const [question, setQuestion] = useState(null);
// //   const [answers, setAnswers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [newAnswer, setNewAnswer] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitError, setSubmitError] = useState('');

// //   useEffect(() => {
// //     const questionId = window.location.pathname.split("/")[2];
// //     fetchQuestionDetail(questionId);
// //   }, []);

// //   const fetchQuestionDetail = async (questionId) => {
// //     try {
// //       const response = await fetch(`http://localhost:8000/api/questions/${questionId}/user-answers`);
// //       if (!response.ok) throw new Error("Failed to fetch question details");
// //       const data = await response.json();
// //       setQuestion(data.question);
// //       setAnswers(data.answers || []); // Ensure answers is always an array
// //     } catch (err) {
// //       setError("Failed to load question details");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleSubmitAnswer = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     setSubmitError('');

// //     const questionId = window.location.pathname.split("/")[2];
// //     const token = Cookies.get('token');

// //     try {
// //       const response = await fetch('http://localhost:8000/api/answers', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Authorization': `Bearer ${token}`
// //         },
// //         body: JSON.stringify({
// //           questionId,
// //           body: newAnswer
// //         })
// //       });

// //       if (!response.ok) {
// //         const data = await response.json();
// //         throw new Error(data.error || 'Failed to post answer');
// //       }

// //       const answer = await response.json();
// //       setAnswers(prev => [answer, ...prev]);
// //       setNewAnswer('');
// //       await fetchQuestionDetail(questionId); // Refresh the question details
// //     } catch (err) {
// //       setSubmitError(err.message);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-[#121622] flex items-center justify-center">
// //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-400"></div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-[#121622] p-6">
// //         <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg">
// //           {error}
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-[#121622] p-6">
// //       <div className="max-w-4xl mx-auto">
// //         {/* Question Section */}
// //         <div className="bg-[#1a1f2e] rounded-xl p-6 mb-8 border border-gray-700/20">
// //           <h1 className="text-2xl font-semibold text-white mb-4">{question?.title}</h1>
// //           <p className="text-gray-300 leading-relaxed mb-6">{question?.body}</p>

// //           <div className="flex items-center gap-4 text-gray-400">
// //             <div className="flex items-center gap-2">
// //               <img
// //                 src="/api/placeholder/32/32"
// //                 alt={question?.questionAuthor?.username}
// //                 className="w-6 h-6 rounded-full bg-gray-700"
// //               />
// //               <span>{question?.questionAuthor?.username}</span>
// //             </div>
// //             <span>•</span>
// //             <span>{new Date(question?.createdAt).toLocaleDateString()}</span>
// //           </div>
// //         </div>

// //         {/* Add Answer Section */}
// //         <div className="bg-[#1a1f2e] rounded-xl p-6 mb-8 border border-gray-700/20">
// //           <h2 className="text-xl font-semibold text-white mb-4">Your Answer</h2>
// //           {submitError && (
// //             <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-4">
// //               {submitError}
// //             </div>
// //           )}
// //           <form onSubmit={handleSubmitAnswer}>
// //             <textarea
// //               value={newAnswer}
// //               onChange={(e) => setNewAnswer(e.target.value)}
// //               className="w-full bg-[#1e2333] border border-gray-700/30 rounded-lg px-4 py-3 text-gray-200
// //                        placeholder-gray-400 focus:outline-none focus:border-indigo-400/50 focus:ring-1
// //                        focus:ring-indigo-400/30 min-h-[200px] mb-4"
// //               placeholder="Write your answer here..."
// //               required
// //             />
// //             <button
// //               type="submit"
// //               disabled={isSubmitting || !newAnswer.trim()}
// //               className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600
// //                        transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               {isSubmitting ? 'Posting...' : 'Post Your Answer'}
// //             </button>
// //           </form>
// //         </div>

// //         {/* Answers Section */}
// //         <div className="bg-[#1a1f2e] rounded-xl p-6 border border-gray-700/20">
// //           <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
// //             <MessageCircle className="w-5 h-5" />
// //             {answers.length} {answers.length === 1 ? 'Answer' : 'Answers'}
// //           </h2>

// //           <div className="space-y-6">
// //             {answers.length > 0 ? (
// //               answers.map(answer => (
// //                 <div
// //                   key={answer._id}
// //                   className="border-t border-gray-700/20 pt-6 first:border-t-0 first:pt-0"
// //                 >
// //                   <p className="text-gray-300 leading-relaxed mb-4">{answer.body}</p>
// //                   <div className="flex items-center gap-4 text-gray-400">
// //                     <div className="flex items-center gap-2">
// //                       <img
// //                         src="/api/placeholder/32/32"
// //                         alt={answer.user?.username}
// //                         className="w-6 h-6 rounded-full bg-gray-700"
// //                       />
// //                       <span>{answer.user?.username}</span>
// //                     </div>
// //                     <span>•</span>
// //                     <span>{new Date(answer.createdAt).toLocaleDateString()}</span>
// //                   </div>
// //                 </div>
// //               ))
// //             ) : (
// //               <div className="text-center py-8">
// //                 <p className="text-gray-400 mb-4">Be the first one to answer this question!</p>
// //                 <button
// //                   onClick={() => document.querySelector('textarea').focus()}
// //                   className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600
// //                            transition-colors duration-200"
// //                 >
// //                   Write an Answer
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuestionDetail;
// import { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';
// import { MessageCircle, Award, ThumbsUp, ThumbsDown } from 'lucide-react';

// const QuestionDetail = () => {
//   const [question, setQuestion] = useState(null);
//   const [answers, setAnswers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newAnswer, setNewAnswer] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState('');

//   useEffect(() => {
//     const questionId = window.location.pathname.split("/")[2];
//     fetchQuestionDetail(questionId);
//   }, []);

//   const fetchQuestionDetail = async (questionId) => {
//     try {
//       const response = await fetch(`http://localhost:8000/api/questions/${questionId}/user-answers`);
//       console.log(response);
//       const data = await response.json();

//       if (response.ok) {
//         setQuestion(data.question);
//         // Only set answers if they exist in the response
//         if (data.answers && !data.error) {
//           setAnswers(data.answers);
//         } else {
//           setAnswers([]);
//         }
//       } else {
//         if (data.error === 'No answers found for this question') {
//           // This is not an error state, just means no answers yet
//           setQuestion(data.question);
//           setAnswers([]);
//         } else {
//           throw new Error(data.error || "Failed to fetch question details");
//         }
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmitAnswer = async (e) => {
//     e.preventDefault();
//     if (newAnswer.length < 10) {
//       setSubmitError('Answer must be at least 10 characters long');
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitError('');

//     const questionId = window.location.pathname.split("/")[2];
//     const token = Cookies.get('token');

//     try {
//       const response = await fetch('http://localhost:8000/api/answers', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         credentials: "include",

//         body: JSON.stringify({
//           questionId,
//           body: newAnswer
//         })
//       });

//       if (!response.ok) {
//         const data = await response.json();
//         throw new Error(data.error || 'Failed to post answer');
//       }

//       const answer = await response.json();
//       setAnswers(prev => [answer, ...prev]);
//       setNewAnswer('');
//       await fetchQuestionDetail(questionId);
//     } catch (err) {
//       setSubmitError(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#121622] flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-400"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-[#121622] p-6">
//         <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg">
//           {error}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#121622] p-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Question Section */}
//         <div className="bg-[#1a1f2e] rounded-xl p-6 mb-8 border border-gray-700/20">
//           <h1 className="text-2xl font-semibold text-white mb-4">{question?.title}</h1>
//           <p className="text-gray-300 leading-relaxed mb-6">{question?.body}</p>

//           <div className="flex items-center gap-4 text-gray-400 border-t border-gray-700/20 pt-4">
//             <div className="flex items-center gap-2">
//               <img
//                 src="/api/placeholder/32/32"
//                 alt={question?.questionAuthor?.username}
//                 className="w-8 h-8 rounded-full bg-gray-700"
//               />
//               <div className="flex flex-col">
//                 <span className="text-gray-200">{question?.questionAuthor?.username}</span>
//                 <div className="flex items-center gap-1 text-sm">
//                   <Award className="w-4 h-4 text-indigo-400" />
//                   <span>{question?.questionAuthor?.reputation || 0} rep</span>
//                 </div>
//               </div>
//             </div>
//             <span>•</span>
//             <span>Asked {new Date(question?.createdAt).toLocaleDateString()}</span>
//           </div>
//         </div>

//         {/* Add Answer Section */}
//         <div className="bg-[#1a1f2e] rounded-xl p-6 mb-8 border border-gray-700/20">
//           <h2 className="text-xl font-semibold text-white mb-4">Your Answer</h2>
//           {submitError && (
//             <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-4">
//               {submitError}
//             </div>
//           )}
//           <form onSubmit={handleSubmitAnswer}>
//             <textarea
//               value={newAnswer}
//               onChange={(e) => setNewAnswer(e.target.value)}
//               className="w-full bg-[#1e2333] border border-gray-700/30 rounded-lg px-4 py-3 text-gray-200
//                        placeholder-gray-400 focus:outline-none focus:border-indigo-400/50 focus:ring-1
//                        focus:ring-indigo-400/30 min-h-[200px] mb-4"
//               placeholder="Write your answer here (minimum 10 characters)..."
//               minLength={10}
//               required
//             />
//             <button
//               type="submit"
//               disabled={isSubmitting || newAnswer.length < 10}
//               className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600
//                        transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? 'Posting...' : 'Post Your Answer'}
//             </button>
//           </form>
//         </div>

//         {/* Answers Section */}
//         <div className="bg-[#1a1f2e] rounded-xl p-6 border border-gray-700/20">
//           <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
//             <MessageCircle className="w-5 h-5" />
//             {answers.length} {answers.length === 1 ? 'Answer' : 'Answers'}
//           </h2>

//           <div className="space-y-6">
//             {answers.length > 0 ? (
//               answers.map(answer => (
//                 <div
//                   key={answer._id}
//                   className="border-t border-gray-700/20 pt-6 first:border-t-0 first:pt-0"
//                 >
//                   <div className="flex gap-4">
//                     {/* Voting */}
//                     <div className="flex flex-col items-center gap-2">
//                       <button className="p-2 rounded hover:bg-gray-700/20">
//                         <ThumbsUp className="w-5 h-5 text-gray-400" />
//                       </button>
//                       <span className="text-gray-200 font-medium">
//                         {(answer.upvotes || 0) - (answer.downvotes || 0)}
//                       </span>
//                       <button className="p-2 rounded hover:bg-gray-700/20">
//                         <ThumbsDown className="w-5 h-5 text-gray-400" />
//                       </button>
//                     </div>

//                     {/* Answer Content */}
//                     <div className="flex-1">
//                       <p className="text-gray-300 leading-relaxed mb-4 text-xl">{answer.body}</p>

//                       <div className="flex items-center gap-4 text-gray-400">
//                         <div className="flex items-center gap-2">
//                           <img
//                             src="/api/placeholder/32/32"
//                             alt={answer.user?.username}
//                             className="w-8 h-8 rounded-full bg-gray-700"
//                           />
//                           <div className="flex flex-col text-xs">
//                             <span className="text-gray-200">{answer.user?.username}</span>
//                             <div className="flex items-center gap-1 text-sm">
//                               <Award className="w-4 h-4 text-indigo-400" />
//                               <span>{answer.user?.reputation || 0} rep</span>
//                             </div>
//                           </div>
//                         </div>
//                         <span>•</span>
//                         <span className="text-xs">
//                           Answered {new Date(answer.createdAt).toLocaleDateString()}
//                         </span>
//                         {answer.status === 'accepted' && (
//                           <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
//                             Accepted Answer
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="text-center py-8">
//                 <p className="text-gray-400 mb-4">Be the first one to answer this question!</p>
//                 <button
//                   onClick={() => document.querySelector('textarea').focus()}
//                   className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600
//                            transition-colors duration-200"
//                 >
//                   Write an Answer
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionDetail;
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { MessageCircle, Award, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import Navbar from './shared/Navbar';

const QuestionDetail = () => {
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newAnswer, setNewAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [votingInProgress, setVotingInProgress] = useState({});

  useEffect(() => {
    const questionId = window.location.pathname.split("/")[2];
    fetchQuestionDetail(questionId);
  }, []);

  const fetchQuestionDetail = async (questionId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/questions/${questionId}/user-answers`);
      const data = await response.json();

      if (response.ok) {
        setQuestion(data.question);
        if (data.answers && !data.error) {
          setAnswers(data.answers);
        } else {
          setAnswers([]);
        }
      } else {
        if (data.error === 'No answers found for this question') {
          setQuestion(data.question);
          setAnswers([]);
        } else {
          throw new Error(data.error || "Failed to fetch question details");
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchUser  = async (token) => {
    const response = await fetch('http://localhost:8000/api/auth/user', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user information');
    }

    return await response.json();
  };

  const handleVote = async (answerId, action) => {
    try {
      const token = Cookies.get('token');
      const user = await fetchUser (token); // Fetch user information
      console.log(user.user._id);
      const userId = user.user._id; // Assuming the user object has an _id property


      const response = await fetch(`http://localhost:8000/api/answers/${answerId}/vote`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        credentials: "include",
        body: JSON.stringify({ action, userId }) // Include userId here
      });

      const data = await response.json();

      if (response.ok) {
        setAnswers(prev => prev.map(answer =>
          answer._id === answerId ? data.answer : answer
        ));
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      // toast({
      //   variant: "destructive",
      //   title: "Error",
      //   description: err.message
      // });
    }
  };
  // const handleVote = async (answerId, action) => {
  //   if (votingInProgress[answerId]) return;

  //   setVotingInProgress(prev => ({ ...prev, [answerId]: true }));
  //   const token = Cookies.get('token');

  //   try {
  //     const response = await fetch(`http://localhost:8000/api/answers/${answerId}/vote`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`
  //       },
  //       credentials: "include",
  //       body: JSON.stringify({ action })
  //     });

  //     if (!response.ok) {
  //       const data = await response.json();
  //       throw new Error(data.error || 'Failed to update vote');
  //     }

  //     const { answer } = await response.json();
  //     setAnswers(prev => prev.map(a =>
  //       a._id === answerId ? { ...a, upvotes: answer.upvotes, downvotes: answer.downvotes } : a
  //     ));
  //   } catch (err) {
  //     console.error('Voting error:', err);
  //   } finally {
  //     setVotingInProgress(prev => ({ ...prev, [answerId]: false }));
  //   }
  // };

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    if (newAnswer.length < 10) {
      setSubmitError('Answer must be at least 10 characters long');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const questionId = window.location.pathname.split("/")[2];
    const token = Cookies.get('token');

    try {
      const response = await fetch('http://localhost:8000/api/answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        credentials: "include",
        body: JSON.stringify({
          questionId,
          body: newAnswer
        })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to post answer');
      }

      const answer = await response.json();
      setAnswers(prev => [answer, ...prev]);
      setNewAnswer('');
      await fetchQuestionDetail(questionId);
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121622] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#121622] p-6">
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-[#121622] ">
    <Navbar></Navbar>
    <div className="min-h-screen bg-[#121622] p-6">

      <div className="max-w-4xl mx-auto">
        {/* Question Section */}
        <div className="bg-[#1a1f2e] rounded-xl p-6 mb-8 border border-gray-700/20">
          <h1 className="text-2xl font-semibold text-white mb-4">{question?.title}</h1>
          <p className="text-gray-300 leading-relaxed mb-6">{question?.body}</p>

          <div className="flex items-center gap-4 text-gray-400 border-t border-gray-700/20 pt-4">
            <div className="flex items-center gap-2">
              <img
                src="/api/placeholder/32/32"
                alt={question?.questionAuthor?.username}
                className="w-8 h-8 rounded-full bg-gray-700"
              />
              <div className="flex flex-col">
                <span className="text-gray-200">{question?.questionAuthor?.username}</span>
                <div className="flex items-center gap-1 text-sm">
                  <Award className="w-4 h-4 text-indigo-400" />
                  <span>{question?.questionAuthor?.reputation || 0} rep</span>
                </div>
              </div>
            </div>
            <span>•</span>
            <span>Asked {new Date(question?.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Add Answer Section */}
        <div className="bg-[#1a1f2e] rounded-xl p-6 mb-8 border border-gray-700/20">
          <h2 className="text-xl font-semibold text-white mb-4">Your Answer</h2>
          {submitError && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-4">
              {submitError}
            </div>
          )}
          <form onSubmit={handleSubmitAnswer}>
            <textarea
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              className="w-full bg-[#1e2333] border border-gray-700/30 rounded-lg px-4 py-3 text-gray-200
                       placeholder-gray-400 focus:outline-none focus:border-indigo-400/50 focus:ring-1
                       focus:ring-indigo-400/30 min-h-[200px] mb-4"
              placeholder="Write your answer here (minimum 10 characters)..."
              minLength={10}
              required
            />
            <button
              type="submit"
              disabled={isSubmitting || newAnswer.length < 10}
              className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600
                       transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Posting...' : 'Post Your Answer'}
            </button>
          </form>
        </div>

        {/* Answers Section */}
        <div className="bg-[#1a1f2e] rounded-xl p-6 border border-gray-700/20">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            {answers.length} {answers.length === 1 ? 'Answer' : 'Answers'}
          </h2>

          <div className="space-y-6">
            {answers.length > 0 ? (
              answers.map(answer => (
                <div
                  key={answer._id}
                  className="border-t border-gray-700/20 pt-6 first:border-t-0 first:pt-0"
                >
                  <div className="flex gap-4">
                    {/* Voting */}
                    <div className="flex flex-col items-center gap-2">
                    <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleVote(answer._id, 'upvote')}
                          className="text-gray-400 hover:bg-gray-700/20"
                        >
                          <ChevronUp className="w-5 h-5" />
                        </Button>
                        <span className="text-gray-200 font-medium">
                          {(answer.upvotes || 0) - (answer.downvotes || 0)}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleVote(answer._id, 'downvote')}
                          className="text-gray-400 hover:bg-gray-700/20"
                        >
                          <ChevronDown className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Answer Content */}
                    <div className="flex-1">
                      <p className="text-gray-300 leading-relaxed mb-4 text-xl">{answer.body}</p>

                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <img
                            src="/api/placeholder/32/32"
                            alt={answer.user?.username}
                            className="w-8 h-8 rounded-full bg-gray-700"
                          />
                          <div className="flex flex-col text-xs">
                            <span className="text-gray-200">{answer.user?.username}</span>
                            <div className="flex items-center gap-1 text-sm">
                              <Award className="w-4 h-4 text-indigo-400" />
                              <span>{answer.user?.reputation || 0} rep</span>
                            </div>
                          </div>
                        </div>
                        <span>•</span>
                        <span className="text-xs">
                          Answered {new Date(answer.createdAt).toLocaleDateString()}
                        </span>
                        {answer.status === 'accepted' && (
                          <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                            Accepted Answer
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400 mb-4">Be the first one to answer this question!</p>
                <button
                  onClick={() => document.querySelector('textarea').focus()}
                  className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600
                           transition-colors duration-200"
                >
                  Write an Answer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
