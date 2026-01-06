import React, { useState, useEffect } from 'react';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const experiences = [
    {
      year: '2022',
      period: '2022',
      title: 'IT Intern',
      company: 'Integrance Finance and Consulting Services',
      description: 'Início da carreira em tecnologia, atuando no apoio a processos internos de TI, participação em reuniões técnicas e melhoria de fluxos operacionais.',
      isCurrent: false,
      icon: '💻',
    },
    {
      year: '2023',
      period: '2023-2024',
      title: 'Front-End Developer',
      company: 'Inova e-Business',
      description: 'Atuação focada em React.js e Next.js 13, com destaque para projetos de e-commerce e marketplace. Trabalhei com formulários avançados, integração com APIs REST, otimização de performance e SEO, além de colaboração direta com times de design e back-end.',
      isCurrent: false,
      icon: '⚛️',
    },
    {
      year: '2024',
      period: '2024-2025',
      title: 'Front-End Developer',
      company: 'Wareline',
      description: 'Desenvolvimento e manutenção de sistemas corporativos utilizando JSF, SASS e Bootstrap. Responsável por evoluir funcionalidades, melhorar a interface do usuário e traduzir layouts do Figma para interfaces funcionais, atuando em ambiente ágil (Scrum e Kanban).',
      isCurrent: false,
      icon: '🎨',
    },
    {
      year: '2025',
      period: '2025',
      title: 'Full-stack Developer',
      company: 'Logithink',
      description: 'Atuação em projetos end-to-end, desenvolvendo aplicações web com React.js e Node.js. Trabalhei com APIs REST, componentes reutilizáveis, otimização de aplicações React e padronização de ambientes com Docker.',
      isCurrent: false,
      icon: '🚀',
    },
    {
      year: '2025',
      period: '2025 - Atual',
      title: 'Front-end Developer',
      company: 'Mais Mottoristas',
      description: 'Responsável pela construção, manutenção e otimização de interfaces front-end utilizando React.js. Atuo na criação de componentes escaláveis, implementação de layouts responsivos e acessíveis a partir do Figma, correção de bugs, melhoria de performance e colaboração contínua com designers e back-end.',
      isCurrent: true,
      icon: '💖',
    },
  ];

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number.parseInt(entry.target.dataset.index, 10);
          setVisibleItems((prev) => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    });

    const items = document.querySelectorAll('[data-timeline-item]');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section
      className="relative py-24 overflow-hidden"
      id="timeline"
    >

      {/* Partículas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {Array.from({ length: 15 }).map((_, i) => {
              const particleId = `particle-${i}-${Math.random().toString(36).slice(2, 11)}`;
              return (
                <div
                  key={particleId}
                  className="absolute rounded-full bg-primary-light opacity-10 animate-float"
                  style={{
                    width: `${Math.random() * 8 + 4}px`,
                    height: `${Math.random() * 8 + 4}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${Math.random() * 4 + 3}s`,
                  }}
                />
              );
            })}
      </div>

      <div className="relative z-[1] max-w-[1200px] mx-auto px-8">
        {/* Título com animação */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Container principal do título sem bordas e background */}
            <div className="relative px-10 py-8">
              
              {/* Título principal */}
              <div className="relative z-10 flex items-center justify-center">
                <h1 
                  className="diary-title text-4xl md:text-6xl lg:text-7xl font-handwriting relative z-10"
                  data-text="Experiências"
                >
                  Experiências
                </h1>
              </div>
              
              {/* Linha decorativa moderna melhorada */}
              <div className="relative z-10 flex items-center justify-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent via-pink-300/80 to-pink-400/80 rounded-full decorative-line"></div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 decorative-dot"></div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-rose-300 to-pink-300 decorative-dot"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 decorative-dot"></div>
                </div>
                <div className="h-1 w-16 bg-gradient-to-l from-transparent via-rose-300/80 to-rose-400/80 rounded-full decorative-line" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Linha central animada com brilho */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 z-0 pointer-events-none">
            {/* Linha vertical com gradiente animado */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 timeline-glow-line" />
          </div>

          {/* Itens da timeline */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((experience, index) => {
              const isVisible = visibleItems.includes(index);
              const isEven = index % 2 === 0;
              const itemKey = `timeline-item-${experience.year}-${experience.company}`;
              
              // Determina a classe de transição baseada na visibilidade
              let translateClass = '';
              if (!isVisible) {
                translateClass = isEven ? 'md:translate-x-20' : 'md:-translate-x-20';
              }
              
              return (
                <div
                  key={itemKey}
                  data-timeline-item
                  data-index={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Marcador central animado */}
                  <div 
                    className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10 transition-all duration-500 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    <div className="relative">
                      {/* Círculo externo pulsante */}
                      <div 
                        className="absolute inset-0 rounded-full bg-primary animate-ping"
                        style={{
                          width: '40px',
                          height: '40px',
                          margin: '-10px',
                          opacity: 0.3,
                        }}
                      />
                      {/* Círculo principal */}
                      <div 
                        className="relative w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark border-4 border-white shadow-lg flex items-center justify-center text-lg md:text-xl transition-all duration-300 hover:scale-125 hover:rotate-12 group-hover:shadow-2xl"
                        style={{
                          boxShadow: '0 0 20px rgba(255, 105, 180, 0.6), 0 0 40px rgba(255, 182, 217, 0.4)',
                        }}
                      >
                        <span className="animate-bounce-cute">{experience.icon}</span>
                      </div>
                      {/* Brilho ao redor */}
                      <div 
                        className="absolute inset-0 rounded-full bg-primary-light opacity-50 blur-md animate-pulse"
                        style={{
                          width: '50px',
                          height: '50px',
                          margin: '-15px',
                        }}
                      />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[45%] transition-all duration-500 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    } ${translateClass}`}
                    style={{
                      transitionDelay: `${index * 150 + 400}ms`,
                    }}
                  >
                    <div className="timeline-card-modern relative group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                      {/* Background principal */}
                      <div className="absolute inset-0 bg-white rounded-2xl border border-pink-100"></div>
                      
                      {/* Background com gradiente sutil no hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50/30 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Borda superior decorativa */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Sombra profissional com borda sutil */}
                      <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:shadow-xl" style={{
                        boxShadow: '0 4px 20px rgba(255, 105, 180, 0.08), 0 0 0 1px rgba(255, 182, 217, 0.15)',
                      }}></div>
                      
                      {/* Conteúdo do card */}
                      <div className="relative z-[1] p-6 md:p-8">
                        {/* Header do card */}
                        <div className="flex items-start justify-between mb-5">
                          <div className="flex items-start gap-4">
                            {/* Ícone do cargo com fundo gradiente */}
                            <div className="relative">
                              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary via-primary-dark to-primary-dark flex items-center justify-center text-2xl md:text-3xl shadow-md group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                {experience.icon}
                              </div>
                              {/* Brilho sutil no ícone */}
                              <div className="absolute inset-0 rounded-xl bg-white opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                            </div>
                            
                            {/* Badges de período */}
                            <div className="flex flex-col gap-2 pt-1">
                              <span className="text-xs font-semibold text-primary-dark bg-gradient-to-r from-pink-50 to-white px-3 py-1.5 rounded-lg shadow-sm border border-primary-light/30 backdrop-blur-sm">
                                {experience.period}
                              </span>
                              {experience.isCurrent && (
                                <span className="text-xs font-semibold bg-gradient-to-r from-primary via-primary-dark to-primary text-white px-3 py-1.5 rounded-lg shadow-md animate-heart-beat flex items-center gap-1.5 w-fit">
                                  <span className="text-xs">💖</span>
                                  <span>Atual</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Título do cargo */}
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-primary-dark">
                          {experience.title}
                        </h3>

                        {/* Nome da empresa com linha decorativa */}
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-pink-100 group-hover:border-primary-light transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-sm"></div>
                          <h4 className="text-base md:text-lg font-semibold text-primary transition-colors duration-300 group-hover:text-primary-dark">
                            {experience.company}
                          </h4>
                        </div>

                        {/* Descrição */}
                        <div className="relative">
                          <p className="text-sm md:text-base text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                            {experience.description}
                          </p>
                          
                          {/* Linha decorativa inferior animada */}
                          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-primary-light to-transparent group-hover:w-full transition-all duration-700 rounded-full"></div>
                        </div>

                        {/* Efeito de brilho sutil no hover */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Timeline;

