import React from 'react';

const Timeline = () => {
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
      className="relative py-24 overflow-hidden"
      id="timeline"
    >
      {/* Decorações */}
      <div className="absolute top-10 right-10 text-3xl opacity-20 animate-float-cat">🐱</div>
      <div className="absolute bottom-10 left-10 text-2xl opacity-20 animate-wiggle">💕</div>

      <div className="relative z-[1] max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-4xl animate-wiggle">📝</span>
              <h1 className="diary-title text-4xl md:text-6xl font-handwriting">
                Experiências
              </h1>
              <span className="text-4xl animate-wiggle">📝</span>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Pegadas pretas ao longo de TODA a timeline - caminho contínuo e denso */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 z-0 pointer-events-none">
            {/* Pegadas distribuídas uniformemente ao longo de toda a altura - todas do mesmo tamanho */}
            {Array.from({ length: 30 }).map((_, i) => {
              const totalPositions = 30;
              const position = (i / (totalPositions - 1)) * 100;
              const rotation = i % 2 === 0 ? '15deg' : '-15deg';
              const offsetX = i % 2 === 0 ? '3px' : '-3px';
              return (
                <div 
                  key={`paw-path-${i}`}
                  className="absolute text-black text-2xl md:text-3xl opacity-60"
                  style={{
                    top: `${position}%`,
                    left: `calc(50% + ${offsetX})`,
                    transform: `translate(-50%, -50%) rotate(${rotation})`
                  }}
                >
                  🐾
                </div>
              );
            })}
          </div>

          {/* Itens da timeline */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >

                {/* Conteúdo */}
                <div
                  className={`ml-16 md:ml-0 md:w-[45%] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="diary-section relative group">
                    <div className="absolute -top-2 -right-2 text-xl animate-sparkle">✨</div>
                    <div className="relative z-[1]">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-primary-dark font-bold text-lg font-handwriting">
                          {experience.period}
                        </span>
                        {experience.isCurrent && (
                          <span className="px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full animate-heart-beat">
                            💖 Atual
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-handwriting text-primary-dark mb-2 font-bold">
                        {experience.title}
                      </h3>

                      <h4 className="text-lg md:text-xl text-primary mb-4 font-handwriting font-bold">
                        {experience.company}
                      </h4>

                      <p className="diary-text text-sm md:text-base leading-relaxed">
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

