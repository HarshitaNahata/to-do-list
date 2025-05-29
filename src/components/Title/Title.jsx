import React from 'react';
import styles from './Title.module.css';
import Typography from '../Typography/Typography';

function Title() {
    return (
        <div className={styles.titleContainer}><Typography fontSize={24} bold>Simple To-Do List</Typography></div>
    )
}

export default Title