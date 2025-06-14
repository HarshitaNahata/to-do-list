import React from 'react';
import styles from './Form.module.css'
import Typography from '../Typography/Typography';
import Card from '../Card/Card';
import Button from '../Button/Button';

function Form() {
    return (
        <div className={styles.form}>
            <Typography fontSize={24} bold>
                Add New Task
            </Typography>
            <Card col>
                <div className={styles.inputContainer}>
                    <Typography fontSize={16}>
                        Task Name:
                    </Typography>
                    <input type="text" />
                </div>
                <div className={styles.inputContainer}>
                    <Typography fontSize={16}>
                        Category:
                    </Typography>
                    <input type="text" />
                </div>

                <Button />
            </Card>
        </div>
    )
}

export default Form