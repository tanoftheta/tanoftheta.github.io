import React, { useState, useRef } from "react";
import styles from './contact.module.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const [showConfirmMessage, setShowConfirmMessage] = useState(false);
    const [error, setError] = useState('');
    const sendEmail = (e) => {
        e.preventDefault();

        const name = form.current.from_name.value;
        const email = form.current.from_email.value;
        const message = form.current.message.value;

        if (!name || !email || !message) {
            setError('Please fill in all fields.');
            return;
        }


        emailjs.sendForm('service_i3wihc5', 'template_lq6iuwk', form.current, {
            publicKey: 'goahv2BLHqCYGhLSy',
        }).then(
            () => {
                setShowConfirmMessage(true); 
                setError('');
                form.current.reset();
                setTimeout(() => setShowConfirmMessage(false), 5000); 
            },
            (error) => {
                console.log('FAILED', error.text);
                setError('Something went wrong. Try again.');
            },
        );
    }

    return (
        <section className={styles.section}>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: '100%'}}>
            <div className={styles.gridContainer}>
                <div className={styles.contactFormContainer}>
                    <div className='row'>
                        <h1 className={styles.Title}>Get in touch</h1>
                    </div>
                    <div className='formContainer'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='row' style={{marginBottom: '1.5rem'}}>
                                <div className='col-3 d-flex justify-content-end'>
                                    <label className={`${styles.label} me-2`}>Name:</label>
                                </div>
                                <div className='col-9'>
                                    <input type="text" name="from_name" className={styles.formField} />
                                </div>
                            </div>
                            <div className='row'  style={{marginBottom: '1.5rem'}}>
                                <div className='col-3 d-flex justify-content-end'>
                                    <label className={`${styles.label} me-2`}>Email:</label>
                                </div>
                                <div className='col-9'>
                                    <input type="email" name="from_email" className={styles.formField} />
                                </div>
                            </div>
                            <div className='row' style={{marginBottom: '2rem'}}>
                                <div className='col-3 d-flex justify-content-end'>
                                    <label className={`${styles.label} me-2`}>Message:</label>
                                </div>
                                <div className='col-9'>
                                    <textarea name="message" className={`${styles.formField} ${styles.messageArea}`} />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button type="submit" className={`btn ${styles.btnCustom}`}>
                                    <i className="bi bi-envelope"></i> Send Email
                                </button>
                            </div>
                            {showConfirmMessage && <div className='d-flex justify-content-center'style={{color: 'white'}}>Message sent! <i className="bi bi-check" style={{color:'lightgreen'}}></i></div> }
                            {error && <div className='row mb-3'><div className='col-12 text-danger d-flex justify-content-center'>{error}</div></div>}
                        </form>
                    </div>
                </div>
                </div> 
            </div>
        </section>
    )
}