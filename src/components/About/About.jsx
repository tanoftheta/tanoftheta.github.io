import React from "react";
import styles from './about.module.css'; 

export const About = () => {
    return (
        <section id='about' className={styles.section}>
                <p> I am an undergraduate student at Hunter College in my final year of a degree in Computer Science with a minor in Mathematics. I am particularly interested in machine learning 
                and data science. 
                </p>
                <p>
                    I was born and raised in New York City. Outside of my passion for numbers and programming, 
                I am an avid reader, doting cat owner, and ramen lover. 
                </p>
        </section>
    )
}