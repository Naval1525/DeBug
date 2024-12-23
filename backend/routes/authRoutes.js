import express from 'express';
import { login, register } from '../controllers/userController.js';

const router = express.Router();

// User registration and login routes
router.post('/register', register);
router.post('/login', login);

export default router;
