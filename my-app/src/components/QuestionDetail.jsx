// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { useParams } from 'react-router-dom';

// // // const QuestionDetail = () => {
// // //   const { id } = useParams();
// // //   const [question, setQuestion] = useState(null);
// // //   const [answer, setAnswer] = useState('');
// // //   const [errors, setErrors] = useState({});

// // //   // Fetch the question details
// // //   useEffect(() => {
// // //     const token = localStorage.getItem('token'); // Get token from localStorage

// // //     axios.get(`/api/questions/${id}`, {
// // //       headers: {
// // //         Authorization: `Bearer ${token}` // Set the token in the Authorization header
// // //       }
// // //     })
// // //       .then((response) => {
// // //         setQuestion(response.data);
// // //       })
// // //       .catch((error) => {
// // //         console.error('Error fetching question:', error);
// // //       });
// // //   }, [id]);

// // //   // Handle answer submission
// // //   const handleAnswerSubmit = (e) => {
// // //     e.preventDefault();

// // //     const token = localStorage.getItem('token'); // Get token from localStorage

// // //     if (!answer.trim()) {
// // //       setErrors({ answer: 'Answer is required' });
// // //       return;
// // //     }

// // //     axios.post('http://localhost:8000/api/answers', { questionId: id, body: answer }, {
// // //       headers: {
// // //         Authorization: `Bearer ${token}` // Set the token in the Authorization header
// // //       }
// // //     })
// // //       .then((response) => {
// // //         console.log('Answer posted:', response.data);
// // //         setAnswer('');
// // //         setErrors({}); // Clear any previous errors
// // //       })
// // //       .catch((error) => {
// // //         console.error('Error posting answer:', error);
// // //       });
// // //   };

// // //   if (!question) {
// // //     return <p>Loading question...</p>;
// // //   }

// // //   return (
// // //     <div>
// // //       <h1>{question.title}</h1>
// // //       <p>{question.body}</p>

// // //       {/* Display any errors related to posting an answer */}
// // //       {errors.answer && <p className="error">{errors.answer}</p>}

// // //       <form onSubmit={handleAnswerSubmit}>
// // //         <textarea
// // //           value={answer}
// // //           onChange={(e) => setAnswer(e.target.value)}
// // //           placeholder="Post your answer"
// // //           required
// // //         ></textarea>
// // //         <button type="submit">Post Answer</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default QuestionDetail;
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import Cookies from 'js-cookie'; // Import js-cookie

// // const QuestionDetail = () => {
// //   const { id } = useParams();
// //   const [question, setQuestion] = useState(null);
// //   const [answer, setAnswer] = useState('');
// //   const [errors, setErrors] = useState({});

// //   // Fetch the question details
// //   useEffect(() => {
// //     const token = Cookies.get('token'); // Get token from cookies

// //     if (!token) {
// //       console.log('Token is missing, user is not authenticated.');
// //       return; // Optionally handle the case when the token is not found
// //     }

// //     axios.get(`/api/questions/${id}`, {
// //       headers: {
// //         Authorization: `Bearer ${token}` // Set the token in the Authorization header
// //       }
// //     })
// //       .then((response) => {
// //         setQuestion(response.data);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching question:', error);
// //       });
// //   }, [id]);

// //   // Handle answer submission
// //   const handleAnswerSubmit = (e) => {
// //     e.preventDefault();

// //     const token = Cookies.get('token'); // Get token from cookies

// //     if (!token) {
// //       console.log('Token is missing, cannot post answer.');
// //       return;
// //     }

// //     if (!answer.trim()) {
// //       setErrors({ answer: 'Answer is required' });
// //       return;
// //     }

// //     axios.post('http://localhost:8000/api/answers', { questionId: id, body: answer }, {
// //       headers: {
// //         Authorization: `Bearer ${token}` // Set the token in the Authorization header
// //       }
// //     })
// //       .then((response) => {
// //         console.log('Answer posted:', response.data);
// //         setAnswer('');
// //         setErrors({}); // Clear any previous errors
// //       })
// //       .catch((error) => {
// //         console.error('Error posting answer:', error);
// //       });
// //   };

// //   if (!question) {
// //     return <p>Loading question...</p>;
// //   }

// //   return (
// //     <div>
// //       <h1>{question.title}</h1>
// //       <p>{question.body}</p>

// //       {/* Display any errors related to posting an answer */}
// //       {errors.answer && <p className="error">{errors.answer}</p>}

// //       <form onSubmit={handleAnswerSubmit}>
// //         <textarea
// //           value={answer}
// //           onChange={(e) => setAnswer(e.target.value)}
// //           placeholder="Post your answer"
// //           required
// //         ></textarea>
// //         <button type="submit">Post Answer</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default QuestionDetail;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Cookies from 'js-cookie'; // Import js-cookie

// const QuestionDetail = () => {
//   const { id } = useParams();
//   const [question, setQuestion] = useState(null);
//   const [answer, setAnswer] = useState('');
//   const [errors, setErrors] = useState({});

//   // Fetch the question details
//   useEffect(() => {
//     const token = Cookies.get('token'); // Get token from cookies

//     if (!token) {
//       console.log('Token is missing, user is not authenticated.');
//       // Optionally redirect to login page or handle as needed
//       return;
//     }

//     // Fetch the question details
//     axios.get(`/api/questions/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}` // Set the token in the Authorization header
//       }
//     })
//       .then((response) => {
//         setQuestion(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching question:', error);
//         // Handle possible error responses like unauthorized access
//         if (error.response && error.response.status === 401) {
//           console.log('Unauthorized access, token might have expired');
//         }
//       });
//   }, [id]);

//   // Handle answer submission
//   const handleAnswerSubmit = (e) => {
//     e.preventDefault();

//     const token = Cookies.get('token'); // Get token from cookies

//     if (!token) {
//       console.log('Token is missing, cannot post answer.');
//       // Optionally redirect to login page or handle as needed
//       return;
//     }

//     if (!answer.trim()) {
//       setErrors({ answer: 'Answer is required' });
//       return;
//     }

//     // Post the answer
//     axios.post('http://localhost:8000/api/answers', { questionId: id, body: answer }, {
//       headers: {
//         Authorization: `Bearer ${token}` // Set the token in the Authorization header
//       }
//     })
//       .then((response) => {
//         console.log('Answer posted:', response.data);
//         setAnswer('');
//         setErrors({}); // Clear any previous errors
//       })
//       .catch((error) => {
//         console.error('Error posting answer:', error);
//         if (error.response && error.response.status === 401) {
//           console.log('Unauthorized access, token might have expired');
//         }
//       });
//   };

//   if (!question) {
//     return <p>Loading question...</p>;
//   }

//   return (
//     <div>
//       <h1>{question.title}</h1>
//       <p>{question.body}</p>

//       {/* Display any errors related to posting an answer */}
//       {errors.answer && <p className="error">{errors.answer}</p>}

//       <form onSubmit={handleAnswerSubmit}>
//         <textarea
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//           placeholder="Post your answer"
//           required
//         ></textarea>
//         <button type="submit">Post Answer</button>
//       </form>
//     </div>
//   );
// };

// export default QuestionDetail;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import Cookies from 'js-cookie'; // Import js-cookie

const QuestionDetail = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Use useNavigate hook

  // Fetch the question details
  useEffect(() => {
    const token = Cookies.get('token'); // Get token from cookies

    if (!token) {
      console.log('Token is missing, user is not authenticated.');
      navigate('/login'); // Redirect to login page using navigate
      return;
    }

    // Fetch the question details
    axios.get(`/api/questions/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` // Set the token in the Authorization header
      }
    })
      .then((response) => {
        setQuestion(response.data);
      })
      .catch((error) => {
        console.error('Error fetching question:', error);
        if (error.response && error.response.status === 401) {
          console.log('Unauthorized access, token might have expired');
          navigate('/login'); // Redirect to login page if unauthorized
        }
      });
  }, [id, navigate]);

  // Handle answer submission
  const handleAnswerSubmit = (e) => {
    e.preventDefault();

    const token = Cookies.get('token'); // Get token from cookies

    if (!token) {
      console.log('Token is missing, cannot post answer.');
      return;
    }

    if (!answer.trim()) {
      setErrors({ answer: 'Answer is required' });
      return;
    }

    // Post the answer
    axios.post('http://localhost:8000/api/answers', { questionId: id, body: answer }, {
      headers: {
        Authorization: `Bearer ${token}` // Set the token in the Authorization header
      }, withCredentials: true
    })
      .then((response) => {
        console.log('Answer posted:', response.data);
        setAnswer('');
        setErrors({}); // Clear any previous errors
      })
      .catch((error) => {
        console.error('Error posting answer:', error);
        if (error.response && error.response.status === 401) {
          console.log('Unauthorized access, token might have expired');
          navigate('/login'); // Redirect to login page if unauthorized
        }
      });
  };

  if (!question) {
    return <p>Loading question...</p>;
  }

  return (
    <div>
      <h1>{question.title}</h1>
      <p>{question.body}</p>

      {/* Display any errors related to posting an answer */}
      {errors.answer && <p className="error">{errors.answer}</p>}

      <form onSubmit={handleAnswerSubmit}>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Post your answer"
          required
        ></textarea>
        <button type="submit">Post Answer</button>
      </form>
    </div>
  );
};

export default QuestionDetail;


