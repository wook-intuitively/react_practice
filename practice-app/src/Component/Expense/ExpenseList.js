import React from 'react';

import './ExpenseList.css';
import ExpenseItem from './ExpenseItem'
const ExpenseList = props =>{

    return (
        <div>
            {props.expenses.map((expense) =>(
                <ExpenseItem 
                key={expense.id}
                name1={expense.name}
                old1={expense.old}
                />
            ))
            };
            
        </div>
    );
}

export default ExpenseList;