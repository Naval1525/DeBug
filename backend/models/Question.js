// import mongoose from 'mongoose';

// const QuestionSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     minlength: 5,
//     maxlength: 100,
//   },
//   body: {
//     type: String,
//     required: true,
//     minlength: 20,
//   },
//   tags: {
//     type: [String],
//     required: true,
//     validate: {
//       validator: function (tags) {
//         return tags.length > 0 && tags.every(tag => tag.length <= 30); // Ensure tags are not empty and have reasonable length
//       },
//       message: 'Tags cannot be empty and each tag must be less than 30 characters',
//     },
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
// }, { timestamps: true });

// const Question = mongoose.model('Question', QuestionSchema);

// export default Question;
import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  body: {
    type: String,
    required: true,
    minlength: 20,
  },
  tags: {
    type: [String],
    required: true,
    validate: {
      validator: function(tags) {
        return tags.length > 0 && tags.every(tag => tag.length <= 30);
      },
      message: 'Tags cannot be empty and each tag must be less than 30 characters',
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // Add vote tracking
  votes: {
    type: Number,
    default: 0
  },
  upvotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  downvotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { timestamps: true });

const Question = mongoose.model('Question', QuestionSchema);
export default Question;