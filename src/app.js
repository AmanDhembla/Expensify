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
    console.log(state);
});

store.dispatch(add_Expense({
    description: "kurkure",
    amount: 20,
    category: "Food",
    createdAt: 1485435555555
}));

store.dispatch(add_Expense({
    description: "coca-cola",
    amount: 35,
    category: "Entertainment",
    createdAt:1487555555555
}));

store.dispatch(add_Expense({
    description: "onions",
    amount: 50,
    category:"Grocery",
    createdAt: 1486555555555
}));

const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

 ReactDOM.render(jsx,document.getElementById("app"));
