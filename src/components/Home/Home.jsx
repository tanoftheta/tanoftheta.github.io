import React from "react";
import styles from './home.module.css'; 
import Viz from '../Viz';

export const Home = ({scrollToSection, timeSpent}) => {
    return (
        <section id='home' className={styles.section}>
            <div className={styles.gridContainer}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <h1 id={styles.intro} className={styles.moveInFromLeft}>Hi, I'm Tan Mahmud, a programmer.</h1>
                        </div>
                        <div className="col-md-6"> 
                            <Viz scrollToSection={scrollToSection} timeSpent={timeSpent} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}