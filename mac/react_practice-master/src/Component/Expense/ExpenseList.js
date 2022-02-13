import React from 'react';

import './ExpenseList.css';
import ExpenseItem from './ExpenseItem'
const ExpenseList = props =>{
    const deleteHandler = (selectedId) =>{
        console.log(selectedId);
        props.onDeleteUser(selectedId);
    };

    return (
        <div className='expense-list' >
            {props.expenses.map((expense) =>(
                <ExpenseItem 
                key={expense.id}
                id={expense.id}
                name1={expense.name}
                age1={expense.age}

                onDelete={deleteHandler}
                />
            ))
            }
        </div>
    );
}

export default ExpenseList;