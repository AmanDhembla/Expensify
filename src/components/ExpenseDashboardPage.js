import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

const ExpenseDashboardPage=()=>(
    <div>
        <p>this is from dashboard page</p>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;