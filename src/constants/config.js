
export const APP_CONFIG = {
  name: process.env.REACT_APP_NAME || 'Portfolio',
  description: 'Meu portfólio pessoal',
  author: process.env.REACT_APP_AUTHOR || 'Andresa A Ribeiro',
  email: process.env.REACT_APP_EMAIL || 'andresa_15ga@hotmail.com',
  socialLinks: {
    github: process.env.REACT_APP_GITHUB_URL || 'https://github.com/Andresa-Alves-Ribeiro',
    linkedin: process.env.REACT_APP_LINKEDIN_URL || 'https://www.linkedin.com/in/andresa-alves-ribeiro/',
    whatsapp: process.env.REACT_APP_WHATSAPP_NUMBER || '5519997516202',
  }
};

export const ROUTES = {
  home: '/',
  projectDetails: '/project/:title',
};


export const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_URL || 'https://backend-portfolio-efg8.onrender.com',
  endpoints: {
    contact: process.env.REACT_APP_CONTACT_API_ENDPOINT || '/enviar-email',
  }
}; 