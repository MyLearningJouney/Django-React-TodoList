import { SetStateAction } from "react"
import handleDisable from "./handleDisable"


interface Props {
    setPassword: React.Dispatch<SetStateAction<string>>,
    event: React.ChangeEvent<HTMLInputElement>
    validatePassword: string,
    username: string
    setIsDisable: React.Dispatch<SetStateAction<boolean>>,
    setHaveLetter: React.Dispatch<SetStateAction<boolean>>,
    sethaveCapital: React.Dispatch<SetStateAction<boolean>>,
    sethaveNumber: React.Dispatch<SetStateAction<boolean>>,
    setHaveLength: React.Dispatch<SetStateAction<boolean>>
}


function handlePassword({setPassword,event,validatePassword,username,setIsDisable, setHaveLetter, sethaveCapital, sethaveNumber,setHaveLength}:Props){
    event.preventDefault()
    const password = event.target.value;
    setPassword?.(password)
    handleDisable({validatePassword, password, username, setIsDisable, setHaveLetter, sethaveCapital, sethaveNumber,setHaveLength})
  };

  export default handlePassword