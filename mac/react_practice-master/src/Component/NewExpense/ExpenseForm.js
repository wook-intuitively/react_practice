import React, {useState} from 'react';

import './ExpenseForm.css';
import styled from 'styled-components';

const Button = styled.button`
    font: inherit;
    padding: 0.5rem;
    border: 1px solid #8b005d;
    color: black;
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

const Label = styled.label`
    font-size: 1.5rem;
    display: flex;
    color: black;
    margin-bottom: 1rem;
`;

const Input = styled.input`
    width: 20rem;
    padding: 0.5rem;
    max-width: 100%;
    font-size:1.5rem;
    margin-bottom: 1rem;
    border-color: ${props => props.isvalid ? 'red' : 'black'};
    
`;

const ExpenseForm = props => {

    const[enteredName,setEnteredName] = useState('');
    const[enteredAge, setEnteredAge] = useState('');

    const[isValid,setIsValid] = useState('true');

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
        console.log(enteredName.trim().length)
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0)
        {
            setIsValid('false');
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
        setIsValid('true');
    }
    return (
        <form onSubmit={submitHanlder}>
            <div className='new-user__controls'>
                <div isvalid={isValid}>
                    <Label>User Name</Label>
                    <Input type='text' value={enteredName} onChange={nameChangedHandler}></Input>
                </div>
                <div className='new-user__control'>
                    <label>Age (Years)</label>
                    <input type='text' value={enteredAge} onChange={ageChangedHandler}></input>
                </div>
                <div className='new-user__control'>
                    <Button type='submit'>Add User</Button>
                </div>
            </div>
        </form>
    );
}
export default ExpenseForm;