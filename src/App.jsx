import { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";

// Component to handle navigation tracking and scroll restoration
const NavigationTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Mark that we're doing internal navigation when changing routes
    sessionStorage.setItem("internalNavigation", "true");
    
    // Scroll to top immediately on route change
    window.scrollTo(0, 0);
    
    // Add a small delay to ensure scroll position is set before components mount
    const timer = setTimeout(() => {
      // Clear the navigation flag after a delay to allow components to detect it
      sessionStorage.removeItem("internalNavigation");
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavigationTracker />
        <div className="min-h-screen bg-[#f7f8fa] dark:bg-black transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/projects/:id"
              element={
                <PageTransition>
                  <ProjectDetail />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;