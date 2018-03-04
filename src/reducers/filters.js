const filters={
    text: '',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined
}

export default (state=filters,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'Amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'Date'
            } 
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}