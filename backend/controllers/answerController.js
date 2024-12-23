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
