import { SetStateAction } from "react"
import handleDisable from "./handleDisable"


interface Props {
    setUsername: React.Dispatch<SetStateAction<string>>
    event: React.ChangeEvent<HTMLInputElement>
    password:string
    validatePassword: string,
    setIsDisable: React.Dispatch<SetStateAction<boolean>>,
    setHaveLetter: React.Dispatch<SetStateAction<boolean>>,
    sethaveCapital: React.Dispatch<SetStateAction<boolean>>,
    sethaveNumber: React.Dispatch<SetStateAction<boolean>>,
    setHaveLength: React.Dispatch<SetStateAction<boolean>>
}


function handleUsername({setUsername,event,validatePassword, password, setIsDisable, setHaveLetter, sethaveCapital, sethaveNumber,setHaveLength}:Props){
    event.preventDefault()
    const username = event.target.value;
    setUsername(username)
    handleDisable({validatePassword, password, username, setIsDisable, setHaveLetter, sethaveCapital, sethaveNumber,setHaveLength})

  };


  export default handleUsername