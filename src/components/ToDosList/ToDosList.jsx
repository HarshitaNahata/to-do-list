import React from 'react';
import Card from '../Card/Card';
import styles from './ToDosList.module.css'
import TodoItem from '../TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import Typography from '../Typography/Typography';

function ToDosList() {
    const { todos, category } = useSelector((state) => state.todos);
    const displayedTodos = todos.filter((todo) => todo.category === category);
    return (
        <div className={styles.todoList}>
            {displayedTodos.length > 0 ? (displayedTodos.map((todo) => (
                <Card key={todo.id}>
                    <TodoItem todo={todo} />
                </Card>
            ))
            ) : (<Typography>No tasks In This Category</Typography>)
            }
        </div>
    )
}

export default ToDosList