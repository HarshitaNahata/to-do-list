import React from 'react'
import Checkbox from '../Checkbox/Checkbox';
import Typography from '../Typography/Typography';
import ActionButton from '../ActionButton/ActionButton';
import styles from './TodoItem.module.css';
import pencil from '../../assets/pencil.svg';
import trash from '../../assets/trash.svg';

function TodoItem() {
    return (
        <>
            <div className={styles.taskName}>
                <Checkbox />
                <Typography fontSize={24}>Do the dishes</Typography>
            </div>
            <div className={styles.actionButtons}>
                <ActionButton icon={pencil} handleClick={() => null} />
                <ActionButton icon={trash} handleClick={() => null} />
            </div>
        </>
    )
}

export default TodoItem