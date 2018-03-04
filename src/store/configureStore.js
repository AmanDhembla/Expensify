import {createStore,combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses.js';
import filterReducer from '../reducers/filters.js';



export default () =>{
    const store=createStore(combineReducers({
        expenses:expenseReducer,
        filters:filterReducer
    }
    ));
    return store;
}