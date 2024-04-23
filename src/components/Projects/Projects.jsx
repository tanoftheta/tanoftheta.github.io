import React , {useState, useEffect} from "react";
import styles from './projects.module.css'; 
import {AudioCard} from './AudioCard.jsx'; 
import { TreesAndRent } from "./TreesAndRent.jsx";

export const Projects = ({}) => {
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
        <div className="container-fluid d-flex justify-content-center align-items-center" 
        style={{ position: 'relative', height: '100%', marginTop: '10%'}}>
            <div className={styles.projectContainerAC} onClick={(event) => handleProjectClick('AudioCard', event)}  style={{ zIndex: currentProject === 'AudioCard' ? 5 : 1 }}>
                    <AudioCard />
                </div>
                <div className={styles.projectContainerTR} onClick={(event) => handleProjectClick('TreesAndRent', event)}  style={{ zIndex: currentProject === 'TreesAndRent' ? 5 : 1 }}>
                    <TreesAndRent/>
                </div>
            </div>
        </section>
    );
}