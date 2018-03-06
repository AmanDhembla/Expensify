import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from "../actions/expenses";

const EditExpensePage=(props)=>(
    <div>
        <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense)=>{
            props.dispatch(editExpense(props.match.params.id,expense));
            props.history.push('/');
        }}/>
        <button className="listitem__button" onClick={()=>{
            props.dispatch(removeExpense({id:props.match.params.id}));
            props.history.push('/');
        }}>Remove Item</button>
    </div>
);
export default connect((state,props)=>{
    return {
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id;
        })
    }     
})(EditExpensePage); 