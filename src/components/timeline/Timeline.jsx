import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Timeline = () => {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
      year: '2022',
      period: '2022',
      title: 'IT Intern',
      company: 'Integrance Finance and Consulting Services',
      description: 'Início da carreira em tecnologia, atuando no apoio a processos internos de TI, participação em reuniões técnicas e melhoria de fluxos operacionais.',
      isCurrent: false,
    },
    {
      year: '2023',
      period: '2023–2024',
      title: 'Front-End Developer',
      company: 'Inova e-Business',
      description: 'Atuação focada em React.js e Next.js 13, com destaque para projetos de e-commerce e marketplace. Trabalhei com formulários avançados, integração com APIs REST, otimização de performance e SEO, além de colaboração direta com times de design e back-end.',
      isCurrent: false,
    },
    {
      year: '2024',
      period: '2024–2025',
      title: 'Front-End Developer',
      company: 'Wareline',
      description: 'Desenvolvimento e manutenção de sistemas corporativos utilizando JSF, SASS e Bootstrap. Responsável por evoluir funcionalidades, melhorar a interface do usuário e traduzir layouts do Figma para interfaces funcionais, atuando em ambiente ágil (Scrum e Kanban).',
      isCurrent: false,
    },
    {
      year: '2025',
      period: '2025',
      title: 'Full-stack Developer (Freelance)',
      company: 'Logithink',
      description: 'Atuação em projetos end-to-end, desenvolvendo aplicações web com React.js e Node.js. Trabalhei com APIs REST, componentes reutilizáveis, otimização de aplicações React e padronização de ambientes com Docker.',
      isCurrent: false,
    },
    {
      year: '2025',
      period: '2025 – Atual',
      title: 'Front-end Developer',
      company: 'Mais Mottoristas',
      description: 'Responsável pela construção, manutenção e otimização de interfaces front-end utilizando React.js. Atuo na criação de componentes escaláveis, implementação de layouts responsivos e acessíveis a partir do Figma, correção de bugs, melhoria de performance e colaboração contínua com designers e back-end.',
      isCurrent: true,
    },
  ];

  return (
    <section
      className={`relative py-24 bg-gradient-to-br from-[rgba(255,0,193,0.1)] to-[rgba(255,136,228,0.1)] backdrop-blur-[10px] transition-colors duration-300 overflow-hidden border-t border-[rgba(255,105,180,0.2)] mx-8 rounded-[15px_80px_20px_70px] shadow-[0_0_20px_rgba(255,0,193,0.1),0_0_40px_rgba(255,136,228,0.1),inset_0_0_20px_rgba(255,0,193,0.05)] animate-[borderRadiusAnimation_10s_ease-in-out_infinite] ${
        isDarkMode ? 'dark-mode' : ''
      }`}
      id="timeline"
    >
      <div className="relative z-[1] max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1
              className="text-5xl md:text-7xl font-semibold font-serif text-primary relative uppercase tracking-[8px] m-0 p-0 animate-[digitalPulse_3s_ease-in-out_infinite] drop-shadow-[0_0_2px_rgba(255,0,193,0.3),0_0_4px_rgba(255,136,228,0.2),0_0_6px_rgba(255,58,210,0.1)]"
              data-text="Experiências"
            >
              Experiências
            </h1>
          </div>
        </div>

        <div className="relative">
          {/* Linha vertical da timeline */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-neon-blue transform md:-translate-x-1/2 opacity-60"></div>

          {/* Itens da timeline */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Ponto na linha */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-primary bg-bg-dark transition-all duration-300 ${
                      experience.isCurrent
                        ? 'animate-pulse shadow-[0_0_15px_rgba(255,0,193,0.8)]'
                        : 'hover:scale-125 hover:shadow-[0_0_10px_rgba(255,0,193,0.5)]'
                    }`}
                  >
                    {experience.isCurrent && (
                      <div className="w-full h-full rounded-full bg-primary animate-ping absolute"></div>
                    )}
                  </div>
                </div>

                {/* Conteúdo */}
                <div
                  className={`ml-16 md:ml-0 md:w-[45%] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="relative p-6 bg-[rgba(255,255,255,0.1)] rounded-[15px] backdrop-blur-[10px] border border-[rgba(255,255,255,0.2)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transform-style-preserve-3d perspective-[1000px] transition-all duration-300 overflow-hidden hover:translate-z-[20px] hover:rotate-x-[5deg] hover:bg-[rgba(255,255,255,0.15)] hover:border-[rgba(255,105,180,0.3)] group">
                    {/* Efeito de brilho no hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,105,180,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>

                    <div className="relative z-[1]">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-primary font-bold text-lg font-mono">
                          {experience.period}
                        </span>
                        {experience.isCurrent && (
                          <span className="px-2 py-1 text-xs font-semibold bg-primary text-white rounded-full animate-pulse">
                            Atual
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 font-semibold">
                        {experience.title}
                      </h3>

                      <h4 className="text-lg md:text-xl text-primary mb-4 font-semibold">
                        {experience.company}
                      </h4>

                      <p className="text-white text-sm md:text-base leading-relaxed opacity-90">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

