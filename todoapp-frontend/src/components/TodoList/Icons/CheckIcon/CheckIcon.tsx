import React from 'react';
import style from '../CheckIcon/CheckIcon.module.scss'

interface Props {

    type?:"todolist" | undefined,
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void)
}


function CheckIcon ( {type, onClick} : Props ){
    return (
        <i className={type === "todolist" ? `fa-solid fa-check ${style.listItemCheckIcon}`  : "fa-solid fa-check"} onClick={onClick}/>
    )
}

export default CheckIcon