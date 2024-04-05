import React from "react";
import styles from './home.module.css'; 
import Viz from '../Viz';
import { time } from "console";

export const Home = ({timeSpent}) => {
    return (
        <section id='home' className={styles.section}>
            <div className={styles.gridContainer}>
            <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <h1 id={styles.intro} className={styles.moveInFromLeft}>Hi, I'm Tan Mahmud, a programmer.</h1>
                            </div>
                            <div class="col-6"> 
                                 <Viz timeSpent={timeSpent} /> 
                            </div>
                        </div>
                    </div>
            </div>

        </section>
    )
}