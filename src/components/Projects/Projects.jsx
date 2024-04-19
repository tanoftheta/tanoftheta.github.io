import React , {useState, useEffect} from "react";
import styles from './projects.module.css'; 
import {AudioCard} from './AudioCard.jsx'; 

export const Projects = ({currentSection}) => {
    const [currentProject, setCurrentProject] = useState('AudioCardNot');
    return (
        <section className={styles.section}>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: '100%'}}>
                    <AudioCard currentProject={currentProject} currentSection={currentSection}/> 
            </div>
        </section>
    )
}