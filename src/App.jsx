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
      const scrollX = window.scrollX;
      if (scrollX <= 5) {
        setTranslateValue(0);
      } else if (scrollX <= 800) {
        setTranslateValue(scrollX);
      }
    
      const sections = ['home', 'about', 'projects', 'contact'];
      const viewportWidth = window.innerWidth;
      for (const section of sections) {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          // Check if the center of the section is within the viewport
          const sectionCenter = rect.left + rect.width / 2;
          if (sectionCenter >= 0 && sectionCenter <= viewportWidth) {
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
    <div>
      <Navbar scrollToSection={scrollToSection} currentSection={currentSection} /> 
      <div className={styles.sectionContainer}>
        <div id='home' className={styles.section}>
          <Home scrollToSection={scrollToSection} timeSpent={timeSpent} translateValue={translateValue}/>
        </div>
        <div id= 'about' className={styles.section}>
          <About currentSection={currentSection}/>
        </div>
        <div id = 'projects' className={styles.section}>
          <Projects/> 
        </div>
        <div id = 'contact' className={styles.section}>
          <Contact/> 
        </div>
      </div>
    </div>
  );
}

export default App;
