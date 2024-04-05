import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';

export const Navbar = ({ scrollToSection, currentSection }) => {
    const [sliderValue, setSliderValue] = useState(0);

    const sections = ['home', 'about', 'projects', 'contact'];

    useEffect(() => {
        const currentIndex = sections.indexOf(currentSection);
        if (currentIndex !== -1) {
            setSliderValue(currentIndex);
        }
    }, [currentSection, sections]);

    const handleSliderChange = (event) => {
        const sectionIndex = parseInt(event.target.value);
        const targetSection = sections[sectionIndex];

        scrollToSection(targetSection);
    };

    return (
        <div className={styles.navbar}>
            <h1 id={styles.Title}>TAN'S WEBSITE</h1>
            <div className={styles.colorScale}>
                <div className={styles.colorBar} onClick={() => scrollToSection('home')} style={{ backgroundColor: '#18d1e2' }}>
                    <span>home</span>
                </div>
                <div className={styles.colorBar} onClick={() => scrollToSection('about')} style={{ backgroundColor: '#62d09d' }}>
                    <span>about</span>
                </div>
                <div className={styles.colorBar} onClick={() => scrollToSection('projects')} style={{ backgroundColor: '#8bc34a' }}>
                    <span>projects</span>
                </div>
                <div className={styles.colorBar} onClick={() => scrollToSection('contact')} style={{ backgroundColor: '#ffa15d' }}>
                    <span>contact</span>
                </div>
            </div>
            <div className={styles.slider}>
                <input type="range" min="0" max="3" value={sliderValue} className={styles.slider} onChange={handleSliderChange} />
            </div>
        </div>
    );
};
