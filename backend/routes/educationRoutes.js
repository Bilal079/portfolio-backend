const express = require('express');
const router = express.Router();
const {
  getAllEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation
} = require('../controllers/educationController');

// GET all education & POST new education
router.route('/')
  .get(getAllEducation)
  .post(createEducation);

// GET, PUT, DELETE education by ID
router.route('/:id')
  .get(getEducationById)
  .put(updateEducation)
  .delete(deleteEducation);

module.exports = router; 