import axios from 'axios';
import { API_CONFIG } from '../constants/config';

/**
 * Instância do axios configurada com a URL base da API
 */
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

/**
 * Serviço para buscar dados do portfólio
 */
export const portfolioService = {
  /**
   * Busca todos os projetos
   * @returns {Promise} Lista de projetos
   */
  getProjects: async () => {
    const response = await apiClient.get('/projects');
    return response.data;
  },

  /**
   * Busca um projeto específico
   * @param {string} projectId - ID do projeto
   * @returns {Promise} Dados do projeto
   */
  getProjectById: async (projectId) => {
    const response = await apiClient.get(`/projects/${projectId}`);
    return response.data;
  },
};

/**
 * Serviço para envio de mensagens de contato
 */
export const contactService = {
  /**
   * Envia uma mensagem de contato
   * @param {Object} messageData - Dados da mensagem { nome, email, assunto, mensagem }
   * @returns {Promise} Resposta da API
   * @throws {Error} Erro caso a requisição falhe
   */
  sendMessage: async (messageData) => {
    try {
      const response = await apiClient.post(API_CONFIG.endpoints.contact, messageData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
}; 