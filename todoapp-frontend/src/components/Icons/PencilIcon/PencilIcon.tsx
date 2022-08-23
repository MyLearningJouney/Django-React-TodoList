import React from 'react';
import style from '../PencilIcon/PencilIcon.module.scss'


interface Props {

    type?:"todolist" | "hide" | undefined
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void)
}

function PencilIcon ( {type, onClick} : Props ){
    if(type === "todolist"){
        return (
            <i className={`fa-solid fa-pencil ${style.listItemPencilIcon}`} onClick={onClick}/>
        )
    }
    if(type === "hide"){
        return (
            <i className={`fa-solid fa-pencil ${style.hide}`}/>
        )
    }
    else{
        return (
            <i className={"fa-solid fa-pencil"}/>
        )
    }
}


export default PencilIcon