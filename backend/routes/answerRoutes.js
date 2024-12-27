import express from 'express';
import { postAnswer, updateVote } from '../controllers/answerController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Protected route for posting an answer
router.post('/', auth, postAnswer);
router.put('/:answerId/vote',auth, updateVote);

export default router;
