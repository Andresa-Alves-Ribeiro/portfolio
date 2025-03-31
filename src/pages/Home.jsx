import React from 'react';
import Presentation from '../components/presentation/Presentation';
import About from '../components/about/About';
import Skills from '../components/skills/skills';
import Portfolio from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <div>
      <Presentation />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home; 