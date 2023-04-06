import React from 'react';
import './about.scss';
import { RandomReveal } from 'react-random-reveal'
import MyFoto from '../../assets/sem fundo.png'

const About = () => {
  return (
    <div id="app">
      <div id="wrapper">
        <h1 className="glitch" data-text="About Me">About Me</h1>
      </div>

      <div className='about'>
        <img src={MyFoto} alt='My picture' />
        <div className="react-random-reveal">
          <RandomReveal isPlaying duration={2} characters="Sou Andresa e atuo com desenvolvimento web há 1 ano. Tenho conhecimento com front-end e back-end, realizando vários projetos práticos visando aumentar minhas habilidades." />
        </div>
      </div>

    </div>
  );
};

export default About;
