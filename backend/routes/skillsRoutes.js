const express = require('express');
const router = express.Router();
const {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill
} = require('../controllers/skillsController');

// GET all skills & POST new skill
router.route('/')
  .get(getAllSkills)
  .post(createSkill);

// GET, PUT, DELETE skill by ID
router.route('/:id')
  .get(getSkillById)
  .put(updateSkill)
  .delete(deleteSkill);

module.exports = router; 