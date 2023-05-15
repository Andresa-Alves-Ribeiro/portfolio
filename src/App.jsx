import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

const App = () => {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Skills />
              <Portfolio />
              <Contact />
            </>
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
