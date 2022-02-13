import React from 'react';
import styled from 'styled-components';

import './Expense.css';
import ExpenseList from './ExpenseList'
import Card from '../UI/Card';


const Expense = props => {
    const deleteUserHandler = (selectedId) =>{
        props.onDeleteUserById(selectedId);
    };
    return(
        <Card>
            <ExpenseList expenses={props.items} onDeleteUser={deleteUserHandler}/>
        </Card>
    );
}

export default Expense;