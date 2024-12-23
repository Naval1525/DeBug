import express from 'express';
import { createQuestion, getQuestions, getQuestionById } from '../controllers/questionController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Apply auth middleware only to protected routes
router.post('/create', auth, createQuestion);
router.get('/', getQuestions);
router.get('/:id', getQuestionById);

export default router;
