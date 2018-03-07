import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter,setCategory} from "../actions/filters";
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
            <div className="listfilters">
                <input type="text" className="listfilters__input" 
                    placeholder="Search by Category/description" 
                    value={this.props.filters.text} onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value))
                }}/>
                <select className="listfilters__select" value={this.props.filters.sortBy} onChange={(e)=>{
                        if(e.target.value=="Date"){
                            this.props.dispatch(sortByDate());
                        }else{
                            this.props.dispatch(sortByAmount());
                        }
                }}>
                    <option value="Date">Date</option>
                    <option value="Amount">Amount</option>
                </select>

                <select required className="listfilters__select" 
                    value={this.props.filters.category} onChange={(e)=>{
                    this.props.dispatch(setCategory(e.target.value))
                }}
                >
                    <option value="">Choose Category</option>
                    <option value="Food">Food</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Vehicle">Vehicle</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>

                <div className="listfilters__date">
                    <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        startDateId="start date" 
                        endDate={this.props.filters.endDate} 
                        endDateId="end date"
                        onDatesChange={this.onDatesChange} 
                        focusedInput={this.state.focusedInput} 
                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        showClearDates={true}
                    />
                </div>
                
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        filters: state.filters
    }
})(ExpenseListFilters);