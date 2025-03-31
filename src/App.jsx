import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import AnimatedBackground from './components/AnimatedBackground';

const App = () => {
  return (
    <Router>
      <AnimatedBackground />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/project/:title" element={<ProjectDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
