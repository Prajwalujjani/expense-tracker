import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => setIsEditing(true)
    const stopEditingHandler = () => setIsEditing(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    return <div className='new-expense'>
        {
            isEditing === false ?
                <button type='submit' onClick={startEditingHandler}>Add expense</button> :
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeEditing = {stopEditingHandler}/>
        }


    </div>
}

export default NewExpense