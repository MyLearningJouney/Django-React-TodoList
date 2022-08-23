import React from 'react';
import style from '../TrashIcon/TrashIcon.module.scss'

interface Props {

    type?:"todolist" | "hide" | undefined
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void)

}

function TrashIcon ( {type, onClick} : Props ){

    if(type === "todolist"){
        return (
            <i className={`fa-solid fa-trash ${style.listItemTrashIcon}`} onClick={onClick}/>
        )
    }
    if(type === "hide"){
        return (
            <i className={`fa-solid fa-trash ${style.hide}`}/>
        )
    }
    else{
        return (
            <i className={"fa-solid fa-trash"}/>
        )
    }
}

export default TrashIcon


