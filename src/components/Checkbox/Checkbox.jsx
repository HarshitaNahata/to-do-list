import React from 'react';
import check from "../../assets/check.svg";
import styles from './Checkbox.module.css';

function Checkbox() {
    return (
        <div className={styles.checkbox}>
            <input type="checkbox" />
            <img src={check} alt='check' />
        </div>
    )
}

export default Checkbox