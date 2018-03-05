import React from 'react';
import {connect} from 'react-redux'; 
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from "../selectors/expenses";

const  ExpenseList = (props) =>(
    <div>
        <h1>Expense List</h1>
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