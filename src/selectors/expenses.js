export default (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        console.log(expense);
        return ( expense.description.toLowerCase().includes(text.toLowerCase()))
        }).sort((a,b)=>{
            if(sortBy=="date"){
                return a.createdAt >b.createdAt ? 1: -1;
            }
            else if(sortBy=="Amount"){
                return a.amount < b.amount ? 1 : -1;
            }
    });
}