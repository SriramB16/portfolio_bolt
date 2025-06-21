import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import LoadingProgressBar from './components/LoadingProgressBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

// Component to handle instant positioning at top on route change
const InstantTopPosition = () => {
  const location = useLocation();

  useEffect(() => {
    // Set scroll position to top instantly without animation
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="page-container min-h-screen bg-[#f7f8fa] dark:bg-black transition-colors duration-300">
          <InstantTopPosition />
          <LoadingProgressBar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;