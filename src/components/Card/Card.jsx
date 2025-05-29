import React from 'react';
import styles from './Card.module.css';
import Typography from '../Typography/Typography';

function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.taskName}>
                <Typography fontSize={24}>Do the dishes</Typography>
            </div>
            <div className={styles.actionButton}>
                <button>+</button>
                <button>+</button>
            </div>
        </div>
    )
}

export default Card