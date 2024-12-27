import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = Cookies.get('token'); // Ensure 'token' is the correct cookie name

      if (!token) {
        setError('No token found. Please log in.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://devflow-1.onrender.com/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Correctly send the token in the Authorization header
          },
        });

        setUser(response.data.user); // Assuming the response contains the 'user' object
        setQuestions(response.data.questions); // Assuming the response contains the 'questions' array
        setAnswers(response.data.answers); // Assuming the response contains the 'answers' array
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user details.');
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) return <div className="text-white">Loading...</div>;

  if (error) return <div className="text-white">{error}</div>;

  // Heatmap logic based on questions and answers
  const getHeatmapColor = (count) => {
    if (count === 0) return 'bg-gray-500'; // No activity
    if (count <= 3) return 'bg-purple-400'; // Low activity
    if (count <= 6) return 'bg-purple-500'; // Moderate activity
    return 'bg-pink-500'; // High activity
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-600 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-lg">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-4xl font-bold mb-6">User Details</h1>

        <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
          <p className="text-white text-xl"><strong>Username:</strong> {user.username}</p>
          <p className="text-white text-xl"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-400 text-lg"><strong>Reputation:</strong> {user.reputation}</p>
          <p className="text-gray-400 text-lg"><strong>Date Joined:</strong> {new Date(user.dateJoined).toLocaleDateString()}</p>
        </div>

        <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
          <h2 className="text-white text-2xl font-semibold mb-4">Questions Asked</h2>
          {questions.length > 0 ? (
            <ul>
              {questions.map((question) => (
                <li key={question._id} className="text-gray-300 mb-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{question.title}</span>
                    <span className={`px-2 py-1 text-sm rounded-md ${getHeatmapColor(questions.length)}`}>{questions.length} Qs</span>
                  </div>
                  <p className="text-gray-400 text-sm">{question.body}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No questions asked yet.</p>
          )}
        </div>

        <div className="bg-gray-800/50 p-4 rounded-lg">
          <h2 className="text-white text-2xl font-semibold mb-4">Answers Given</h2>
          {answers.length > 0 ? (
            <ul>
              {answers.map((answer) => (
                <li key={answer._id} className="text-gray-300 mb-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{answer.question.title}</span>
                    <span className={`px-2 py-1 text-sm rounded-md ${getHeatmapColor(answers.length)}`}>{answers.length} Ans</span>
                  </div>
                  <p className="text-gray-400 text-sm">{answer.body}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No answers given yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
