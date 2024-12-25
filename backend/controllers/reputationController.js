import User from '../models/User.js';
import Question from '../models/Question.js';
import Answer from '../models/Answer.js';

/**
 * Increment a user's reputation by a specified number of points.
 * @param {string} userId - User's ID.
 * @param {number} points - Points to add to the user's reputation.
 */
const incrementReputation = async (userId, points) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Ensure reputation stays within bounds (0 to 10,000)
    user.reputation = Math.min(Math.max(user.reputation + points, 0), 10000);

    await user.save();
    console.log(`Reputation updated for user ${user.username}: +${points}`);
  } catch (error) {
    console.error(`Error updating reputation for user ${userId}: ${error.message}`);
  }
};

/**
 * Handle reputation changes when a user asks a question.
 * Award 5 points for asking a question.
 * @param {string} userId - User's ID who asked the question.
 */
export const handleQuestionCreation = async (userId) => {
  await incrementReputation(userId, 5); // +5 points for asking a question
};

/**
 * Handle reputation changes when a user answers a question.
 * Award 10 points for answering a question.
 * @param {string} userId - User's ID who answered the question.
 */
export const handleAnswerCreation = async (userId) => {
  await incrementReputation(userId, 10); // +10 points for answering a question
};

/**
 * Handle reputation changes based on upvotes and downvotes on an answer.
 * +2 points per upvote, -2 points per downvote.
 * @param {string} userId - User's ID who owns the answer.
 * @param {number} upvoteChange - Change in the number of upvotes.
 * @param {number} downvoteChange - Change in the number of downvotes.
 */
export const handleVotes = async (userId, upvoteChange, downvoteChange) => {
  const points = 2 * upvoteChange - 2 * downvoteChange; // +2 for upvote, -2 for downvote
  await incrementReputation(userId, points);
};

/**
 * Handle reputation when an answer is accepted.
 * Award 15 points for every accepted answer.
 * @param {string} userId - User's ID who owns the accepted answer.
 */
export const handleAnswerAccepted = async (userId) => {
  await incrementReputation(userId, 15); // +15 points for accepted answer
};

/**
 * Get the current reputation of a user.
 * @param {string} userId - User's ID.
 * @returns {Promise<number>} - The current reputation of the user.
 */
export const getUserReputation = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user.reputation;
  } catch (error) {
    console.error(`Error fetching reputation for user ${userId}: ${error.message}`);
    return 0; // Return 0 if there's an error
  }
};
