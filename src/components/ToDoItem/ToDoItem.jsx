import React from 'react'
import Checkbox from '../Checkbox/Checkbox';
import Typography from '../Typography/Typography';
import ActionButton from '../ActionButton/ActionButton';
import styles from './TodoItem.module.css';
import pencil from '../../assets/pencil.svg';
import trash from '../../assets/trash.svg';

function TodoItem({ todo }) {
    return (
        <>
            <div className={styles.taskName}>
                <Checkbox todo={todo} />
                <Typography fontSize={24}>{todo.name}</Typography>
            </div>
            <div className={styles.actionButtons}>
                <ActionButton icon={pencil} handleClick={() => null} />
                <ActionButton icon={trash} handleClick={() => null} />
            </div>
        </>
    )
}

export default TodoItem