const BASE_URL = process.env.REACT_APP_API_URL || 'https://api.exemplo.com';

/**
 * Configuração padrão para requisições fetch
 */
const defaultConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * Função auxiliar para tratar erros de requisição
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

/**
 * Serviço para buscar dados do portfólio
 */
export const portfolioService = {
  /**
   * Busca todos os projetos
   */
  getProjects: async () => {
    const response = await fetch(`${BASE_URL}/projects`, defaultConfig);
    return handleResponse(response);
  },

  /**
   * Busca um projeto específico
   * @param {string} projectId - ID do projeto
   */
  getProjectById: async (projectId) => {
    const response = await fetch(`${BASE_URL}/projects/${projectId}`, defaultConfig);
    return handleResponse(response);
  },
};

/**
 * Serviço para envio de mensagens de contato
 */
export const contactService = {
  /**
   * Envia uma mensagem de contato
   * @param {Object} messageData - Dados da mensagem
   */
  sendMessage: async (messageData) => {
    const response = await fetch(`${BASE_URL}/contact`, {
      ...defaultConfig,
      method: 'POST',
      body: JSON.stringify(messageData),
    });
    return handleResponse(response);
  },
}; 