import React from 'react';
import {connect} from 'react-redux'; 
import {Link} from 'react-router-dom'; 
import {removeExpense} from '../actions/expenses';
import moment from 'moment';

const ExpenseListItem= (props)=>(
            <Link className="listitem" to={`/edit/${props.id}`}>
                <div>    
                    <h3>{props.description} - {props.category}</h3>
                    <p className="listitem__date">{moment(props.createdAt).format('MMMM Do, YYYY')}</p>
                </div>
                    <p className="listitem__details">Rs.{props.amount}</p>
            </Link>
);  

export default connect()(ExpenseListItem);