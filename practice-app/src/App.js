import React, {useState} from 'react';

import './App.css';
import Expense from './Component/Expense/Expense';

const DUMMY_EXPENSES = [
  { id: 1,
    name: 'Max',
    old: '31 years old',
  },
  {
    id: 2,
    name: 'Max',
    old: '31 years old',
  },
];

function App() {

  // const[expenses, setExpenses]=useState(DUMMY_EXPENSES);
  const expenses = DUMMY_EXPENSES;

  return (
   <div>
     <Expense items={expenses}/>
   </div>
  );
}

export default App;
