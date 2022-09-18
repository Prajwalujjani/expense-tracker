import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpesesChart'

function Expenses(props) {
    
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedDate) => {
        setFilteredYear(selectedDate)
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <li>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses = {filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>                
            </Card>            
        </li>
    )
}

export default Expenses