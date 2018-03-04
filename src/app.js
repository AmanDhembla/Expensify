import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {add_Expense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store =configureStore();

store.subscribe(()=>{
    const state=store.getState();
    const expenses=state.expenses;
    const filters=state.filters;
    console.log(getVisibleExpenses(expenses,filters));
});

store.dispatch(add_Expense({
    description: "khana",
    amount: 400,
    createdAt: 2000
}));

store.dispatch(add_Expense({
    description: "peena",
    amount: 100,
    createdAt:1000
}));

store.dispatch(add_Expense({
    description: "grocery",
    amount: 250,
    createdAt: 100
}));

store.dispatch(setTextFilter("na"));

const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

 ReactDOM.render(jsx,document.getElementById("app"));
