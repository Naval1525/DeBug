import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Register User
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists with this email.' });
    }

    // Hash password manually
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save the user
    const user = new User({ username, email, password: hashedPassword });
    const savedUser = await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send token in the response body (not in cookies)
    res.status(201).json({ message: 'User registered successfully!', token });
  } catch (err) {
    res.status(500).json({ error: `Server error: ${err.message}` });
  }
};
// Login User
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send token in the response body (not in cookies)
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: `Server error: ${err.message}` });
  }
};
// Logout User
export const logout = (req, res) => {
  // No token to clear on the server, just respond with a success message
  res.status(200).json({ message: 'Logged out successfully' });
};
