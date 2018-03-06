import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import {add_Expense} from "../actions/expenses";

const AddExpensePage=(props)=>(
    <div>
        <h2 className="editexpenseheading">Add Expense</h2>
        <ExpenseForm onSubmit={(expense)=>{
            props.dispatch(add_Expense(expense));
            props.history.push('/');
        }}/>
    </div>
);

export default connect()(AddExpensePage);