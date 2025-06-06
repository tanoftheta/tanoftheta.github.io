import React, {useState, useEffect} from "react";
import styles from './about.module.css'; 
import AboutChart from "./AboutChart";

export const About = ({ currentSection })=> {
    const [isShowing, setIsShowing] = useState(false);
    useEffect(()=> {
        if (currentSection == 'about'){
            setIsShowing(true);
        } else {
            setIsShowing(false);
        }
    })
    return (
        <section className={styles.section}>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: '100%'}}>
            <div id='chartContainer' className={styles.gridContainer}>
            <div className={`chart-container d-flex justify-content-center ${styles.chartContainer} ${isShowing? styles.showAnimation : ''}`}>
                <AboutChart/> 
            </div>
            <div className="button-container">
                <a href="/resume.pdf" target="_blank" className={styles.resumeButton}>
                    <i className="bi bi-file-earmark-person"></i> &nbsp;resume
                </a>
            </div>
            </div>
            </div>
        </section>
    )
}