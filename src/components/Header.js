import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from "react-router-dom";

const Header=()=>(
    <div className="header">
        <h1 className="header__title">Expensify</h1>
        <div className="header__side">
            <NavLink  className="header__links" to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink  className="header__links" to="/create" activeClassName="is-active">Add Expense</NavLink>
        </div>
    </div>
);

export default Header;