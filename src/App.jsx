import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Presentation from './components/presentation/Presentation';

const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Presentation />
              <About />
              <Skills />
              <Portfolio />
              <Contact />
            </div>
          }
          index
        />
        <Route path="/project/:title" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;
