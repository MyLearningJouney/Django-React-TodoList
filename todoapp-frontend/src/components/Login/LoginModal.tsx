import React, { SetStateAction } from 'react';
import { Route, Link } from 'react-router-dom';
import style from '../Login/LoginModal.module.scss'

interface Props {
    setLoginModalIsOpen: React.Dispatch<SetStateAction<boolean>>
} 


function LoginModal ({setLoginModalIsOpen}: Props){
        return (
            <>
            <div className={style.darkBG} onClick={() => setLoginModalIsOpen(false)} />
            <div className={style.centered}>
                <div className={style.modal}>
                <button className={style.closeBtn} onClick={() => setLoginModalIsOpen(false)}>
                    X
                </button>
                <div className={style.modalHeader}>
                    <h5 className={style.heading}>Login</h5>
                </div>
                <div className={style.modalContent}>
                <form className={style.inputForm}>
                    <div className={style.formContentWrapper}>
                        <label>Username</label>
                        <input type={'text'} name={'activityInput'} placeholder={'Type your username'}/>
                        <label>Password</label>
                        <input type={'text'} name={'activityInput'} placeholder={'Type your password'}/>
                    </div>
                </form>                
                </div>
                <div className={style.modalActions}>
                    <div className={style.actionsContainer}>
                    <button
                        className={style.cancelBtn}
                        onClick={() => setLoginModalIsOpen(false)}
                    >
                        Cancel
                    </button>
                    <button className={style.deleteBtn} onClick={() => setLoginModalIsOpen(false)}>
                        Log in
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </>
        );
    }

export default LoginModal



