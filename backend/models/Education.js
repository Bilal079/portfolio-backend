const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  institution: {
    type: String,
    required: [true, 'Institution name is required']
  },
  degree: {
    type: String,
    required: [true, 'Degree is required']
  },
  field: {
    type: String,
    required: [true, 'Field of study is required']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date,
    default: null
  },
  description: {
    type: String
  },
  grade: {
    type: String
  },
  location: {
    type: String
  }
}, {
  timestamps: true
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education; 