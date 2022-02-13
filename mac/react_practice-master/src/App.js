import React, {useState} from 'react';
import styled from 'styled-components';

import './App.css';
import Expense from './Component/Expense/Expense';
import NewExpense from './Component/NewExpense/NewExpense';

const DUMMY_USERS = [
  { id: 1,
    name: 'Max',
    age: '31',
  },
  {
    id: 2,
    name: 'jun',
    age: '12',
  },
  {
    id: 3,
    name: 'Jay',
    age: '23',
  },
];

function App() {

  const[users, setUsers]=useState(DUMMY_USERS);
  const deleteUserHanlder = (userId) =>
  {
    setUsers((prevUsers)=>{
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    })
     //setUsers에다가 id로 해당 user 찾아서 삭제하고 반영 라고 생각 했지만...
     //여기서는 그걸 제외하고 다시 set해주는거네
     //const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);

  }
  
  const addUserDataHandler = user =>{
    setUsers((prevUsers) =>{
      return [user, ...prevUsers];
      
    });
    console.log(users);
  }

  return (
   <div>
     <NewExpense onAddUserData={addUserDataHandler}/>
     <Expense items={users} onDeleteUserById={deleteUserHanlder}/>
   </div>
  );
}

export default App;
