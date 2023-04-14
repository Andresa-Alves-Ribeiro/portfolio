import React, { useEffect, useRef, useState } from 'react';
import './about.scss';
import { RandomReveal } from 'react-random-reveal'
import MyPicture from '../../assets/sem fundo.png'
import CV from '../../assets/cv.pdf'

const About = () => {
  const aboutRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
      observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div id="app">
      <div id="wrapper">
        <h1 className="glitch-about" data-text="About Me">About Me</h1>
      </div>

      <div className='about' ref={aboutRef}>
        <img src={MyPicture} alt='My picture' />
        <div className="react-random-reveal">
          <RandomReveal isPlaying={isPlaying} duration={2} characters="I'm Andresa and I've been working with web development for 2 years. I have knowledge of front-end and back-end development web, carrying out several practical projects aiming to increase my skills." />
        </div>
      </div>
      <div className='cv'>
        <a href={CV} download>Download my CV here</a>
      </div>
    </div>
  );
};

export default About;
