import React, {useState, useEffect} from 'react'; 
import styles from './projects.module.css'; 
import { TechStack } from './TechStack';

export const TreesAndRent = ({}) => {
    const techs = {
        py : {label: 'Python', value: 0.9, stack: 'frontEnd', info:'Used Python and Python libraries for data cleaning, data manipulation, data visualizations, calculations'},
        jnb : {label: 'Jupyter Notebook', value: 0.95, stack: 'tools', info:'Used Jupyter Notebook to present my process and findings'},
        pandas : {label: 'Pandas', value: 0.7, stack: 'frontEnd', info:'Used Pandas for data manipulation and transformation'}, 
        numpy: {label: 'NumPy', value: 0.3, stack: 'frontEnd', info: 'Used NumPy to further assist with data manipulation and calculations'}, 
        scipy: {label: 'SciPy', value: 0.3, stack: 'frontEnd', info: 'Used SciPy to make statistical calculations, such as correlation coefficient and p-value'}, 
        py : {label: 'Python', value: 0.9, stack: 'frontEnd', info:'Used Python and Python libraries for data cleaning, data manipulation, data visualizations, calculations'}, 
        sns: {label: 'Seaborn', value: 0.5, stack: 'frontEnd', info: 'Used Seaborn for creating data visualizations'}, 
        mpl: {label: 'Matplotlib', value: 0.4, stack: 'frontEnd', info: 'Used Matplotlib for assistance in creating data visualizations'}
    }

    return(
        <div className={styles.treesContainer}>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <h1 className='d-flex justify-content-center'>NYC Trees and Rent</h1>
                </div>
                <div className='row d-flex justify-content-center'>
                    An exploratory data analysis on the NYC tree census and median rent in NYC neighborhoods. 
                </div>
                <div className='row d-flex ' style={{marginTop: '2vh'}}>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <img style={{ maxWidth: '100%', height: 'auto' }} src='treeProjImage.png' alt="demo_image"/> 
                    </div>
                    <div className={`col d-flex justify-content-center ${styles.vizContainer}`}>
                        <TechStack techs={techs}/> 
                    </div>
                </div>
                <div className='row d-flex justify-content-center' style={{marginTop: '4vh'}}>
                <div className='col d-flex justify-content-center'>
                <a className={styles.gitLogo} href="https://github.com/tanoftheta/NYC_trees_and_rent" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}