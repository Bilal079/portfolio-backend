import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Skeleton, Fade, Alert } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { projectsApi } from '../../services/api';

// Fallback data in case API fails
const fallbackProjects = [
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

const Projects = () => {
  const { setPageTitle } = usePageTitle();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPageTitle('Projects');
    
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await projectsApi.getAll();
        console.log('Projects API response:', response);
        
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          setProjects(response.data);
          setError(null);
        } else {
          console.log('No projects found in API response, using fallback');
          setProjects(fallbackProjects);
          setError('No projects found. Using default projects.');
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
        // Use fallback data if API fails
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [setPageTitle]);

  // If no projects and not loading, use fallback
  useEffect(() => {
    if (!loading && projects.length === 0) {
      console.log('No projects after loading, using fallback');
      setProjects(fallbackProjects);
    }
  }, [loading, projects.length]);

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom align="center">
        Projects
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      
      {loading ? (
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Skeleton variant="text" height={40} width="80%" />
                  <Skeleton variant="text" height={20} />
                  <Skeleton variant="text" height={20} />
                  <Skeleton variant="text" height={20} />
                  <Skeleton variant="text" height={20} width="60%" />
                </CardContent>
                <CardActions>
                  <Skeleton variant="rectangular" height={30} width={100} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : projects && projects.length > 0 ? (
        <Fade in={!loading} timeout={300}>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={project._id || index}>
                <Card 
                  className="hover-transition"
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)'
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>
                      {project.description}
                    </Typography>
                    {project.technologies && project.technologies.length > 0 && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" color="text.secondary">
                          Technologies: {project.technologies.join(', ')}
                        </Typography>
                      </Box>
                    )}
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View Details</Button>
                    {project.githubUrl && (
                      <Button 
                        size="small" 
                        color="primary" 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button 
                        size="small" 
                        color="primary" 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Fade>
      ) : (
        <Alert severity="info">No projects available. Please add some projects.</Alert>
      )}
    </Box>
  );
};

export default Projects; 