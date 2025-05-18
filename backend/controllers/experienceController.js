const Experience = require('../models/Experience');

// @desc    Get all experiences
// @route   GET /api/experience
// @access  Public
const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ startDate: -1 });
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single experience
// @route   GET /api/experience/:id
// @access  Public
const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    
    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new experience
// @route   POST /api/experience
// @access  Public (should be protected in a real app)
const createExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    const savedExperience = await experience.save();
    res.status(201).json(savedExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update an experience
// @route   PUT /api/experience/:id
// @access  Public (should be protected in a real app)
const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(200).json(updatedExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete an experience
// @route   DELETE /api/experience/:id
// @access  Public (should be protected in a real app)
const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    
    await Experience.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Experience deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience
}; 