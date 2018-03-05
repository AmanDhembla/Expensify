import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from "../actions/filters";
import {sortByDate,sortByAmount,setStartDate,setEndDate} from "../actions/filters";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component{
    state={
        focusedInput: null

    }
    onDatesChange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value))
                }}/>
                <select value={this.props.filters.sortBy} onChange={(e)=>{
                        if(e.target.value=="Date"){
                            this.props.dispatch(sortByDate());
                        }else{
                            this.props.dispatch(sortByAmount());
                        }
                }}>
                    <option value="Date">Date</option>
                    <option value="Amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate} 
                    endDate={this.props.filters.endDate} 
                    onDatesChange={this.onDatesChange} 
                    focusedInput={this.state.focusedInput} 
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        filters: state.filters
    }
})(ExpenseListFilters);