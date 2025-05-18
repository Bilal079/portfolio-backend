require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');

// Import models
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Education = require('./models/Education');
const Experience = require('./models/Experience');

// Sample data
const projects = [
  {
    title: 'Chess',
    description: 'My project for Programming Fundamentals was Chess which focused on implementing the classic game of chess using fundamental programming concepts. It included designing the game board, handling piece movements, enforcing rules, and implementing basic game logic.',
  },
  {
    title: 'FPS Zombie Apocalypse Game',
    description: 'As part of my game development project, I created an FPS zombie apocalypse game in Unity. It featured AI-controlled zombie enemies, weapon mechanics, survival mechanics, and immersive level design to create a thrilling gameplay experience.',
  },
  {
    title: 'Vim-like Text Editor',
    description: 'For my Data Structures project, I developed a Vim-inspired text editor in C++. It supported basic text navigation, editing commands, and efficient data structures for handling text manipulation, making it a lightweight yet powerful tool.',
  }
];

const skills = [
  {
    name: 'JavaScript',
    level: 5,
    category: 'Programming',
    yearsOfExperience: 4
  },
  {
    name: 'React',
    level: 5,
    category: 'Frontend',
    yearsOfExperience: 3
  },
  {
    name: 'Node.js',
    level: 4,
    category: 'Backend',
    yearsOfExperience: 3
  },
  {
    name: 'MongoDB',
    level: 4,
    category: 'Database',
    yearsOfExperience: 2
  },
  {
    name: 'Express',
    level: 4,
    category: 'Backend',
    yearsOfExperience: 3
  }
];

const education = [
  {
    institution: 'Harvard University',
    degree: 'Master of Science',
    field: 'Computer Science',
    location: 'Cambridge, MA',
    startDate: '2020-09-01',
    endDate: '2022-05-30',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Completed thesis on "Neural Networks for Natural Language Processing".',
    grade: '3.9 GPA'
  },
  {
    institution: 'MIT',
    degree: 'Bachelor of Science',
    field: 'Software Engineering',
    location: 'Cambridge, MA',
    startDate: '2016-09-01',
    endDate: '2020-05-30',
    description: 'Focused on software design patterns, algorithms, and web technologies. Participated in hackathons and coding competitions.',
    grade: '3.8 GPA'
  }
];

const experiences = [
  {
    company: 'Google',
    position: 'Senior Frontend Developer',
    location: 'Mountain View, CA',
    startDate: '2020-06-01',
    endDate: null,
    current: true,
    description: 'Working on the Google Cloud Platform team developing web interfaces for cloud services and improving user experience.',
    responsibilities: [
      'Lead frontend development for Google Cloud Console',
      'Developed and maintained component libraries used across multiple Google products',
      'Collaborated with UX designers to implement responsive interfaces',
      'Mentored junior developers and conducted code reviews'
    ],
    skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'GraphQL']
  },
  {
    company: 'Facebook',
    position: 'Software Engineer',
    location: 'Menlo Park, CA',
    startDate: '2018-04-15',
    endDate: '2020-05-30',
    current: false,
    description: 'Worked on the News Feed team, implementing new features and optimizing performance.',
    responsibilities: [
      'Built and maintained key components of the Facebook News Feed',
      'Improved rendering performance by 35%',
      'Implemented A/B testing framework for feature releases',
      'Participated in on-call rotations to fix critical issues'
    ],
    skills: ['React', 'Redux', 'JavaScript', 'PHP', 'GraphQL']
  }
];

// Connect to database
connectDB();

// Seed function
const seedDB = async () => {
  try {
    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Education.deleteMany({});
    await Experience.deleteMany({});
    
    console.log('Existing data cleared');
    
    // Insert new data
    await Project.insertMany(projects);
    console.log(`${projects.length} projects added`);
    
    await Skill.insertMany(skills);
    console.log(`${skills.length} skills added`);
    
    await Education.insertMany(education);
    console.log(`${education.length} education records added`);
    
    await Experience.insertMany(experiences);
    console.log(`${experiences.length} experiences added`);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDB(); 