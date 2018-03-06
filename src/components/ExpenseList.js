import React from 'react';
import {connect} from 'react-redux'; 
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from "../selectors/expenses";

const  ExpenseList = (props) =>(
    <div className="expenseList">
        <h1 className="expenseListHeading">Expense List</h1>
        <div className="expenseListHeader">
            <p>Category/Description</p>
            <p>Amount</p>
        </div>
        {props.expenses.map((expense)=>{
            return <ExpenseListItem {...expense} key={expense.id}/>
        })}
    </div>
);
 
export default connect((state)=>{
    console.log(state);
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
})(ExpenseList);