import Answer from '../models/Answer.js';
import Question from '../models/Question.js';

// Post an Answer
export const postAnswer = async (req, res) => {
  const { questionId, body } = req.body;

  try {
    const question = await Question.findById(questionId);
    if (!question) return res.status(404).json({ error: 'Question not found' });

    const answer = new Answer({
      body,
      user: req.user._id,  // Use the authenticated user's ID
      question: questionId,
    });

    await answer.save();

    // Update question status to 'answered'
    question.status = 'answered';
    await question.save();

    res.status(201).json(answer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateVote = async (req, res) => {
  const { answerId } = req.params;
  const { action, userId } = req.body; // 'upvote' or 'downvote'


  try {
    const answer = await Answer.findById(answerId);
    if (!answer) return res.status(404).json({ error: 'Answer not found' });

    // Check if the user has already voted
    const existingVote = answer.voters.find((vote) => vote.userId.toString() === userId);


    if (existingVote) {
      // If the user has already upvoted
      if (existingVote.action === 'upvote') {
        if (action === 'upvote') {
          return res.status(400).json({ error: 'User  has already upvoted this answer.' });
        } else if (action === 'downvote') {
          // If the user is switching from upvote to downvote
          answer.upvotes -= 1; // Decrease upvote count
          answer.downvotes += 1; // Increase downvote count
          existingVote.action = 'downvote'; // Update the existing vote
        }
      } else if (existingVote.action === 'downvote') {
        if (action === 'downvote') {
          return res.status(400).json({ error: 'User  has already downvoted this answer.' });
        } else if (action === 'upvote') {
          // If the user is switching from downvote to upvote
          answer.downvotes -= 1; // Decrease downvote count
          answer.upvotes += 1; // Increase upvote count
          existingVote.action = 'upvote'; // Update the existing vote
        }
      }
    } else {
      // If the user has not voted yet
      if (action === 'upvote') {
        answer.upvotes += 1; // Increase upvote count
      } else if (action === 'downvote') {
        answer.downvotes += 1; // Increase downvote count
      } else {
        return res.status(400).json({ error: 'Invalid action. Use "upvote" or "downvote".' });
      }

      // Record the vote
      answer.voters.push({ userId, action });
    }

    const updatedAnswer = await answer.save();

    res.status(200).json({
      message: `Answer successfully ${action}d`,
      answer: updatedAnswer,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// export const updateVote = async (req, res) => {
//   const { answerId } = req.params;
//   const { action, userId } = req.body; // 'upvote' or 'downvote'

//   try {
//     const answer = await Answer.findById(answerId);
//     if (!answer) return res.status(404).json({ error: 'Answer not found' });

//     // Check if the user has already voted
//     const existingVote = answer.voters.find((vote) => vote.userId.toString() === userId);

//     if (existingVote) {
//       return res.status(400).json({ error: 'User has already voted on this answer.' });
//     }

//     if (action === 'upvote') {
//       answer.upvotes += 1;
//     } else if (action === 'downvote') {
//       answer.downvotes += 1;
//     } else {
//       return res.status(400).json({ error: 'Invalid action. Use "upvote" or "downvote".' });
//     }

//     // Record the vote
//     answer.voters.push({ userId, action });

//     const updatedAnswer = await answer.save();

//     res.status(200).json({
//       message: `Answer successfully ${action}d`,
//       answer: updatedAnswer,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
