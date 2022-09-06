import { SetStateAction } from "react"


interface Props {
    setUsername: React.Dispatch<SetStateAction<string>>
    event: React.ChangeEvent<HTMLInputElement>
}


function handleUsername({setUsername,event}:Props){
    event.preventDefault()
    const user = event.target.value;
    setUsername?.(user)
  };


  export default handleUsername