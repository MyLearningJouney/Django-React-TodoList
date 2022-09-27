import { SetStateAction } from "react"


interface Props {
    setIsDisable: React.Dispatch<SetStateAction<boolean>>,
    validatePassword: string
    username: string
    password: string
    setHaveLetter: React.Dispatch<SetStateAction<boolean>>,
    sethaveCapital: React.Dispatch<SetStateAction<boolean>>,
    sethaveNumber: React.Dispatch<SetStateAction<boolean>>,
    setHaveLength: React.Dispatch<SetStateAction<boolean>>
}


function handleDisable({validatePassword, password, username, setIsDisable,setHaveLetter, sethaveCapital, sethaveNumber,setHaveLength}:Props){
    
    const letter = new RegExp(/([aA-zZ])/g)
    const capital = new RegExp(/([A-Z])/g)
    const number = new RegExp(/([0-9])/g)

    if(password.match(letter)){
        setHaveLetter(true)
    }else{
        setHaveLetter(false)
    }
    if(password.match(capital)){
        sethaveCapital(true)
    }else{
        sethaveCapital(false)
    }
    if(password.match(number)){
        sethaveNumber(true)
    }else{
        sethaveNumber(false)
    }
    if(password.length >= 8){
        setHaveLength(true)
    }else{
        setHaveLength(false)
    }
    if( password.match(letter) && 
        password.match(capital) && 
        password.match(number) &&
        password.length >= 8 &&
        validatePassword === password && 
        username.length > 2)
    {
        setIsDisable(false)

    }else{

        setIsDisable(true)
    }
  };

  export default handleDisable