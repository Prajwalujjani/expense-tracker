import ExpenseItem from "./ExpenseItems"
import "./ExpensesList.css"

const ExpensesList = ({ items }) => {

    return (
        <ul className="expenses-list">
            {items.length > 0 ? items.map(item => (
                (<ExpenseItem
                    key={item.id}
                    item={item}
                />)
            )) :
                <h2 className="expenses-list__fallback">Found no expenses.</h2>
            }
        </ul>
    )
}

export default ExpensesList