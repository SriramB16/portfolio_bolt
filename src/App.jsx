import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Component to handle navigation tracking
const NavigationTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Mark that we're doing internal navigation when changing routes
    // This helps distinguish between page loads and internal navigation
    const handleRouteChange = () => {
      if (location.pathname !== '/') {
        sessionStorage.setItem('internalNavigation', 'true');
      }
    };

    handleRouteChange();
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <NavigationTracker />
        <div className="min-h-screen bg-[#f7f8fa] dark:bg-black transition-colors duration-300">
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
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;