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
            <div>
                <img src={ReactLogo} alt="ReactJS Logo" />
                <img src={Typescript} alt="Typescript Logo" />
                <img src={Javascript} alt="Javascript Logo" />
                <img src={Vite} alt="Vite Logo" />
                <img src={Next} alt="Next Logo" />
                <img src={Sass} alt="Sass Logo" />
                <img src={Tailwind} alt="Tailwind Logo" />
                <img src={Bootstrap} alt="Bootstrap Logo" />
                <img src={Figma} alt="Figma Logo" />
                <img src={StyledComponents} alt="Styled Components Logo" />
                <img src={Postman} alt="Postman Logo" />
                <img src={Node} alt="NodeJS Logo" />
                <img src={Mysql} alt="MySQL Logo" />
                <img src={Git} alt="Git Logo" />
                <img src={VSCode} alt="VSCode Logo" />
            </div>
        </div>
    );
};

export default Skills;
