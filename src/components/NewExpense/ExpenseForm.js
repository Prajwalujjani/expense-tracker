import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    //ALternative approach all together in single state  and commented code in the handlers are to make use of this state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)        
        // console.log(event.target.value)
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)        
        // console.log(event.target.value)
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     }
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // console.log(event.target.value)
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //     }
        // })
    }

    const submitHandler = (event)=>{
        event.preventDefault()

        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' onClick={props.closeEditing}>Cancel</button>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm