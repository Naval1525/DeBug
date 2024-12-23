// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [questions, setQuestions] = useState([]);
//   const [newQuestion, setNewQuestion] = useState({
//     title: '',
//     body: '',
//     tags: []
//   });
//   const [showForm, setShowForm] = useState(false); // Toggle visibility of the form
//   const [errors, setErrors] = useState({}); // To track form validation errors

//   // Fetch all questions
//   useEffect(() => {
//     const token = localStorage.getItem('token'); // Get token from localStorage

//     axios.get('http://localhost:8000/api/questions', {
//       headers: {
//         Authorization: `Bearer ${token}` // Set the token in the Authorization header
//       }
//     })
//       .then((response) => {
//         setQuestions(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching questions:', error);
//       });
//   }, []);

//   // Handle input changes for the new question form
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewQuestion((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   // Validate form fields
//   const validateForm = () => {
//     const newErrors = {};
//     if (!newQuestion.title) newErrors.title = 'Title is required';
//     if (!newQuestion.body) newErrors.body = 'Body is required';
//     if (newQuestion.tags.length === 0) newErrors.tags = 'At least one tag is required';
//     return newErrors;
//   };

//   // Handle form submission for creating a new question
//   const handleCreateQuestion = (e) => {
//     e.preventDefault();

//     // Validate form
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors); // Show validation errors
//       return;
//     }

//     const token = localStorage.getItem('token'); // Get token from localStorage

//     axios.post('http://localhost:8000/api/questions/create', newQuestion, {
//       headers: {
//         Authorization: `Bearer ${token}` // Set the token in the Authorization header
//       },
//       withCredentials: true // Ensure cookies are sent with the request
//     })
//       .then((response) => {
//         console.log('Question created:', response.data);
//         setQuestions([...questions, response.data]); // Update the questions list with the new question
//         setNewQuestion({ title: '', body: '', tags: [] }); // Reset the form
//         setShowForm(false); // Hide the form after submission
//         setErrors({}); // Clear errors
//       })
//       .catch((error) => {
//         console.error('Error creating question:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>All Questions</h1>
//       <ul>
//         {questions.map((question) => (
//           <li key={question._id}>
//             <Link to={`/question/${question._id}`}>{question.title}</Link>
//           </li>
//         ))}
//       </ul>

//       <button onClick={() => setShowForm(!showForm)}>
//         {showForm ? 'Cancel' : 'Create Question'}
//       </button>

//       {showForm && (
//         <form onSubmit={handleCreateQuestion}>
//           <div>
//             <input
//               type="text"
//               name="title"
//               value={newQuestion.title}
//               onChange={handleInputChange}
//               placeholder="Enter question title"
//               required
//             />
//             {errors.title && <p className="error">{errors.title}</p>}
//           </div>
//           <div>
//             <textarea
//               name="body"
//               value={newQuestion.body}
//               onChange={handleInputChange}
//               placeholder="Enter question body"
//               required
//             />
//             {errors.body && <p className="error">{errors.body}</p>}
//           </div>
//           <div>
//             <input
//               type="text"
//               name="tags"
//               value={newQuestion.tags.join(', ')} // Display tags as comma-separated string
//               onChange={(e) => setNewQuestion((prevState) => ({
//                 ...prevState,
//                 tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag) // Remove empty tags
//               }))}
//               placeholder="Enter tags (comma-separated)"
//             />
//             {errors.tags && <p className="error">{errors.tags}</p>}
//           </div>
//           <button type="submit">Create Question</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie
import Navbar from './shared/Navbar';

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    body: '',
    tags: []
  });
  const [showForm, setShowForm] = useState(false); // Toggle visibility of the form
  const [errors, setErrors] = useState({}); // To track form validation errors

  // Fetch all questions
  useEffect(() => {
    const token = Cookies.get('token'); // Get token from cookies

    if (!token) {
      console.log('Token is missing, user is not authenticated.');
      return; // Optionally handle the case when the token is not found
    }

    axios.get('http://localhost:8000/api/questions', {
      headers: {
        Authorization: `Bearer ${token}` // Set the token in the Authorization header
      }
    })
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  // Handle input changes for the new question form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!newQuestion.title) newErrors.title = 'Title is required';
    if (!newQuestion.body) newErrors.body = 'Body is required';
    if (newQuestion.tags.length === 0) newErrors.tags = 'At least one tag is required';
    return newErrors;
  };

  // Handle form submission for creating a new question
  const handleCreateQuestion = (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show validation errors
      return;
    }

    const token = Cookies.get('token'); // Get token from cookies

    if (!token) {
      console.log('Token is missing, cannot create question.');
      return;
    }

    axios.post('http://localhost:8000/api/questions/create', newQuestion, {
      headers: {
        Authorization: `Bearer ${token}` // Set the token in the Authorization header
      },
      withCredentials: true // Ensure cookies are sent with the request
    })
      .then((response) => {
        console.log('Question created:', response.data);
        setQuestions([...questions, response.data]); // Update the questions list with the new question
        setNewQuestion({ title: '', body: '', tags: [] }); // Reset the form
        setShowForm(false); // Hide the form after submission
        setErrors({}); // Clear errors
      })
      .catch((error) => {
        console.error('Error creating question:', error);
      });
  };


  return (
    <div>
        <Navbar></Navbar>
      <h1>All Questions</h1>

      <ul>
        {questions.map((question) => (
          <li key={question._id}>
            <Link to={`/question/${question._id}`}>{question.title}</Link>
          </li>
        ))}
      </ul>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Create Question'}
      </button>

      {showForm && (
        <form onSubmit={handleCreateQuestion}>
          <div>
            <input
              type="text"
              name="title"
              value={newQuestion.title}
              onChange={handleInputChange}
              placeholder="Enter question title"
              required
            />
            {errors.title && <p className="error">{errors.title}</p>}
          </div>
          <div>
            <textarea
              name="body"
              value={newQuestion.body}
              onChange={handleInputChange}
              placeholder="Enter question body"
              required
            />
            {errors.body && <p className="error">{errors.body}</p>}
          </div>
          <div>
            <input
              type="text"
              name="tags"
              value={newQuestion.tags.join(', ')} // Display tags as comma-separated string
              onChange={(e) => setNewQuestion((prevState) => ({
                ...prevState,
                tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag) // Remove empty tags
              }))}
              placeholder="Enter tags (comma-separated)"
            />
            {errors.tags && <p className="error">{errors.tags}</p>}
          </div>
          <button type="submit">Create Question</button>
        </form>
      )}
    </div>
  );
};

export default Home;

