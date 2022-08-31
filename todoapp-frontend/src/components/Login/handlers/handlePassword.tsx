import { SetStateAction } from "react"


interface Props {
    setPassword: React.Dispatch<SetStateAction<string>>
    event: React.ChangeEvent<HTMLInputElement>
}


function handlePassword({setPassword,event}:Props){
    event.preventDefault()
    const password = event.target.value;
    setPassword?.(password)
  };


  export default handlePassword