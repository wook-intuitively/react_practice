import React, {useState} from 'react';

import './ExpenseForm.css';
import styled from 'styled-components';

const Button = styled.button`
    font: inherit;
    padding: 0.5rem;
    border: 1px solid #8b005d;
    color: white;
    cursor: pointer;

&:focus {
    outline: none;
}

&:hover,
&:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0,0,0,0.26);
}
`;

const ExpenseForm = props => {

    const[enteredName,setEnteredName] = useState('');
    const[enteredAge, setEnteredAge] = useState('');

    const[isValid,setIsValid] = useState(true);

    const nameChangedHandler =(event) =>{
        setEnteredName(event.target.value);
        console.log(event.target.value);
    }
    const ageChangedHandler = event =>{
        setEnteredAge(event.target.value);
        console.log(event.target.value);
    }

    const submitHanlder = event =>{
        event.preventDefault();
        console.log(event);
        if(event.trim().length === 0){
            setIsValid(false);
            return;
        }

        const userData={
            id: Math.random(),
            name: enteredName,
            age: enteredAge,
        }

        props.onSaveUserData(userData);

        setEnteredName('');
        setEnteredAge('');
    }
    return (
        <form onSubmit={submitHanlder}>
            <div className='new-user__controls'>
                <div className='new-user__control'>
                    <label>User Name</label>
                    <input type='text' value={enteredName} onChange={nameChangedHandler}></input>
                </div>
                <div className='new-user__control'>
                    <label>Age (Years)</label>
                    <input type='text' value={enteredAge} onChange={ageChangedHandler}></input>
                </div>
                <div className='new-user__control'>
                    <button type='submit'>Add User</button>
                </div>
            </div>
        </form>
    );
}
export default ExpenseForm;