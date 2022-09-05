function DateFormatDB(date:string){

    const regex = new RegExp(/((0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]){1}/g)
    const time =  String(date.match(regex))
    const day = date.substring(0,2)
    const month = date.substring(3,5)
    const year = date.substring(6,10)
    const hour = time.substring(0,2)
    const minuts = time.substring(3,5)


    return `${year}-${month}-${day} ${hour}:${minuts}`
    
    }

export default DateFormatDB