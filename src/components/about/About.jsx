import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import './about.scss';
import { RandomReveal } from 'react-random-reveal'
import MyPicture from '../../assets/minha-foto.png'
import CV from '../../assets/cv.pdf'

const About = () => {
  const aboutRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const scrollReveal = ScrollReveal();
    scrollReveal.reveal(aboutRef.current, {
      duration: 1000,
      delay: 500,
      easing: 'ease-in-out',
      distance: '20px',
      origin: 'bottom',
      opacity: 0,
    });
  }, []);

  useEffect(() => {
    const options = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsPlaying(true);
        } else {
          setIsPlaying(false);
        }
      });
    }, options);

    observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="app" id='about'>
      <div id="wrapper">
        <h1 className="glitch-about" data-text="Sobre Mim">Sobre Mim</h1>
      </div>

      <div className='about' ref={aboutRef}>
        <img src={MyPicture} alt='Minha foto' />
        <div className="react-random-reveal">
          <RandomReveal
            isPlaying={isPlaying}
            duration={2}
            characters="Eu sou Andresa e trabalho com desenvolvimento front-end há 2 anos. Graduanda no curso de Sistemas de Informação pela Universidade UniFavip. Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e conhecimentos, e espero poder contribuir com meu trabalho em projetos que façam a diferença na vida das pessoas." />
        </div>
      </div>
      <div className='cv'>
        <a href={CV} download>Baixe meu CV aqui</a>
      </div>
    </div>
  );
};

export default About;
