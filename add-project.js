const axios = require('axios');

const API_URL = 'http://localhost:5000';

// Sample project
const project = {
  title: 'Portfolio Website',
  description: 'A personal portfolio website built with React frontend and Node.js/Express backend with MongoDB database. Features responsive design, dark mode, and contact form.',
  technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Material-UI'],
  githubUrl: 'https://github.com/username/portfolio',
  liveUrl: 'https://portfolio-demo.com',
  featured: true
};

async function addProject() {
  try {
    console.log('Adding project to database...');
    const response = await axios.post(`${API_URL}/api/projects`, project);
    console.log('Project added successfully:');
    console.log(response.data);
  } catch (error) {
    console.error('Failed to add project:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

addProject(); 