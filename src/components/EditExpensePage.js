import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from "../actions/expenses";

const EditExpensePage=(props)=>(
    <div>
        <h2 className="editexpenseheading">Edit Expense</h2>
        <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense)=>{
            props.dispatch(editExpense(props.match.params.id,expense));
            props.history.push('/');
        }}/>
        <div className="formcontainer">
        <button className="expenseform__button" onClick={()=>{
            props.dispatch(removeExpense({id:props.match.params.id}));
            props.history.push('/');
        }}>Remove Expense</button>
        </div>
    </div>
);
export default connect((state,props)=>{
    return {
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id;
        })
    }     
})(EditExpensePage); 