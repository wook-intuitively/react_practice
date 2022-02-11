import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = props =>{

    return(
        <div>
            <h2>{props.name1}</h2>
            <h2>{props.old1}</h2>
        </div>
    );
}

export default ExpenseItem;