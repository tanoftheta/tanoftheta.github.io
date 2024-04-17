import React, {useState, useEffect} from "react";
import styles from './about.module.css'; 
import AboutChart from "./AboutChart";

export const About = () => {
    const [isViewingResume, setIsViewingResume] = useState(false);

    const toggleResumeView = () => {
        setIsViewingResume(!isViewingResume);
    }

    return (
        <section id='about' className={styles.section}>
            <div className={`chart-container d-flex justify-content-center ${styles.chartContainer}`}>
                <AboutChart/> 
            </div>
            <div className="button-container">
                <a href="/resume.pdf" target="_blank" className={styles.resumeButton}>
                    <i className="bi bi-eye-fill"></i> resume
                </a>
            </div>
        </section>
    )
}