import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';

export const Navbar = ({ scrollToSection, currentSection }) => {

    return (
        <div className={styles.navbar}>
            <h1 id={styles.Title} onClick={() => scrollToSection('home')}>TAN'S WEBSITE</h1>
            <div className={styles.colorScale}>
                <div className={styles.colorBar} onClick={() => scrollToSection('home')} style={{ backgroundColor: currentSection == 'home' ? 'white' :'var(--blue-hover)' }}>
                    <span>home</span>
                </div>
                <div className={styles.colorBar} onClick={() => scrollToSection('about')} style={{ backgroundColor: currentSection == 'about' ? 'var(--blue)':'var(--mintgreen-hover)' }}>
                    <span>about</span>
                </div>
                <div className={styles.colorBar} onClick={() => scrollToSection('projects')} style={{ backgroundColor: currentSection == 'projects' ? ' white' : 'var(--green-hover)' }}>
                    <span>projects</span>
                </div>
                <div className={styles.colorBar} onClick={() => scrollToSection('contact')} style={{ backgroundColor: currentSection == 'contact' ? 'var(--mintgreen)' : '#b35500' }}>
                    <span>contact</span>
                </div>
            </div>

        </div>
    );
};
