import React from 'react';
import Card from '../Card/Card';
import styles from './ToDosList.module.css'
import ToDoItem from '../ToDoItem/ToDoItem';

function ToDosList() {
    return (
        <div className={styles.todoList}>
            {[0, 1, 2, 3].map((item) => (
                <Card>
                    <ToDoItem />
                </Card>
            ))}
        </div>
    )
}

export default ToDosList