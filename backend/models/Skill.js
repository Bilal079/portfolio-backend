const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required'],
    trim: true
  },
  level: {
    type: Number,
    min: 1,
    max: 5,
    default: 3
  },
  category: {
    type: String,
    enum: ['Programming', 'Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Other'],
    default: 'Other'
  },
  icon: {
    type: String
  },
  yearsOfExperience: {
    type: Number
  }
}, {
  timestamps: true
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill; 