import React, { useState, useEffect } from 'react';
import styles from './App.module.css'; // Import the CSS module

import { Navbar } from "./components/NavBar/NavBar"; 
import { Home } from "./components/Home/Home";
import { About } from './components/About/About'; 
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  const [translateValue, setTranslateValue] = useState(0);
  const [timeSpent, setTimeSpent] = useState(
    {
        home: 0,
        about: 0, 
        projects: 0,
        contact: 0
    }
)
  const [currentSection, setCurrentSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth'});
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY <= 5) {
          setTranslateValue(0);
      } else if (scrollY <= 1000) {
          setTranslateValue(scrollY);
      }
      const sections = ['home', 'about', 'projects', 'contact'];

      for (const section of sections) {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();

          if (rect.top <= window.innerHeight * 0.49 && rect.bottom >= window.innerHeight * 0.51) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    const interval = setInterval(() => {
      setTimeSpent(prevTimeSpent => ({
        ...prevTimeSpent,
        [currentSection]: prevTimeSpent[currentSection] + 1
      }));
    }, 1000); 

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  return (
    <div className={styles.body}>
      <Navbar scrollToSection={scrollToSection} currentSection={currentSection} /> 
      <div className={styles.sectionContainer}>
      <Home scrollToSection={scrollToSection} timeSpent={timeSpent} translateValue={translateValue}/>
        <About  currentSection={currentSection}/>
        <Projects /> 
        <Contact/> 
      </div>
    </div>
  );
}

export default App;
