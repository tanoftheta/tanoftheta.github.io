import React from "react";
import styles from './about.module.css'; 
import AboutChart from "./AboutChart";

export const About = () => {
    return (
        <section id='about' className={styles.section}>
            <div className="chart-container d-flex justify-content-center" style={{width: '100%', height:'50%'}}>
                <AboutChart/> 
            </div>
        </section>
    )
}