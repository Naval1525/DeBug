import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Authentication middleware to check for valid JWT
export const auth = async (req, res, next) => {
  // Get token from cookies
  const token = req.cookies.token; // Access token from cookies
  console.log(token);

  // Check if token exists
  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    // Verify token using JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by ID and exclude password
    req.user = await User.findById(decoded.id).select('-password'); // No password in the req.user object

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // Invalid token or other error
    res.status(401).json({ error: 'Token is not valid' });
  }
};
