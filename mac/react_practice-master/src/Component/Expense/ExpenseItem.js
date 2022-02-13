import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = props =>{

    const clickHandler = () =>{
        props.onDelete(props.id);
    }
    return(
        <div className='expense-item' onClick={clickHandler}>
            <div className='expense-item__control'>
                <label>{props.name1} ( {props.age1} years old)</label>
            </div>
        </div>
    );
}

export default ExpenseItem;