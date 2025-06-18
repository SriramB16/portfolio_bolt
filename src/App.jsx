import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Get the current path
    const currentPath = location.pathname;
    
    // Check if this is a first-time visit to this page in this session
    const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
    
    if (!visitedPages.includes(currentPath)) {
      // First time visiting this page - scroll to top
      window.scrollTo(0, 0);
      // Add this page to visited pages
      visitedPages.push(currentPath);
      sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
    }
    // If revisiting, don't scroll to top (maintain scroll position)
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
            <Route path="/projects" element={
              <PageTransition>
                <Projects />
              </PageTransition>
            } />
            <Route path="/contact" element={
              <PageTransition>
                <Contact />
              </PageTransition>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;