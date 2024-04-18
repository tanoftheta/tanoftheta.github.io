import React, { useState, useEffect, useRef } from "react";
import styles from './home.module.css';
import Viz from '../Viz';

export const Home = ({ scrollToSection, timeSpent, translateValue }) => {
    const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsAnimationEnabled(false);
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <section id='home' className={styles.section}>
            <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className={styles.gridContainer}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                        <h1 id={styles.intro} className={`${isAnimationEnabled ? styles.moveInFromLeft : null}`} style={{ transform: `translateX(${translateValue}px)` }}>Hi, I'm Tan Mahmud, a programmer.</h1>
                        </div>
                        <div className="col-md-6">
                            <Viz scrollToSection={scrollToSection} timeSpent={timeSpent} translateValue={translateValue}/>
                        </div>
                    </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}
