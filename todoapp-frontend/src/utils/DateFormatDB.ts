function DateFormatDB(date:string){

    const day = date.substring(0,2)
    const month = date.substring(3,5)
    const year = date.substring(6,10)
    const hour = date.substring(23,25)
    const minuts = date.substring(26,28)

    return `${year}-${month}-${day} ${hour}:${minuts}`
    
    }

export default DateFormatDB