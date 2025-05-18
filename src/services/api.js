import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

console.log('API URL:', API_URL); // Debug log to check API URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log(`Response from ${response.config.url}:`, response.status);
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    return Promise.reject(error);
  }
);

// Education API calls
export const educationApi = {
  getAll: () => api.get('/api/education'),
  getById: (id) => api.get(`/api/education/${id}`),
  create: (data) => api.post('/api/education', data),
  update: (id, data) => api.put(`/api/education/${id}`, data),
  delete: (id) => api.delete(`/api/education/${id}`),
};

// Skills API calls
export const skillsApi = {
  getAll: () => api.get('/api/skills'),
  getById: (id) => api.get(`/api/skills/${id}`),
  create: (data) => api.post('/api/skills', data),
  update: (id, data) => api.put(`/api/skills/${id}`, data),
  delete: (id) => api.delete(`/api/skills/${id}`),
};

// Projects API calls
export const projectsApi = {
  getAll: () => api.get('/api/projects'),
  getById: (id) => api.get(`/api/projects/${id}`),
  create: (data) => api.post('/api/projects', data),
  update: (id, data) => api.put(`/api/projects/${id}`, data),
  delete: (id) => api.delete(`/api/projects/${id}`),
};

// Experience API calls
export const experienceApi = {
  getAll: () => api.get('/api/experience'),
  getById: (id) => api.get(`/api/experience/${id}`),
  create: (data) => api.post('/api/experience', data),
  update: (id, data) => api.put(`/api/experience/${id}`, data),
  delete: (id) => api.delete(`/api/experience/${id}`),
};

export default api; 