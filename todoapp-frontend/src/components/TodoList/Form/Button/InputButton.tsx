import React from 'react';
import style from '../Button/InputButton.module.scss'

interface Props {
    type?: "button" | "submit" | "reset" | undefined, 
} 

function InputButton ({ type }: Props){
    return (
        <button className={style.addBtn} type={type}>
            <i className={`${style.addBtnIcon} fa-solid fa-check`}></i>
        </button>
    )
}

export default InputButton