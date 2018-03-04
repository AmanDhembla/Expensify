import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from "../actions/filters";
import {sortByDate,sortByAmount} from "../actions/filters";
const ExpenseListFilters = (props) =>(
    <div>
        <input type="text" value={props.filters.text} onChange={(e)=>{
            props.dispatch(setTextFilter(e.target.value))
        }}/>
        <select value={props.filters.sortBy} onChange={(e)=>{
                if(e.target.value=="Date"){
                    props.dispatch(sortByDate());
                }else{
                    props.dispatch(sortByAmount());
                }
        }}>
            <option value="Date">Date</option>
            <option value="Amount">Amount</option>
        </select>
    </div>
);

export default connect((state)=>{
    return {
        filters: state.filters
    }
})(ExpenseListFilters);