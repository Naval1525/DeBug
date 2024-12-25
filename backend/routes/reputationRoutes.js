import express from 'express';
import { handleQuestionCreation, handleAnswerCreation, handleVotes, handleAnswerAccepted, getUserReputation } from '../controllers/reputationController.js';
import Question from '../models/Question.js';
import Answer from '../models/Answer.js';

const router = express.Router();

// Route to create a new question and update reputation
router.post('/questions', async (req, res) => {
  const { title, body, user, tags } = req.body;

  try {
    const question = new Question({ title, body, user, tags });
    await question.save();

    // Handle reputation for question creation
    await handleQuestionCreation(user);

    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to create a new answer and update reputation
router.post('/answers', async (req, res) => {
  const { body, user, question } = req.body;

  try {
    const answer = new Answer({ body, user, question });
    await answer.save();

    // Handle reputation for answer creation
    await handleAnswerCreation(user);

    res.status(201).json(answer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to update votes on an answer and adjust reputation accordingly
router.patch('/answers/:id/votes', async (req, res) => {
  const { id } = req.params;
  const { upvotes, downvotes } = req.body;

  try {
    const answer = await Answer.findById(id);
    if (!answer) {
      return res.status(404).json({ error: 'Answer not found' });
    }

    const upvoteChange = upvotes - answer.upvotes;
    const downvoteChange = downvotes - answer.downvotes;

    // Update the answer's votes
    answer.upvotes = upvotes;
    answer.downvotes = downvotes;
    await answer.save();

    // Handle reputation update based on votes
    await handleVotes(answer.user, upvoteChange, downvoteChange);

    res.status(200).json(answer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to mark an answer as accepted and reward reputation
router.patch('/answers/:id/accept', async (req, res) => {
  const { id } = req.params;

  try {
    const answer = await Answer.findById(id);
    if (!answer) {
      return res.status(404).json({ error: 'Answer not found' });
    }

    answer.status = 'accepted';
    await answer.save();

    // Handle reputation for accepted answer
    await handleAnswerAccepted(answer.user);

    res.status(200).json(answer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get user reputation
router.get('/users/:userId/reputation', async (req, res) => {
  const { userId } = req.params;

  try {
    const reputation = await getUserReputation(userId);
    res.status(200).json({ reputation });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reputation' });
  }
});

export default router;
