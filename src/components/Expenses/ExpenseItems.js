import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import { useState } from 'react';

function ExpenseItem({item}) {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={item.date} />
            <div className='expense-item__description'>
                <h2>{item.title}</h2>
                <div className='expense-item__price'>${item.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;