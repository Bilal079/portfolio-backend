const express = require('express');
const router = express.Router();
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectsController');

// GET all projects & POST new project
router.route('/')
  .get(getAllProjects)
  .post(createProject);

// GET, PUT, DELETE project by ID
router.route('/:id')
  .get(getProjectById)
  .put(updateProject)
  .delete(deleteProject);

module.exports = router; 