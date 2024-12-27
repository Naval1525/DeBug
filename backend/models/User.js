import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Please provide a valid email address.'],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    reputation: {
      type: Number,
      default: 0,
      min: 0,

    },
    dateJoined: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }  // This will automatically add createdAt and updatedAt fields
);

export default mongoose.model('User', userSchema);
