import React , {useState, useEffect} from "react";
import styles from './projects.module.css'; 
import {AudioCard} from './AudioCard.jsx'; 
import { TreesAndRent } from "./TreesAndRent.jsx";

export const Projects = ({currentSection}) => {
    const [currentProject, setCurrentProject] = useState('AudioCard');
    
    const handleProjectClick = (projectName, event) => {
        event.stopPropagation();
        setCurrentProject(prevProject => {
            if (prevProject !== projectName) {
                console.log(projectName);
                return projectName;
            }
            return prevProject;
        });
    };
    
    

    return (
        <section className={styles.section}>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ position: 'relative', height: '100%' }}>
                <div className={styles.projectContainer} onClick={(event) => handleProjectClick('AudioCard', event)} style={{top: '10vh', left: '5vw', zIndex: currentProject === 'AudioCard' ? 2 : 1 }}>
                    <AudioCard  />
                </div>
                <div className={styles.projectContainer} onClick={(event) => handleProjectClick('TreesAndRent', event)}  style={{ top: '1vh', left: '10vw',  zIndex: currentProject === 'TreesAndRent' ? 2 : 1 }}>
                    <TreesAndRent />
                </div>
            </div>
        </section>
    );
}