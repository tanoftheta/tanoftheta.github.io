import styles from './projects.module.css';
import { TechStack } from './TechStack';

export const Dots = ({}) => {
    const techs = {
        Dart: {label: 'Dart', value: 0.9, stack: 'frontEnd', info: 'This app was coded in Dart language'}, 
        Flutter: {label: 'Flutter', value: 0.8, stack: 'frontEnd', info: 'This is a Flutter app'}, 
        Google: {label: 'Google Cloud Platform', value: '0.6', stack: 'tools', info: 'Our PostgreSQL database was hosted on GCP'}, 
        Firebase: { label: 'Firebase', stack: 'tools' , value: 0.3, info: 'Used Firebase for user authentication with Gmail and email/password, and deployment'},
        Unity: {label: 'Unity', stack: 'tools', value: 0.5, info: 'The game was made on Unity Hub'},
        Alfred: {label: 'Alfred', stack: 'backEnd', value: 0.6, info: 'Used Alfred framework in backend for routing and middleware'}, 
        Postgres: {label: 'PostgreSQL', stack: 'backEnd', value: 0.4, info: 'Designed a database schema with PostgreSQL for storing user info and high scores'},
        Gitlab: {label: 'Gitlab', stack: 'tools', value: 0.3, info: 'Used Gitlab for version control'}
    }
    return (
        <div className={styles.dotsContainer}>
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <h1 className='d-flex justify-content-center'>Dots</h1>
            </div>
            <div className='row d-flex justify-content-center'>
                A Flutter mobile app for Android with a Unity game.
            </div>
            <div className='row d-flex' style={{marginTop: '2vh'}}>
                <div className={`col ${styles.vidContainer}`}>
                    <video height='auto' width='100%' controls>
                        <source src="dots_demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={`col d-flex justify-content-center ${styles.vizContainer}`}>
                <TechStack techs={techs}/> 
            </div>
            </div>
            </div>
        </div>
    )
}