import React , {useState, useEffect} from "react";
import styles from './projects.module.css'; 
import {AudioCard} from './AudioCard.jsx'; 
import { TreesAndRent } from "./TreesAndRent.jsx";

export const Projects = ({}) => {
    const [currentProject, setCurrentProject] = useState('AudioCard');
    const [positionAC, setPositionAC] = useState({ x: 40, y: 110});
    const [positionTR, setPositionTR] = useState({ x: 150, y: 40});
    const [offsetAC, setOffsetAC] = useState({ x: 0, y: 0 });
    const [offsetTR, setOffsetTR] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

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

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
            if (currentProject === 'AudioCard'){
                setPositionAC({
                    x: e.clientX - offsetAC.x,
                    y: e.clientY - offsetAC.y,
                });
            }
            else {
                setPositionTR({
                    x: e.clientX - offsetTR.x,
                    y: e.clientY - offsetTR.y,
                })
            }
        }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, offsetTR, offsetAC]);

    const handleMouseDown = (e) => {
        e.stopPropagation(); 
        setIsDragging(true);
        if (currentProject === 'AudioCard'){
        setOffsetAC({
            x: e.clientX - positionAC.x,
            y: e.clientY - positionAC.y,
        });
        }
        else{
            setOffsetTR({
                x: e.clientX - positionTR.x, 
                y: e.clientY - positionTR.y, 
            })
        }
    };
    
    

    return (
        <section className={styles.section}>
        <div className="container-fluid d-flex justify-content-center align-items-center"
        onMouseDown={handleMouseDown}
        style={{ position: 'relative', height: '100%', marginTop: '10%'}}>
            <div className={styles.projectContainerAC} onClick={(event) => handleProjectClick('AudioCard', event)}  style={{ position: 'absolute', left: positionAC.x, top: positionAC.y, zIndex: currentProject === 'AudioCard' ? 5 : 1 }}>
                    <AudioCard />
                </div>
                <div className={styles.projectContainerTR} onClick={(event) => handleProjectClick('TreesAndRent', event)}  style={{position: 'absolute', left: positionTR.x, top: positionTR.y,  zIndex: currentProject === 'TreesAndRent' ? 5 : 1 }}>
                    <TreesAndRent/>
                </div>
            </div>
        </section>
    );
}