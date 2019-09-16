import React from 'react';
import styles from './LandingPage.module.css'


const LandingPage = (props) =>{
    return (
        <div>
            <div className={styles.video_container}>
                <div className={styles.overlay}></div>
                
                <div className={styles.idk}></div>
                <div className={styles.header_text_container}>
                    <h1>Start renting Now!</h1>
                </div>
            </div>
        </div>

    )
}

export default LandingPage