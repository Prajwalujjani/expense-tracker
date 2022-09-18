import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses'
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {id : 'e1', date : new Date(2022, 2, 20),  title : 'Toilet paper', amount : 94.67},
  {id : 'e2', date : new Date(2020, 3, 20),  title : 'Car insurance', amount : 199.67},
  {id : 'e3', date : new Date(2022, 4, 20),  title : 'New desk', amount : 200.67},
  {id : 'e4', date : new Date(2022, 5, 20),  title : 'New TV', amount : 799.67}
]

function App() {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES)
  

  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses) => [expense, ...prevExpenses])
  }
  

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  )
}

export default App;
