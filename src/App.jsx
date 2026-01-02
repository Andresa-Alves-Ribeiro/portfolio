import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import ErrorBoundary from './components/errorBoundary';
import Loading from './components/loading';

const Home = lazy(() => import('./pages/Home'));
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <Suspense fallback={<Loading fullScreen text="Carregando página..." />}>
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/project/:title" element={<ProjectDetailsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
