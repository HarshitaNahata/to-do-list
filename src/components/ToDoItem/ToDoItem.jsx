import React, { useState } from 'react'
import Checkbox from '../Checkbox/Checkbox';
import Typography from '../Typography/Typography';
import ActionButton from '../ActionButton/ActionButton';
import styles from './TodoItem.module.css';
import pencil from '../../assets/pencil.svg';
import trash from '../../assets/trash.svg';
import check from '../../assets/check.svg';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../reducer/todosSlice';

function TodoItem({ todo }) {
    const [editingMode, setEditingMode] = useState(false);
    const [newTodo, setNewTodo] = useState(todo);
    const dispatch = useDispatch();
    const handleEdit = () => {
        dispatch(updateTodo(newTodo));
        setEditingMode(false);
    }
    return (
        <>
            <div className={styles.taskName}>
                <Checkbox todo={todo} />
                {editingMode ? (<input type="text" onChange={(e) => setNewTodo({ ...todo, name: e.target.value })} />
                ) : (<Typography fontSize={24}>{todo.name}</Typography>)}
            </div>
            <div className={styles.actionButtons}>
                {editingMode ? (<ActionButton icon={check} handleClick={() => handleEdit()} />
                ) : (
                    <ActionButton icon={pencil} handleClick={() => setEditingMode(true)}
                    />
                )}
                <ActionButton icon={trash} handleClick={() => dispatch(deleteTodo(todo.id))} />
            </div>
        </>
    )
}

export default TodoItem