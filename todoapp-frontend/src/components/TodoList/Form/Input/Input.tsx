import { SetStateAction } from 'react'
import style from '../Input/Input.module.scss'

interface Props {
    type:string,
    name:string,
    placeholder:string,
    setActivity?: React.Dispatch<SetStateAction<string>>,
}

function Input({type, name, placeholder, setActivity}: Props){

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const activity = event.target.value;
        setActivity?.(activity)
      };

    return (
        <input
        type={type}
        className={style.activityInput}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
        />
    )
}

export default Input
