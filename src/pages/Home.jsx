import React, { memo } from 'react';
import Presentation from '../components/presentation';
import About from '../components/about';
import Timeline from '../components/timeline';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Presentation />
      <About />
      <Timeline />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default memo(Home); 