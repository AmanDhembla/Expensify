import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    state ={
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        focused: false
    };
    onDescriptionChange =(e)=>{
        const desc=e.target.value;
        this.setState(()=>{
            return {
                description : desc
            }
        })
    }
    onNoteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>{
            return {
                note: note
            }
        })
    }
    onAmountChange=(e)=>{
        const amount =e.target.value;
    if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>{
                return {
                    amount: amount
                }
            });
         }
    }
    onDateChange=(createdAt)=>{
        this.setState(()=>{
            return {
                createdAt: createdAt
            }
        })
    }
    render(){
        return (
            <div>
                <form>
                    <input type="text" placeholder="Description" 
                        autoFocus 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange}
                    />
                    <input type="text" 
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={({ focused }) => this.setState({ focused })}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                    />
                    <textarea 
                        placeholder="Add a note"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
                
            </div>
        );
    }
}