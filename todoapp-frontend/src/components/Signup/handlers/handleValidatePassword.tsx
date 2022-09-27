import { SetStateAction } from "react"
import handleDisable from "./handleDisable"


interface Props {
    setValidatePassword: React.Dispatch<SetStateAction<string>>
    password:string
    event: React.ChangeEvent<HTMLInputElement>
    validatePassword: string,
    username: string
    setIsDisable: React.Dispatch<SetStateAction<boolean>>,
    setHaveLetter: React.Dispatch<SetStateAction<boolean>>,
    sethaveCapital: React.Dispatch<SetStateAction<boolean>>,
    sethaveNumber: React.Dispatch<SetStateAction<boolean>>,
    setHaveLength: React.Dispatch<SetStateAction<boolean>>
}


function handleValidatePassword({setValidatePassword,event,password,username,setIsDisable, setHaveLetter, sethaveCapital, sethaveNumber,setHaveLength}:Props){
    event.preventDefault()
    const validatePassword = event.target.value;
    setValidatePassword(validatePassword)
    handleDisable({validatePassword, password, username, setIsDisable,setHaveLetter, sethaveCapital, sethaveNumber,setHaveLength})
  };


  export default handleValidatePassword