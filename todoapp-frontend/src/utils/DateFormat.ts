
function DateFormat(date:Date){

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth()).padStart(2, '0') 
    return  `${day}/${month}/${date.getFullYear()} - ${date.toLocaleString('en-us', {  weekday: 'long' })} at ${date.getHours()}:${date.getMinutes()}`
    }

export default DateFormat




//return  `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - 
//${date.toLocaleString('en-us', {  weekday: 'long' })} at 
//${date.getHours()}: ${date.getMinutes()}`
//}