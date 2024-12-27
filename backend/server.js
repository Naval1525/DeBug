import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";

import questionRoutes from "./routes/questionRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import answerRoutes from "./routes/answerRoutes.js";
import reputationRoutes from './routes/reputationRoutes.js';
import errorHandler from "./middleware/errorHandler.js";

import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();
app.use(cookieParser());

// Secure HTTP headers
app.use(helmet());

// CORS configuration to allow only your frontend's origin
const corsOptions = {
  origin: "https://thunderous-lollipop-dc7bbf.netlify.app/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions)); // Apply CORS middleware with options

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
});
app.use(limiter);

// Parse incoming JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answers", answerRoutes);
app.use('/api/reputation', reputationRoutes);

// 404 Route
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handling middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful Shutdown
process.on("SIGINT", async () => {
  console.log("Shutting down server...");
  await mongoose.disconnect();
  process.exit(0);
});
