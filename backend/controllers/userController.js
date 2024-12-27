import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import Question from '../models/Question.js';
import Answer from '../models/Answer.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Validate input fields
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists with this email.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send response
    res.status(201).json({
      message: 'User registered successfully!',
      user: { id: user._id, username, email },
      token,
    });
  } catch (err) {
    res.status(500).json({ error: `Server error: ${err.message}` });
  }
};

// Login User
// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Validate input fields
//     if (!email || !password) {
//       return res.status(400).json({ error: 'All fields are required.' });
//     }

//     // Check if the user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: 'Invalid email or password.' });
//     }

//     // Check if the password matches
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: 'Invalid email or password.' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Send response
//     res.status(200).json({
//       message: 'Login successful!',
//       user: { id: user._id, username: user.username, email },
//       token,
//     });
//   } catch (err) {
//     res.status(500).json({ error: `Server error: ${err.message}` });
//   }
// };

// Login User
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input fields
    if (!email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // Calculate reputation
    const questions = await Question.find({ user: user._id });
    const answers = await Answer.find({ user: user._id });

    let reputation = 0;

    // Adding reputation points for questions created
    reputation += questions.length * 5;

    // Adding reputation points for answers created
    reputation += answers.length * 10;

    // Check if upvotes and downvotes are arrays and calculate reputation points
    answers.forEach((answer) => {
      if (Array.isArray(answer.upvotes)) {
        reputation += answer.upvotes.length * 2; // Each upvote gives +2
      }
      if (Array.isArray(answer.downvotes)) {
        reputation -= answer.downvotes.length * 2; // Each downvote gives -2
      }
      if (answer.accepted) {
        reputation += 15; // Accepted answer gives +15
      }
    });

    // Update the user's reputation in the database
    user.reputation = reputation;
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send response
    res.status(200).json({
      message: 'Login successful!',
      user: { id: user._id, username: user.username, email, reputation },
      token,
    });
  } catch (err) {
    res.status(500).json({ error: `Server error: ${err.message}` });
  }
};


export const getUserDetails = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header


  if (!token) {
    return res.status(401).json({ error: 'No token provided. Unauthorized.' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the user details from the database
    const user = await User.findById(decoded.id).select('-password'); // Exclude the password field

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Fetch the user's questions and answers
    const questions = await Question.find({ user: decoded.id }).populate('user', 'username email');
    const answers = await Answer.find({ user: decoded.id }).populate('question', 'title body').populate('user', 'username email');

    // Initialize reputation
    let reputation = 0;

    // Adding reputation points for questions created
    reputation += questions.length * 5;

    // Adding reputation points for answers created
    reputation += answers.length * 10;

    // Check if upvotes and downvotes are arrays and calculate reputation points
    answers.forEach((answer) => {


      // Ensure upvotes and downvotes are arrays before calculating reputation
      if (Array.isArray(answer.upvotes)) {
        reputation += answer.upvotes.length * 2; // Each upvote gives +2
      }

      if (Array.isArray(answer.downvotes)) {
        reputation -= answer.downvotes.length * 2; // Each downvote gives -2
      }
    });

    // Adding reputation points for accepted answers
    answers.forEach((answer) => {
      if (answer.accepted) {
        reputation += 15; // Accepted answer gives +15
      }
    });

    // Debugging the reputation


    // Add reputation to the user object
    user.reputation = reputation || 0;

    // Send user details along with their reputation, questions, and answers in the response
    res.status(200).json({
      user,
      questions,
      answers,
    });
  } catch (err) {
    res.status(500).json({ error: `Server error: ${err.message}` });
  }
};



export const getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    // If no users are found, return a 404 message
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    // Return the users as a JSON response
    return res.status(200).json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    return res.status(500).json({ message: 'An error occurred while retrieving users' });
  }
};



export const getUserById = async (req, res) => {
  try {
    const { id } = req.params; // Extract user ID from the request parameters

    // Fetch the user by ID, excluding the password field
    const user = await User.findById(id).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Optionally, fetch related data like questions and answers
    const questions = await Question.find({ user: id }).populate('user', 'username email');
    const answers = await Answer.find({ user: id })
      .populate('question', 'title body')
      .populate('user', 'username email');

    // Initialize reputation calculation
    let reputation = 0;

    // Add reputation points for questions
    reputation += questions.length * 5;

    // Add reputation points for answers
    reputation += answers.length * 10;

    // Calculate reputation based on upvotes and downvotes
    answers.forEach((answer) => {
      if (Array.isArray(answer.upvotes)) {
        reputation += answer.upvotes.length * 2;
      }
      if (Array.isArray(answer.downvotes)) {
        reputation -= answer.downvotes.length * 2;
      }
      if (answer.accepted) {
        reputation += 15; // Accepted answer bonus
      }
    });

    // Add calculated reputation to the user object
    const userDetails = {
      ...user._doc,
      reputation,
    };

    res.status(200).json({ user: userDetails, questions, answers });
  } catch (err) {
    console.error('Error fetching user by ID:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
