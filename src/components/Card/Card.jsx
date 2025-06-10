import React from 'react';
import styles from './Card.module.css';
// import Typography from '../Typography/Typography';
// import Checkbox from '../Checkbox/Checkbox';
// import ActionButton from '../ActionButton/ActionButton';
// import pencil from '../../assets/pencil.svg';
// import trash from '../../assets/trash.svg';

function Card({ children }) {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

export default Card