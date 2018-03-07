import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink,Link} from "react-router-dom";

const Header=()=>(
    <div className="header">
        <div className="header__content">
            <Link to="/"><h1 className="header__title">Expensify</h1></Link>
            <div className="header__side">
                <NavLink  className="header__links" to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
                <NavLink  className="header__links" to="/create" activeClassName="is-active">Add Expense</NavLink>
            </div>
        </div>
    </div>
);

export default Header;