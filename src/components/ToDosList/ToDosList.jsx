import React from 'react';
import Card from '../Card/Card';
import styles from './toDosList.module.css'
import ToDoItem from '../toDoItem/toDoItem';
// import { useSelector } from 'react-redux';
import Typography from '../Typography/Typography';
import { useFilterTodos } from '../../hooks/useFilterTodos';

function ToDosList() {
    const displayedTodos = useFilterTodos();
    // const { todos, category } = useSelector((state) => state.todos);
    // const displayedTodos = todos.filter((todo) => todo.category === category);
    return (
        <div className={styles.todoList}>
            {displayedTodos.length > 0 ? (displayedTodos.map((todo) => (
                <Card key={todo.id}>
                    <ToDoItem todo={todo} />
                </Card>
            ))
            ) : (<Typography>No tasks In This Category</Typography>)
            }
        </div>
    )
}

export default ToDosList