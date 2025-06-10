import React from 'react'
import Checkbox from '../Checkbox/Checkbox';
import Typography from '../Typography/Typography';
import ActionButton from '../ActionButton/ActionButton';
import styles from './ToDoItem.module.css';
import pencil from '../../assets/pencil.svg';
import trash from '../../assets/trash.svg';

function ToDoItem() {
    return (
        <div>
            <div className={styles.taskName}>
                <Checkbox />
                <Typography fontSize={24}>Do the dishes</Typography>
            </div>
            <div className={styles.actionButtons}>
                <ActionButton icon={pencil} handleClick={() => null} />
                <ActionButton icon={trash} handleClick={() => null} />
            </div>
        </div>
    )
}

export default ToDoItem