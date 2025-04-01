import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import './about.scss';
import { RandomReveal } from 'react-random-reveal'
import MyPicture from '../../assets/minha-foto.png'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../hooks/useTheme';

const About = () => {
  const aboutRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { isDarkMode } = useTheme();

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
    <section className={`about-section ${isDarkMode ? 'dark-mode' : ''}`} id='about'>
      <div className="tech-bg">
        <div className="tech-grid"></div>
        <div className="tech-circles"></div>
        <div className="tech-dots"></div>
        <div className="tech-particles"></div>
        <div className="tech-lines"></div>
        <div className="tech-waves"></div>
      </div>
      
      <div className="container">
        <div className="about-header">
          <div className="title-wrapper">
            <h1 className="glitch-about" data-text="Sobre Mim">Sobre Mim</h1>
            <div className="glitch-effect"></div>
          </div>
        </div>

        <div className='about-content' ref={aboutRef}>
          <div className="about-image">
            <div className="image-container">
              <img src={MyPicture} alt='Minha foto' />
              <div className="image-border"></div>
              <div className="image-glow"></div>
            </div>
          </div>
          
          <div className="about-text">
            <div className="text-container">
              <div className="react-random-reveal">
                <RandomReveal
                  isPlaying={isPlaying}
                  duration={2}
                  characters="Olá! Sou Andresa, uma desenvolvedora Full Stack apaixonada por criar experiências digitais incríveis. Com experiência em desenvolvimento web, mobile e desktop, busco sempre entregar soluções inovadoras e de alta qualidade. Minha jornada na tecnologia começou na infância com uma curiosidade por como as coisas funcionavam na internet, e hoje transformo essa paixão em código que impacta positivamente a vida das pessoas." />
              </div>
              <div className='cv-download'>
                <a href={CV} download className="cv-button">
                  <span>Baixe meu CV</span>
                  <div className="button-glow"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
