// import Question from '../models/Question.js';
// import User from '../models/User.js';

// // Create Question
// export const createQuestion = async (req, res) => {
//   const { title, body, tags } = req.body;
//   try {
//     const question = new Question({
//       title,
//       body,
//       tags,
//       user: req.user._id,
//     });

//     await question.save();
//     res.status(201).json(question);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get all questions with filters
// export const getQuestions = async (req, res) => {
//   const { tags, minVotes, maxVotes, status, search } = req.query;

//   const filter = {};
//   if (tags) filter.tags = { $in: tags.split(',') };
//   if (status) filter.status = status;
//   if (search) filter.$or = [{ title: { $regex: search, $options: 'i' } }, { body: { $regex: search, $options: 'i' } }];

//   try {
//     const questions = await Question.find(filter)
//       .populate('user', 'username')
//       .sort({ createdAt: -1 }); // Sort by most recent
//     res.status(200).json(questions);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get a question by ID
// export const getQuestionById = async (req, res) => {
//   try {
//     const question = await Question.findById(req.params.id).populate('user', 'username');
//     if (!question) return res.status(404).json({ error: 'Question not found' });

//     res.status(200).json(question);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
import Answer from '../models/Answer.js';
import Question from '../models/Question.js';


import { validationResult } from 'express-validator'; // To handle validation checks

// Create Question
export const createQuestion = async (req, res) => {
  const { title, body, tags } = req.body;

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Ensure the title and body are not too short or empty
    if (!title || title.length < 5) {
      return res.status(400).json({ error: 'Title should be at least 5 characters long.' });
    }
    if (!body || body.length < 20) {
      return res.status(400).json({ error: 'Body should be at least 20 characters long.' });
    }

    // Ensure tags is an array with at least one element
    if (!tags || !Array.isArray(tags) || tags.length === 0) {
      return res.status(400).json({ error: 'At least one tag is required.' });
    }

    // Create new question
    const question = new Question({
      title,
      body,
      tags,
      user: req.user._id, // The logged-in user
    });

    await question.save();

    // Return the created question
    res.status(201).json(question);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while creating question' });
  }
};

// Get all questions with filters
export const getQuestions = async (req, res) => {
  const { tags, minVotes, maxVotes, status, search } = req.query;

  const filter = {};

  if (tags) filter.tags = { $in: tags.split(',') };
  if (status) filter.status = status;
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: 'i' } },
      { body: { $regex: search, $options: 'i' } },
    ];
  }
  if (minVotes || maxVotes) {
    filter.$and = [];
    if (minVotes) {
      filter.$and.push({ upvotes: { $gte: parseInt(minVotes, 10) } });
    }
    if (maxVotes) {
      filter.$and.push({ upvotes: { $lte: parseInt(maxVotes, 10) } });
    }
  }

  try {
    // Get questions with filtering
    const questions = await Question.find(filter)
      .populate('user', 'username') // Populate user details
      .sort({ createdAt: -1 }); // Sort by most recent

    if (questions.length === 0) {
      return res.status(404).json({ error: 'No questions found' });
    }

    // Get the number of answers for each question
    const questionsWithAnswerCount = await Promise.all(
      questions.map(async (question) => {
        const answerCount = await Answer.countDocuments({ question: question._id });
        return {
          ...question.toObject(),
          answerCount,
        };
      })
    );

    res.status(200).json(questionsWithAnswerCount);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while fetching questions' });
  }
};
// export const getQuestions = async (req, res) => {
//   const { tags, minVotes, maxVotes, status, search } = req.query;

//   const filter = {};

//   if (tags) filter.tags = { $in: tags.split(',') };
//   if (status) filter.status = status;
//   if (search) {
//     filter.$or = [
//       { title: { $regex: search, $options: 'i' } },
//       { body: { $regex: search, $options: 'i' } },
//     ];
//   }
//   if (minVotes || maxVotes) {
//     filter.$and = [];
//     if (minVotes) {
//       filter.$and.push({ upvotes: { $gte: parseInt(minVotes, 10) } });
//     }
//     if (maxVotes) {
//       filter.$and.push({ upvotes: { $lte: parseInt(maxVotes, 10) } });
//     }
//   }

//   try {
//     // Get questions with filtering
//     const questions = await Question.find(filter)
//       .populate('user', 'username') // Populate user details
//       .sort({ createdAt: -1 }); // Sort by most recent

//     if (questions.length === 0) {
//       return res.status(404).json({ error: 'No questions found' });
//     }

//     res.status(200).json(questions);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error while fetching questions' });
//   }
// };

// Get a question by ID
export const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id).populate('user', 'username');

    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    res.status(200).json(question);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while fetching question by ID' });
  }
};

// Update Question (Example: Updating the status of the question)
export const updateQuestion = async (req, res) => {
  const { title, body, tags, status } = req.body;

  try {
    // Validate the request data
    if (!title || title.length < 5) {
      return res.status(400).json({ error: 'Title should be at least 5 characters long.' });
    }
    if (!body || body.length < 20) {
      return res.status(400).json({ error: 'Body should be at least 20 characters long.' });
    }

    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    if (question.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'You are not authorized to update this question' });
    }

    // Update the question
    question.title = title || question.title;
    question.body = body || question.body;
    question.tags = tags || question.tags;
    question.status = status || question.status;

    await question.save();
    res.status(200).json(question);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while updating question' });
  }
};

// Delete Question
export const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    // Ensure the user is the author of the question
    if (question.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'You are not authorized to delete this question' });
    }

    // Delete the question
    await question.remove();
    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while deleting question' });
  }
};
// export const getUserAndAnswersByQuestion = async (req, res) => {
//   const { questionId } = req.params;

//   try {
//     // Check if the question exists
//     const question = await Question.findById(questionId).populate('user', 'username');
//     if (!question) {
//       return res.status(404).json({ error: 'Question not found' });
//     }

//     // Fetch answers for the question
//     const answers = await Answer.find({ question: questionId })
//       .populate('user', 'username') // Populate user details for each answer
//       .sort({ createdAt: -1 }); // Sort by most recent

//     if (answers.length === 0) {
//       return res.status(404).json({ error: 'No answers found for this question' });
//     }

//     // Combine question author and answers
//     const response = {
//       questionAuthor: question.user,
//       answers,
//     };

//     res.status(200).json(response);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error while fetching user and answers' });
//   }
// };
export const getUserAndAnswersByQuestion = async (req, res) => {
  const { questionId } = req.params;

  try {
    // Fetch question with populated user
    const question = await Question.findById(questionId).populate('user', 'username reputation');
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    // Fetch answers for the question
    const answers = await Answer.find({ question: questionId })
      .populate('user', 'username reputation')
      .sort({ createdAt: -1 });

    // Return structured response
    const response = {
      question: {
        _id: question._id,
        title: question.title,
        body: question.body,
        tags: question.tags,
        createdAt: question.createdAt,
        updatedAt: question.updatedAt,
        questionAuthor: {
          username: question.user.username,
          reputation: question.user.reputation || 0
        }
      },
      answers: answers.map(answer => ({
        _id: answer._id,
        body: answer.body,
        createdAt: answer.createdAt,
        status: answer.status,
        upvotes: answer.upvotes,
        downvotes: answer.downvotes,
        user: {
          username: answer.user.username,
          reputation: answer.user.reputation || 0
        }
      }))
    };

    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while fetching question details' });
  }
};
