import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Timeline = () => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState([]);

  const experiences = [
    {
      year: '2022',
      period: t('timeline.experiences.2022.period'),
      title: t('timeline.experiences.2022.title'),
      company: t('timeline.experiences.2022.company'),
      description: t('timeline.experiences.2022.description'),
      isCurrent: false,
      icon: '💻',
    },
    {
      year: '2023',
      period: t('timeline.experiences.2023.period'),
      title: t('timeline.experiences.2023.title'),
      company: t('timeline.experiences.2023.company'),
      description: t('timeline.experiences.2023.description'),
      isCurrent: false,
      icon: '⚛️',
    },
    {
      year: '2024',
      period: t('timeline.experiences.2024.period'),
      title: t('timeline.experiences.2024.title'),
      company: t('timeline.experiences.2024.company'),
      description: t('timeline.experiences.2024.description'),
      isCurrent: false,
      icon: '🎨',
    },
    {
      year: '2025',
      period: t('timeline.experiences.2025-1.period'),
      title: t('timeline.experiences.2025-1.title'),
      company: t('timeline.experiences.2025-1.company'),
      description: t('timeline.experiences.2025-1.description'),
      isCurrent: false,
      icon: '🚀',
    },
    {
      year: '2025',
      period: t('timeline.experiences.2025-2.period'),
      title: t('timeline.experiences.2025-2.title'),
      company: t('timeline.experiences.2025-2.company'),
      description: t('timeline.experiences.2025-2.description'),
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
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#1a0a1a] to-[#0a0a0f]"
      id="timeline"
    >
      
      <div className="absolute inset-0 tech-grid opacity-10"></div>

      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            >
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                {t('timeline.title')}
              </span>
            </h1>
            
            
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-500 to-pink-500"></div>
              <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-pink-500 to-pink-500"></div>
            </div>
          </div>
        </div>

        <div className="relative">
          
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 z-0 pointer-events-none">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-rose-500 to-pink-500 transform -translate-x-1/2"></div>
          </div>

          
          <div className="space-y-12 md:space-y-16">
            {experiences.map((experience, index) => {
              const isVisible = visibleItems.includes(index);
              const isEven = index % 2 === 0;
              const itemKey = `timeline-item-${experience.year}-${experience.company}`;
              
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
                  
                  <div 
                    className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10 transition-all duration-500 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    <div className="relative">
                      
                      <div 
                        className="absolute inset-0 rounded-full bg-pink-500 animate-ping"
                        style={{
                          width: '40px',
                          height: '40px',
                          margin: '-10px',
                          opacity: 0.3,
                        }}
                      />
                      
                      <div 
                        className="relative w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 border-2 border-[#0a0a0f] shadow-lg flex items-center justify-center text-lg md:text-xl transition-all duration-300 hover:scale-125"
                        style={{
                          boxShadow: '0 0 20px rgba(255, 20, 147, 0.6), 0 0 40px rgba(236, 72, 153, 0.4)',
                        }}
                      >
                        <span>{experience.icon}</span>
                      </div>
                    </div>
                  </div>

                  
                  <div
                    className={`ml-16 md:ml-0 md:w-[45%] transition-all duration-500 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                    style={{
                      transitionDelay: `${index * 150 + 400}ms`,
                    }}
                  >
                    <div className="group relative glass-effect rounded-2xl p-6 md:p-8 border border-pink-500/20 transition-all duration-500 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(255,20,147,0.3)] hover:scale-[1.02]">
                      
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-rose-500/0 rounded-2xl transition-all duration-500 group-hover:from-pink-500/10 group-hover:to-rose-500/10"></div>
                      
                      
                      <div className="relative z-10">
                        
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-xl md:text-2xl shadow-lg">
                              {experience.icon}
                            </div>
                            <div className="flex flex-col gap-2">
                              <span className="text-xs font-semibold text-pink-400 glass-effect px-3 py-1 rounded-lg border border-pink-500/30">
                                {experience.period}
                              </span>
                              {experience.isCurrent && (
                                <span className="text-xs font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-lg shadow-md animate-pulse flex items-center gap-1.5 w-fit">
                                  <span>💖</span>
                                  <span>{t('common.current')}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                          {experience.title}
                        </h3>

                        
                        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-pink-500/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                          <h4 className="text-base md:text-lg font-semibold text-pink-400">
                            {experience.company}
                          </h4>
                        </div>

                        
                        <p className="text-sm md:text-base text-white/70 leading-relaxed">
                          {experience.description}
                        </p>

                        
                        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
