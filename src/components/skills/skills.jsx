import React from 'react';
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

    return (
        <div className="py-20 md:py-28 relative overflow-hidden" id='skills'>
            {/* Background decorativo sutil */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-300/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/10 rounded-full blur-3xl"></div>
            </div>

            <div className="text-center mb-16 relative z-10">
                <div className="relative inline-block">
                    <div className="relative px-10 py-8">
                        {/* Título principal */}
                        <div className="relative z-10 flex items-center justify-center">
                            <h1
                                className="diary-title text-4xl md:text-6xl lg:text-7xl font-handwriting relative z-10"
                                data-text="Habilidades"
                            >
                                Habilidades
                            </h1>
                        </div>

                        {/* Linha decorativa moderna melhorada */}
                        <div className="relative z-10 flex items-center justify-center gap-3 mt-4">
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

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-6 max-w-[1400px] mx-auto px-4 md:px-8 relative z-10'>
                {skills.map((skill, index) => (
                    <a
                        key={skill.name}
                        href={skill.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group glass-card relative flex flex-col items-center justify-center p-8 md:p-10 rounded-3xl no-underline transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                        style={{
                            animationDelay: `${index * 0.05}s`,
                            animation: 'fadeInUp 0.6s ease-out forwards',
                            opacity: 0
                        }}
                    >
                        {/* Efeito de brilho no topo (glassmorphism) */}
                        <div 
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 182, 193, 0.1) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.5)',
                                boxShadow: '0 12px 40px 0 rgba(255, 182, 193, 0.25), inset 0 2px 0 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 0 rgba(255, 182, 193, 0.2)'
                            }}
                        ></div>
                        
                        {/* Reflexo de vidro no topo */}
                        <div 
                            className="absolute top-0 left-0 right-0 h-1/2 rounded-t-3xl opacity-30"
                            style={{
                                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%)'
                            }}
                        ></div>
                        
                        {/* Ícone com efeito de rotação suave */}
                        <div className="relative z-10 transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                            <img 
                                src={skill.logo} 
                                alt={`${skill.name} Logo`} 
                                className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-all duration-500 filter drop-shadow-lg group-hover:drop-shadow-xl' 
                            />
                        </div>

                        {/* Decoração de canto com brilho */}
                        <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-br from-pink-300/60 to-rose-300/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/30"></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-gradient-to-br from-rose-300/60 to-pink-300/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/30"></div>
                    </a>
                ))}
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .glass-card {
                    background: rgba(255, 255, 255, 0.25);
                    backdrop-filter: blur(20px) saturate(180%);
                    -webkit-backdrop-filter: blur(20px) saturate(180%);
                    border: 1px solid rgba(255, 182, 193, 0.3);
                    box-shadow: 0 8px 32px 0 rgba(255, 182, 193, 0.15), 
                                inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
                }
                
                .glass-card:hover {
                    background: rgba(255, 255, 255, 0.35);
                    backdrop-filter: blur(25px) saturate(200%);
                    -webkit-backdrop-filter: blur(25px) saturate(200%);
                    border: 1px solid rgba(255, 182, 193, 0.5);
                    box-shadow: 0 12px 40px 0 rgba(255, 182, 193, 0.3), 
                                inset 0 2px 0 0 rgba(255, 255, 255, 0.5),
                                inset 0 -1px 0 0 rgba(255, 182, 193, 0.2);
                }
            `}</style>
        </div>
    );
};

export default Skills;

