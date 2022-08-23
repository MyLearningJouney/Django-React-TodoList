import React from 'react';
import style from '../CancelIcon/CancelIcon.module.scss'

interface Props {

    type?:"todolist" | undefined,
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void)
}

function CancelIcon ( {type, onClick} : Props ){
    return (
        <i className={type === "todolist" ? `fa-solid fa-x ${style.ListItemCancelIcon}`  : "fa-solid fa-x"} onClick={onClick}/>
    )
}

export default CancelIcon


