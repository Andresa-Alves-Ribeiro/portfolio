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
    return (
        <div className="py-16 relative overflow-hidden" id='skills'>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl animate-wiggle">🐱</span>
                <h1 className="diary-title text-4xl md:text-6xl font-handwriting">
                  Habilidades
                </h1>
                <span className="text-4xl animate-wiggle">🐱</span>
              </div>
              <p className="diary-text text-lg md:text-xl">Minhas ferramentas favoritas 💕</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-8 max-w-[1200px] mx-auto px-4'>
                <a href="https://www.reactjs.org" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={ReactLogo} alt="ReactJS Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>React</p>
                </a>
                <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={Typescript} alt="Typescript Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>Typescript</p>
                </a>
                <a href="https://www.javascript.com" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={Javascript} alt="Javascript Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>Javascript</p>
                </a>
                <a href="https://www.vitejs.dev" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={Vite} alt="Vite Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>Vite</p>
                </a>
                <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={Next} alt="Next Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>Next</p>
                </a>
                <a href="https://sass-lang.com" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={Sass} alt="Sass Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>SASS</p>
                </a>
                <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={Tailwind} alt="Tailwind Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>Tailwind</p>
                </a>
                <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={Bootstrap} alt="Bootstrap Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>Bootstrap</p>
                </a>
                <a href="https://www.figma.com" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={Figma} alt="Figma Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>Figma</p>
                </a>
                <a href="https://styled-components.com" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={StyledComponents} alt="Styled Components Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>Styled Comp.</p>
                </a>
                <a href="https://www.postman.com" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={Postman} alt="Postman Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>Postman</p>
                </a>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={Node} alt="NodeJS Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>Node</p>
                </a>
                <a href="https://www.mysql.com" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={Mysql} alt="MySQL Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>MySQL</p>
                </a>
                <a href="https://git-scm.com" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={Git} alt="Git Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>Git</p>
                </a>
                <a href="https://code.visualstudio.com" target="_blank" rel="noreferrer" className="diary-section flex flex-col items-center no-underline transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <img src={VSCode} alt="VSCode Logo" className='w-16 h-16 md:w-20 md:h-20 mb-2 transition-all duration-300 hover:scale-110' />
                    <p className='text-sm md:text-base font-handwriting font-bold text-center m-0 text-primary-dark'>VSCode</p>
                </a>
            </div>
        </div>
    );
};

export default Skills;

