import express from 'express';
import { getAllUsers, getUserDetails, login, register } from '../controllers/userController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// User registration and login routes
router.post('/register', register);
router.post('/login', login);
router.get('/user',  getUserDetails);
router.get('/users', getAllUsers);

export default router;
