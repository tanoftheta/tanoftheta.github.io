import React, { useState, useEffect } from 'react';
import styles from './projects.module.css';
import { TechStack } from './TechStack';

export const AudioCard = ({}) => {
    const techs = {
            JS: { label: 'JavaScript', value: 0.85 , stack: 'frontEnd', info: 'The majority of this project was coded in javascript'},
            React: { label: 'React', value: .9, stack: 'frontEnd', info: 'Used React in frontend to create a component-based architecture and dynamic UI' },
            CSS: { label: 'CSS', value: 0.3 , stack: 'frontEnd', info: 'Customized UI/UX, made a responsive design with animations, transitions, and cross-browser compatibility'},
            Axios: {label: 'Axios', value: .5, stack: 'frontEnd' , info: 'Used for HTTP requests'},
            Node: { label: 'Node', value: 1, stack: 'backEnd', info: 'Used Node for server-side development' },
            Express: { label: 'Express', value: 0.5, stack:'backEnd', info: 'Used for middleware and routing for API endpoints'},
            Google: { label: 'Google Cloud APIs', value: 0.55, stack: 'backEnd',  info: 'Used Google Cloud Text to Speech, Speech to Text, and Natural Language' },
            Sequelize: { label: 'Sequelize ORM', value: 0.3, stack: 'backEnd', info: 'Used to interact with our MySQL database' },
            Github: { label: 'Github', value: 0.8, stack: 'tools', info: 'Used GitHub projects for backlog and sprint planning, code review on pull requests, and version control' },
            AWS: { label: 'Amazon Web Services', value: 0.6, stack: 'tools', info: "Used to host our MySQL database, S3 bucket to store user profile pics"},
            Firebase: { label: 'Firebase', stack: 'tools' , value: 0.3, info: 'Used Firebase for user authentication' },
            Render: { label: 'Render', value: 0.2, stack: 'tools', info: 'Free server to deploy our live product' }
    };
    


    return (
        <div className={styles.audioCardContainer}>
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <h1 className='d-flex justify-content-center'>AudioCard</h1>
            </div>
            <div className='row d-flex justify-content-center'>
                An audio-based flashcard app that uses automated speech recognition to test its users.
            </div>
            <div className='row d-flex' style={{marginTop: '2vh'}}>
                <div className={`col ${styles.vidContainer}`}>
                    <video height='auto' width='100%' controls>
                        <source src="AudioCardDemo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={`col d-flex justify-content-center ${styles.vizContainer}`}>
                <TechStack techs={techs}/> 
            </div>
            </div>
            <div className='row align-items-center' style={{marginTop: '4vh'}}>
                <div className='col d-flex justify-content-end'>
                    <a className={styles.gitLogo} href="https://github.com/csci-499-sp24/AudioCard" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                </div>
                <div className='col-1 d-flex justify-content-center'>
                    <h2>|</h2>
                </div>
                <div className='col d-flex justify-content-begin'>
                    <a href="https://audiocard-client-9rn8.onrender.com/welcome" target="_blank">
                        <i className={`bi bi-link ${styles.LinkIcon}`}></i>
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
};
