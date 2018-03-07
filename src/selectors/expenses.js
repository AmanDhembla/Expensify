import moment from 'moment';

export default (expenses,{category,text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        return ( 
            (startDate ? startDate.isSameOrBefore(moment(expense.createdAt),'day') : true) &&
            (endDate ? endDate.isSameOrAfter(moment(expense.createdAt),'day') : true) &&
            (expense.description.toLowerCase().includes(text.toLowerCase())) &&
            (expense.category.toLowerCase().includes(category.toLowerCase()))
        ) 
        }).sort((a,b)=>{
            if(sortBy=="date"){
                return a.createdAt >b.createdAt ? 1: -1;
            }
            else if(sortBy=="Amount"){
                return a.amount < b.amount ? 1 : -1;
            }
    });
}