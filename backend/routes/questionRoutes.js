import express from 'express';
import { createQuestion, getQuestions, getQuestionById, getUserAndAnswersByQuestion, voteQuestion } from '../controllers/questionController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Apply auth middleware only to protected routes
router.post('/create', auth, createQuestion);
router.get('/', getQuestions);
router.get('/:id', getQuestionById);
router.get('/:questionId/user-answers', getUserAndAnswersByQuestion);
router.post('/:questionId/vote', auth, voteQuestion);

export default router;
