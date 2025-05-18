const express = require('express');
const router = express.Router();
const {
  getAllExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience
} = require('../controllers/experienceController');

// GET all experiences & POST new experience
router.route('/')
  .get(getAllExperiences)
  .post(createExperience);

// GET, PUT, DELETE experience by ID
router.route('/:id')
  .get(getExperienceById)
  .put(updateExperience)
  .delete(deleteExperience);

module.exports = router; 