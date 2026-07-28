import { useState, useEffect } from 'react';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-theme-primary text-theme-primary">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;