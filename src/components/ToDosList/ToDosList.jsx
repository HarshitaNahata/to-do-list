import React from 'react';
import Card from '../Card/Card';
import styles from './ToDosList.module.css'
import TodoItem from '../TodoItem/TodoItem';

function ToDosList() {
    return (
        <div className={styles.todoList}>
            {[0, 1, 2, 3].map((item) => (
                <Card>
                    <TodoItem />
                </Card>
            ))}
        </div>
    )
}

export default ToDosList