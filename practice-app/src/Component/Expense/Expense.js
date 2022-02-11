import React from 'react';

import './Expense.css';
import ExpenseList from './ExpenseList'


const Expense = props => {

    return(
        <ExpenseList expenses={props.items}/>
    );
}

export default Expense;