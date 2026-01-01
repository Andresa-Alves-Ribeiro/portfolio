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
import { useTheme } from '../../hooks/useTheme';

const Skills = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`py-16 bg-[rgba(10,10,26,0.8)] transition-colors duration-300 relative overflow-hidden ${isDarkMode ? 'dark-mode' : ''}`} id='skills'>
            <h1 className="glitch-skills text-center text-4xl md:text-5xl font-bold uppercase relative text-white mb-16 drop-shadow-[0.05em_0_0_#ff00c1,-0.025em_-0.05em_0_#ff88e4,0.025em_0.05em_0_white]" data-text="Habilidades">Habilidades</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-8 max-w-[1200px] mx-auto px-4'>
                <a href="https://www.reactjs.org" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={ReactLogo} alt="ReactJS Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>React</p>
                </a>
                <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={Typescript} alt="Typescript Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>Typescript</p>
                </a>
                <a href="https://www.javascript.com" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={Javascript} alt="Javascript Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>Javascript</p>
                </a>
                <a href="https://www.vitejs.dev" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={Vite} alt="Vite Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>Vite</p>
                </a>
                <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={Next} alt="Next Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>Next</p>
                </a>
                <a href="https://sass-lang.com" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={Sass} alt="Sass Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>SASS</p>
                </a>
                <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={Tailwind} alt="Tailwind Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>Tailwind</p>
                </a>
                <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={Bootstrap} alt="Bootstrap Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>Bootstrap</p>
                </a>
                <a href="https://www.figma.com" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={Figma} alt="Figma Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>Figma</p>
                </a>
                <a href="https://styled-components.com" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={StyledComponents} alt="Styled Components Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale-[100%] brightness-[0.8] hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>Styled Comp.</p>
                </a>
                <a href="https://www.postman.com" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={Postman} alt="Postman Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>Postman</p>
                </a>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={Node} alt="NodeJS Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>Node</p>
                </a>
                <a href="https://www.mysql.com" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={Mysql} alt="MySQL Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>MySQL</p>
                </a>
                <a href="https://git-scm.com" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={Git} alt="Git Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>Git</p>
                </a>
                <a href="https://code.visualstudio.com" target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline text-white transition-all duration-300 hover:-translate-y-1 hover:text-primary">
                    <img src={VSCode} alt="VSCode Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 grayscale hover:scale-110 hover:grayscale-0' />
                    <p className='text-sm md:text-base font-medium text-center m-0'>VSCode</p>
                </a>
            </div>
        </div>
    );
};

export default Skills;
