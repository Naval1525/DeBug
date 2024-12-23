// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';

// // Authentication middleware to check for valid JWT
// export const auth = async (req, res, next) => {
//   // Get token from Authorization header (Bearer token)
//   const token = req.headers['authorization']?.split(' ')[1];  // Extract token from "Bearer <token>"

//   // Check if token exists
//   if (!token) {
//     return res.status(401).json({ error: 'No token, authorization denied' });
//   }

//   try {
//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Find user by ID and exclude password
//     req.user = await User.findById(decoded.id).select('-password');

//     // Proceed to the next middleware or route handler
//     next();
//   } catch (err) {
//     // Invalid token or other error
//     res.status(401).json({ error: 'Token is not valid' });
//   }
// };
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Authentication middleware to check for valid JWT
export const auth = async (req, res, next) => {
  // Get token from cookies
  const token = req.cookies.token; // Access token from cookies

  // Check if token exists
  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by ID and exclude password
    req.user = await User.findById(decoded.id).select('-password');

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // Invalid token or other error
    res.status(401).json({ error: 'Token is not valid' });
  }
};
