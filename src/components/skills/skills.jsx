import React, { useState, useEffect } from 'react';
import ReactLogo from '../../assets/react.svg'
import Typescript from '../../assets/typescript.svg'
import Javascript from '../../assets/javascript.svg'
import Vite from '../../assets/vite.svg'
import Next from '../../assets/next.svg'
import Sass from '../../assets/sass.svg'
import Tailwind from '../../assets/tailwind.svg'
import Bootstrap from '../../assets/bootstrap.svg'
import Figma from '../../assets/figma.svg'
import StyledComponents from '../../assets/styled-components.svg'
import Postman from '../../assets/postman.svg'
import Node from '../../assets/nodejs.svg'
import Mysql from '../../assets/mysql.svg'
import Git from '../../assets/git.svg'
import VSCode from '../../assets/visual-studio-code.svg'

const Skills = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const skills = [
        { name: 'React', logo: ReactLogo, url: 'https://www.reactjs.org' },
        { name: 'Typescript', logo: Typescript, url: 'https://www.typescriptlang.org' },
        { name: 'Javascript', logo: Javascript, url: 'https://www.javascript.com' },
        { name: 'Vite', logo: Vite, url: 'https://www.vitejs.dev' },
        { name: 'Next', logo: Next, url: 'https://nextjs.org' },
        { name: 'SASS', logo: Sass, url: 'https://sass-lang.com' },
        { name: 'Tailwind', logo: Tailwind, url: 'https://tailwindcss.com' },
        { name: 'Bootstrap', logo: Bootstrap, url: 'https://getbootstrap.com' },
        { name: 'Figma', logo: Figma, url: 'https://www.figma.com' },
        { name: 'Styled Comp.', logo: StyledComponents, url: 'https://styled-components.com' },
        { name: 'Postman', logo: Postman, url: 'https://www.postman.com' },
        { name: 'Node', logo: Node, url: 'https://nodejs.org' },
        { name: 'MySQL', logo: Mysql, url: 'https://www.mysql.com' },
        { name: 'Git', logo: Git, url: 'https://git-scm.com' },
        { name: 'VSCode', logo: VSCode, url: 'https://code.visualstudio.com' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('skills');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div 
            className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#1a0a1a] to-[#0a0a0f]" 
            id='skills'
        >
            {/* Grid de fundo */}
            <div className="absolute inset-0 tech-grid opacity-10"></div>

            {/* Efeitos de luz */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
                {/* Título da seção */}
                <div className="text-center mb-16">
                    <div className="relative inline-block">
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                        >
                            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                                Skills
                            </span>
                        </h1>

                        {/* Linha decorativa */}
                        <div className="flex items-center justify-center gap-3 mt-6">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-500 to-pink-500"></div>
                            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent via-pink-500 to-pink-500"></div>
                        </div>
                    </div>
                </div>

                {/* Grid de skills */}
                <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    {skills.map((skill, index) => (
                        <a
                            key={skill.name}
                            href={skill.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative glass-effect rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(255,20,147,0.3)] border border-pink-500/20"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                animationDelay: `${index * 0.05}s`,
                            }}
                        >
                            {/* Efeito de brilho no hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-pink-500/0 to-rose-500/0 rounded-xl transition-all duration-500 ${
                                hoveredIndex === index ? 'from-pink-500/20 to-rose-500/20' : ''
                            }`}></div>

                            {/* Ícone */}
                            <div className="relative z-10 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                <img 
                                    src={skill.logo} 
                                    alt={`${skill.name} Logo`} 
                                    className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-all duration-500 filter drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(255,20,147,0.5)]' 
                                />
                            </div>

                            {/* Nome da skill */}
                            <div className="mt-4 text-center">
                                <span className="text-xs md:text-sm font-medium text-white/80 group-hover:text-pink-400 transition-colors duration-300">
                                    {skill.name}
                                </span>
                            </div>

                            {/* Decorações nos cantos */}
                            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </div>
    );
};

export default Skills;
