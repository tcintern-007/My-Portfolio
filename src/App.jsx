import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import {
  navLinks,
  heroData,
  aboutData,
  skillsData,
  projectsData,
  educationData,
  contactData,
  footerData,
} from './data/portfolioData';

import AdeelImage from './assets/Adeel.jpeg';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-theme-primary text-theme-primary">
      <Navbar theme={theme} setTheme={setTheme} navLinks={navLinks} />
      <Hero
        name={heroData.name}
        title={heroData.title}
        description={heroData.description}
        image={AdeelImage}
      />
      <About
        descriptionParagraphs={aboutData.descriptionParagraphs}
        stats={aboutData.stats}
      />
      <Skills skillCategories={skillsData} />
      <Projects projects={projectsData} />
      <Education
        university={educationData.university}
        certificates={educationData.certificates}
      />
      <Contact contactInfo={contactData} />
      <Footer socials={footerData.socials} copyright={footerData.copyright} />
    </div>
  );
}

export default App;