import React, { SetStateAction, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import style from '../Signup/SignupModal.module.scss'
import TodoAppDataService from '../../services/TodoAppDataService'
import { User } from '../../types/User';
import handleValidatePassword from './handlers/handleValidatePassword';
import handlePassword from './handlers/handlePassword';
import handleUsername from './handlers/handleUsername';

interface Props {
    setSignupModalIsOpen: React.Dispatch<SetStateAction<boolean>>,
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void)
}

function SignupModal ({setSignupModalIsOpen}: Props){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validatePassword, setValidatePassword] = useState("");
    const [isDisable, setIsDisable] = useState(true)
    const [haveLetter, setHaveLetter] = useState(false)
    const [haveCapital, sethaveCapital] = useState(false)
    const [haveNumber, sethaveNumber] = useState(false)
    const [haveLength, setHaveLength] = useState(false)

    const [error, setError] = useState('');

    function signupBtn(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault()
        setSignupModalIsOpen(false)
        const user = {username:username,password:password}
        signup(user)
    }

    async function signup(user:User){
        TodoAppDataService.signup(user)
            .then(response =>{
                console.log(response)
                })
            .catch( e =>{
                console.log('signup', e);
                setError(e.toString());
            });
    }
    
    return (
        <>
        <div className={style.darkBG} onClick={() => setSignupModalIsOpen(false)} />
        <div className={style.centered}>
            <div className={style.modal}>
            <button className={style.closeBtn} onClick={() => setSignupModalIsOpen(false)}>
                X
            </button>
            <div className={style.modalHeader}>
                <h5 className={style.heading}>Register</h5>
            </div>
            <div className={style.validationWrapper}>
                <h5 className={style.validationTitle}>Password must contain the following:</h5>
                <div className={style.validationTextWrapper}>
                    <i className={haveLetter ? `fa-solid fa-check ${style.validationValidIcon}`  : `fa-solid fa-x ${style.validationInvalidlIcon}`}/>
                    <p id="letter" className={haveLetter ? style.valid : style.invalid}>A <b>lowercase</b> letter</p>
                </div>
                <div className={style.validationTextWrapper}>
                    <i className={haveCapital ? `fa-solid fa-check ${style.validationValidIcon}`  : `fa-solid fa-x ${style.validationInvalidlIcon}`}/>
                    <p id="capital" className={haveCapital ? style.valid : style.invalid}>A <b>capital (uppercase)</b> letter</p>
                </div>
                <div className={style.validationTextWrapper}>
                    <i className={haveNumber ? `fa-solid fa-check ${style.validationValidIcon}`  : `fa-solid fa-x ${style.validationInvalidlIcon}`}/>
                    <p id="number" className={haveNumber ? style.valid : style.invalid}>A <b>number</b></p>
                </div>
                <div className={style.validationTextWrapper}>
                    <i className={haveLength ? `fa-solid fa-check ${style.validationValidIcon}`  : `fa-solid fa-x ${style.validationInvalidlIcon}`}/>
                    <p id="length" className={haveLength ? style.valid : style.invalid}>Minimum <b>8 characters</b></p>
                </div>
            </div>
            <div className={style.modalContent}>      
            <form className={style.inputForm}>
                <div className={style.formContentWrapper}>
                    <label>Username</label>
                    <input 
                        type={'text'} 
                        name={'activityInput'} 
                        placeholder={'Type your username'} 
                        onChange={event => handleUsername({event, setUsername, password, validatePassword,setIsDisable, setHaveLetter, sethaveCapital, sethaveNumber,setHaveLength})}
                        required
                        />
                    <label>Password</label>
                    <input
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        type={'password'} 
                        name={'activityInput'}
                        placeholder={'Type your password'} 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        onChange={event => handlePassword({event, setPassword, setHaveLetter, sethaveCapital, sethaveNumber,setHaveLength, validatePassword, username, setIsDisable})}
                        required />
                    <label>Confirm your Password</label>
                    <input 
                        type={'password'}
                        name={'activityInput'} 
                        placeholder={'Repeat your password'}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        onChange={event => handleValidatePassword({event, setValidatePassword, password, validatePassword, username, setIsDisable, setHaveLetter, sethaveCapital, sethaveNumber,setHaveLength})}
                        required
                        />
                </div>
            </form>         
            </div>
            <div className={style.modalActions}>
                <div className={style.actionsContainer}>
                <button
                    className={style.cancelBtn}
                    onClick={() => setSignupModalIsOpen(false)}
                >
                    Cancel
                </button>
                <button 
                    className={isDisable ? style.signupBtnInactive : style.signupBtnActive} 
                    onClick={event => signupBtn(event)}
                    disabled={isDisable}
                >
                    Register
                </button>
                </div>
            </div>
            <div>
                <p>{username}</p>
                <p>{password}</p>
            </div>
            </div>
        </div>
        </>
    );
}

export default SignupModal



