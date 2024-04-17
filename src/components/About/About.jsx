import React, {useState} from "react";
import styles from './about.module.css'; 
import AboutChart from "./AboutChart";
import { ResumeView } from "./resumeView";
export const About = () => {
    const [isViewingResume, setIsViewingResume] = useState(false);

    const toggleResumeView = () => {
        setIsViewingResume(!isViewingResume);
    }
    return (
        <section id='about' className={styles.section}>
            <div className="chart-container d-flex justify-content-center" style={{ width: '100%', height:'60%'}}>
                <AboutChart/> 
            </div>
            <div className="button-container">
                <button className={styles.resumeButton} onClick={toggleResumeView}><i className="bi bi-eye-fill"></i> resume</button>
                {isViewingResume && <ResumeView onClose={toggleResumeView} /> }
            </div>
        </section>
    )
}