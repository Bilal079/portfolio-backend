const Education = require('../models/Education');

// @desc    Get all education records
// @route   GET /api/education
// @access  Public
const getAllEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ startDate: -1 });
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single education record
// @route   GET /api/education/:id
// @access  Public
const getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    
    if (!education) {
      return res.status(404).json({ message: 'Education record not found' });
    }
    
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new education record
// @route   POST /api/education
// @access  Public (should be protected in a real app)
const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    const savedEducation = await education.save();
    res.status(201).json(savedEducation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update an education record
// @route   PUT /api/education/:id
// @access  Public (should be protected in a real app)
const updateEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    
    if (!education) {
      return res.status(404).json({ message: 'Education record not found' });
    }
    
    const updatedEducation = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(200).json(updatedEducation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete an education record
// @route   DELETE /api/education/:id
// @access  Public (should be protected in a real app)
const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    
    if (!education) {
      return res.status(404).json({ message: 'Education record not found' });
    }
    
    await Education.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Education record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation
}; 