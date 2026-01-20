import axios from 'axios';
import { API_CONFIG } from '../constants/config';


const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      const errorMessage = data?.message || data?.error || `Erro ${status}: ${error.message}`;
      return Promise.reject(new Error(errorMessage));
    } else if (error.request) {
      return Promise.reject(new Error('Erro de conexão. Verifique sua internet e tente novamente.'));
    } else {
      return Promise.reject(new Error('Erro ao processar requisição. Tente novamente.'));
    }
  }
);


export const portfolioService = {
  
  getProjects: async () => {
    const response = await apiClient.get('/projects');
    return response.data;
  },

  
  getProjectById: async (projectId) => {
    const response = await apiClient.get(`/projects/${projectId}`);
    return response.data;
  },
};


export const contactService = {
  
  sendMessage: async (messageData) => {
    const response = await apiClient.post(API_CONFIG.endpoints.contact, messageData);
    return response.data;
  },
}; 