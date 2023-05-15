import React from 'react';
import './skills.scss';
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
        <div className="stack-list" id='skills'>
            <h1 className="glitch-skills" data-text="Minhas Skills">Minhas Skills</h1>
            <section className="wave-top"></section>
            <div className='stacks-logo'>
                <a href="https://www.reactjs.org" target="_blank" rel="noreferrer">
                    <img src={ReactLogo} alt="ReactJS Logo" className='logo' />
                    <p className='text-logo'>React</p>
                </a>
                <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">
                    <img src={Typescript} alt="Typescript Logo" className='logo' />
                    <p className='text-logo'>Typescript</p>
                </a>
                <a href="https://www.javascript.com" target="_blank" rel="noreferrer">
                    <img src={Javascript} alt="Javascript Logo" className='logo' />
                    <p className='text-logo'>Javascript</p>
                </a>
                <a href="https://www.vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={Vite} alt="Vite Logo" className='logo' />
                    <p className='text-logo'>Vite</p>
                </a>
                <a href="https://nextjs.org" target="_blank" rel="noreferrer">
                    <img src={Next} alt="Next Logo" className='logo' />
                    <p className='text-logo'>Next</p>
                </a>
                <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
                    <img src={Sass} alt="Sass Logo" className='logo' />
                    <p className='text-logo'>SASS</p>
                </a>
                <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
                    <img src={Tailwind} alt="Tailwind Logo" className='logo' />
                    <p className='text-logo'>Tailwind CSS</p>
                </a>
                <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
                    <img src={Bootstrap} alt="Bootstrap Logo" className='logo' />
                    <p className='text-logo'>Bootstrap</p>
                </a>
                <a href="https://www.figma.com" target="_blank" rel="noreferrer">
                    <img src={Figma} alt="Figma Logo" className='logo' />
                    <p className='text-logo'>Figma</p>
                </a>
                <a href="https://styled-components.com" target="_blank" rel="noreferrer">
                    <img src={StyledComponents} alt="Styled Components Logo" className='logo logo-StyledComponents' />
                    <p className='text-logo'>Styled Components</p>
                </a>
                <a href="https://www.postman.com" target="_blank" rel="noreferrer">
                    <img src={Postman} alt="Postman Logo" className='logo' />
                    <p className='text-logo'>Postman</p>
                </a>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                    <img src={Node} alt="NodeJS Logo" className='logo' />
                    <p className='text-logo'>Node</p>
                </a>
                <a href="https://www.mysql.com" target="_blank" rel="noreferrer">
                    <img src={Mysql} alt="MySQL Logo" className='logo' />
                    <p className='text-logo'>MySQL</p>
                </a>
                <a href="https://git-scm.com" target="_blank" rel="noreferrer">
                    <img src={Git} alt="Git Logo" className='logo' />
                    <p className='text-logo'>Git</p>
                </a>
                <a href="https://code.visualstudio.com" target="_blank" rel="noreferrer">
                    <img src={VSCode} alt="VSCode Logo" className='logo' />
                    <p className='text-logo'>VSCode</p>
                </a>
            </div>

            <section className="wave-bottom"></section>
        </div>
    );
};

export default Skills;
