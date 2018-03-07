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
            category: props.expense? props.expense.category : '',
            note: props.expense? props.expense.note : '',
            amount: props.expense? props.expense.amount.toString() : '',
            createdAt:props.expense? moment(props.expense.createdAt) : moment(),
            focused: false, 
            error:""
        };
    }
    
    onCategoryChange =(e)=>{
        const cat=e.target.value;
        this.setState(()=>{
            return {
                category : cat
            }
        })
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
                category: this.state.category,
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note:this.state.note
            });
        }
    }
    render(){
        return (
            <div className="formcontainer">
            <div className="expenseform__error">
                    {this.state.error && <p>{this.state.error}</p>}
            </div>    
            <form onSubmit={this.onSubmit}>

                    <select required className="listfilters__select" 
                        value={this.state.category} 
                        onChange={this.onCategoryChange}
                    >
                        <option value="">Choose Category</option>
                        <option value="Food">Food</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Vehicle">Vehicle</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>

                    <input className="formcontainer__content" type="text" placeholder="Category/Description" 
                        autoFocus 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange}
                    />
                    <input className="formcontainer__content" type="text" 
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
                        className="formcontainer__content"
                        placeholder="Add a note(Optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button className="expenseform__button">Save Expense</button>
                </form>
                
                
            </div>
        );
    }
}