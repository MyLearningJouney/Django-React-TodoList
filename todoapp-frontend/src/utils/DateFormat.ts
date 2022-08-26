
function DateFormat(date:Date){
    
    return  `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - 
    ${date.toLocaleString('en-us', {  weekday: 'long' })} at 
    ${date.getHours()}: ${date.getMinutes()}`
    }


export default DateFormat

