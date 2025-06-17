import React from 'react';
import check from "../../assets/check.svg";
import styles from './Checkbox.module.css';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../reducer/todosSlice';

function Checkbox({ todo }) {
    const dispatch = useDispatch();
    const handleCheckbox = (checked) => {
        dispatch(updateTodo({ ...todo, done: checked }));
    };
    return (
        <div className={todo.done ? styles.checkbox : styles.active}>
            <input type="checkbox" checked={todo.done} onChange={(e) => handleCheckbox(e.target.checked)} />
            <img src={check} alt='check' />
        </div>
    )
}

export default Checkbox