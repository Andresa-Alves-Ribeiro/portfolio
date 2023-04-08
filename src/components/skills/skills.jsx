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
        <div className="stack-list">
            <h1 className="glitch2" data-text="My Skills">My Skills</h1>
            <div className='stacks-logo'>
                <img src={ReactLogo} alt="ReactJS Logo" className='logo' />
                <img src={Typescript} alt="Typescript Logo" className='logo'/>
                <img src={Javascript} alt="Javascript Logo" className='logo'/>
                <img src={Vite} alt="Vite Logo" className='logo'/>
                <img src={Next} alt="Next Logo" className='logo'/>
                <img src={Sass} alt="Sass Logo" className='logo'/>
                <img src={Tailwind} alt="Tailwind Logo" className='logo'/>
                <img src={Bootstrap} alt="Bootstrap Logo" className='logo'/>
                <img src={Figma} alt="Figma Logo" className='logo'/>
                <img src={StyledComponents} alt="Styled Components Logo" className='logo'/>
                <img src={Postman} alt="Postman Logo" className='logo'/>
                <img src={Node} alt="NodeJS Logo" className='logo'/>
                <img src={Mysql} alt="MySQL Logo" className='logo'/>
                <img src={Git} alt="Git Logo" className='logo'/>
                <img src={VSCode} alt="VSCode Logo" className='logo'/>
            </div>
        </div>
    );
};

export default Skills;
