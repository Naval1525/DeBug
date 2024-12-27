import mongoose from 'mongoose';

// const answerSchema = new mongoose.Schema(
//   {
//     body: {
//       type: String,
//       required: true,
//       minlength: 10,
//     },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true
//     },
//     question: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Question',
//       required: true
//     },
//     upvotes: {
//       type: Number,
//       default: 0
//     },
//     downvotes: {
//       type: Number,
//       default: 0
//     },
//     status: {
//       type: String,
//       enum: ['accepted', 'pending'],
//       default: 'pending'
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model('Answer', answerSchema);
const answerSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
      minlength: 10,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['accepted', 'pending'],
      default: 'pending',
    },
    voters: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        action: {
          type: String,
          enum: ['upvote', 'downvote'],
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Answer', answerSchema);
