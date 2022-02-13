import React from 'react';

import './NewExpense.css';
import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';

const NewExpense = props =>{

    const saveUserDataHandler = event =>{
        props.onAddUserData(event);
        
    }
    return(
        <Card className='new-expense'>
            <ExpenseForm onSaveUserData={saveUserDataHandler}/>
        </Card>
    );

}
export default NewExpense;