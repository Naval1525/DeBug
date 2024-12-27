
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';
import { User, Mail, Lock, AlertCircle } from 'lucide-react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('api/auth/register', {
        username,
        email,
        password
      });
      const token = response.data.token;

      if (token) {
        Cookies.set('token', token, { expires: 7 });
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-lg border border-gray-700 w-full max-w-md"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Create Account
        </motion.h2>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center gap-2 text-red-300"
          >
            <AlertCircle className="w-5 h-5" />
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSignup} className="space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 pl-10 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pl-10 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pl-10 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white"
                required
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{' '}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/login"
            className="text-purple-400 hover:text-purple-300"
          >
            Login
          </motion.a>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;