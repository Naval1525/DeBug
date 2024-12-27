import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import QuestionDetail from './components/QuestionDetail';
import Homepage from './components/Homepage';
import UserDetails from './components/UserDetails';
import Profile from './components/Proflile';
import QuestionsAndAnswers from './components/QuestionsAndAnswers';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/questions" element={<QuestionsAndAnswers/>} />

        <Route path="/users" element={<UserList></UserList>} />

        <Route path="/questions/:id" element={<QuestionDetail />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
