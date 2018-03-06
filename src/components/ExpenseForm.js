import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            description: props.expense? props.expense.description : '',
            note: props.expense? props.expense.note : '',
            amount: props.expense? props.expense.amount.toString() : '',
            createdAt:props.expense? moment(props.expense.createdAt) : moment(),
            focused: false, 
            error:""
        };
    }
    
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
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>{
                return {
                    amount: amount
                }
            });
         }
    }
    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>{
                return {
                    createdAt: createdAt
                }
            })
        }
        
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>{
                return {
                    error: "Please provide description and amount "
                }
            })
        }else{
            this.setState(()=>{
                return {
                    error: ""
                }
            })
            console.log(this.state);
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note:this.state.note
            });
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Category/Description" 
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
                        placeholder="Add a note(Optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}