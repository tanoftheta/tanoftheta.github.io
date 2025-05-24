import React, {useState, useEffect} from 'react'; 
import styles from './projects.module.css'; 
import { TechStack } from './TechStack';

export const IMessageWrapped = ({}) => {
    const techs = {
        py : {label: 'Python', value: 0.9, stack: 'frontEnd', info:'Used Python and Python libraries for data cleaning, data manipulation, data visualizations, calculations, and API calls'},
        jnb : {label: 'Jupyter Notebook', value: 0.95, stack: 'tools', info:'Used Jupyter Notebook to present my process and findings'},
        openai : {label: 'OpenAI', value: 0.20, stack: 'frontEnd', info:'Used OpenAI API for tonal analysis of texts'},
        pandas : {label: 'Pandas', value: 0.7, stack: 'frontEnd', info:'Used Pandas for data manipulation and transformation'}, 
        numpy: {label: 'NumPy', value: 0.3, stack: 'frontEnd', info: 'Used NumPy to further assist with data manipulation and calculations'}, 
        py : {label: 'Python', value: 0.9, stack: 'frontEnd', info:'Used Python and Python libraries for data cleaning, data manipulation, data visualizations, calculations'}, 
        sns: {label: 'Seaborn', value: 0.5, stack: 'frontEnd', info: 'Used Seaborn for creating data visualizations'},
        Google: {label: 'Google Cloud Platform', value: '0.2', stack: 'frontEnd', info: 'Used Google Natural Language API for sentiment analysis of texts'}, 
        mpl: {label: 'Matplotlib', value: 0.4, stack: 'frontEnd', info: 'Used Matplotlib for assistance in creating data visualizations'}
    }

    return(
        <div className={styles.imessageContainer}>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <h1 className='d-flex justify-content-center' style={{ color: 'white' }}>2024 iMessage Wrapped </h1>
                </div>
                <div className='row d-flex justify-content-center' style={{ color: 'white'}}>
                    Exploration, data and language analysis, and visualizations of my 2024 iMessages, done in the style of Spotify's end-of-the-year Wrapped.
                </div>
                <div className='row d-flex ' style={{marginTop: '2vh'}}>
                    <div className='col d-flex justify-content-center align-items-center'>
                        <img style={{ maxWidth: '100%', height: 'auto' }} src='iMessageimg.png' alt="demo_image"/> 
                    </div>
                    <div className={`col d-flex justify-content-center ${styles.vizContainer}`}>
                        <TechStack techs={techs}/> 
                    </div>
                </div>
                <div className='row d-flex justify-content-center' style={{marginTop: '4vh'}}>
                </div>
            </div>
        </div>
    )
}