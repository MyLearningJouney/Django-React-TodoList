import React, { SetStateAction, useState } from 'react';
import style from '../Signup/SignupModal.module.scss'
import TodoAppDataService from '../../services/TodoAppDataService'
import { User } from '../../types/User';
import handleValidatePassword from './handlers/handleValidatePassword';
import handlePassword from './handlers/handlePassword';
import handleUsername from './handlers/handleUsername';
import WaveUp from '../Svg/WaveUp/WaveUp';
import WaveDown from '../Svg/WaveDown/WaveDown';

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
    const [usernameLabel, setUsernameLabel] = useState(false)
    const [passwordLabel, setPasswordLabel] = useState(false)
    const [confirmPasswordLabel, setConfirmPasswordLabel] = useState(false)
    const [swing, setSwing] = useState(true)
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(true)


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
                console.log(error)
            });
    }

    function handleSwing (event: React.MouseEvent<HTMLDivElement, MouseEvent>){
        event.preventDefault()
        setSwing(false)
        setTimeout(() => { setSwing(true) }, 1000);

    }
    
    return (
        <>
        <div className={style.darkBG} onClick={() => setSignupModalIsOpen(false)} />
        <div className={style.centered}>
            <div className={style.modal}>
            <button className={style.closeBtn} onClick={() => setSignupModalIsOpen(false)}>
                X
            </button>
            <WaveUp />
            <div className={style.modalHeader}>
                <h5 className={style.heading}>Register</h5>
            </div>
            <div>
                <p className={style.headingParagraph}>
                    Join us now!
                </p>
            </div>
            <div className={style.modalContent}>      
            <form className={style.inputForm}>
                <div className={style.formContentWrapper}>
                    <label className={usernameLabel ? style.show: style.hide}>Username</label>
                    <input 
                        type={'text'} 
                        name={'activityInput'} 
                        placeholder={'Username'} 
                        onChange={event => handleUsername({event, setUsername, password, validatePassword,setIsDisable, setHaveLetter, sethaveCapital, sethaveNumber,setHaveLength})}
                        onFocus={() => setUsernameLabel(true)}
                        onBlur={() => setUsernameLabel(false)}
                        autoComplete="off"
                        required
                    />
                    <label className={passwordLabel ? style.show: style.hide}>Password</label>
                    <input
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        type={'Password'} 
                        name={'activityInput'}
                        placeholder={'Type your password'} 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        onChange={event => handlePassword({event, setPassword, setHaveLetter, sethaveCapital, sethaveNumber,setHaveLength, validatePassword, username, setIsDisable, setIsPasswordEmpty})}
                        onFocus={() => setPasswordLabel(true)}
                        onBlur={() => setPasswordLabel(false)}
                        autoComplete="off"
                        required 
                    />
                    <label className={confirmPasswordLabel ? style.show: style.hide}>Confirm Password</label>
                    <input 
                        type={'password'}
                        name={'activityInput'} 
                        placeholder={'Confirm your password'}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        onChange={event => handleValidatePassword({event, setValidatePassword, password, validatePassword, username, setIsDisable, setHaveLetter, sethaveCapital, sethaveNumber,setHaveLength})}
                        onFocus={() => setConfirmPasswordLabel(true)}
                        onBlur={() => setConfirmPasswordLabel(false)}
                        autoComplete="off"
                        required
                    />
                </div>
            </form>     
                <div className={style.validationWrapper}>
                    <h5 className={style.validationTitle}>Password must contain the following:</h5>
                    <div className={`${style.validationTextWrapper} ${haveLetter ? '' : `${isPasswordEmpty ? '' : `${swing ? '' : style.swing}`}`}`}>
                        <i className={`${isPasswordEmpty ? style.transparentIcon : `${haveLetter ? `fa-solid fa-check ${style.validationValidIcon}`  : `fa-solid fa-x ${style.validationInvalidlIcon}`}`}`}/>
                        <p id="letter" className={`${ isPasswordEmpty ? style.normal: `${haveLetter ? style.valid : style.invalid}`}`}>A <b>lowercase</b> letter</p>
                    </div>
                    <div className={`${style.validationTextWrapper} ${haveCapital ? '' : `${isPasswordEmpty ? '' : `${swing ? '' : style.swing}`}`}`}>
                        <i className={`${isPasswordEmpty ? style.transparentIcon : `${haveCapital ? `fa-solid fa-check ${style.validationValidIcon}`  : `fa-solid fa-x ${style.validationInvalidlIcon}`}`}`}/>
                        <p id="capital" className={`${ isPasswordEmpty ? style.normal: `${haveCapital ? style.valid : style.invalid}`}`}>A <b>capital (uppercase)</b> letter</p>
                    </div>
                    <div className={`${style.validationTextWrapper} ${haveNumber ? '' : `${isPasswordEmpty ? '' : `${swing ? '' : style.swing}`}`}`}>
                        <i className={`${isPasswordEmpty ? style.transparentIcon : `${haveNumber ? `fa-solid fa-check ${style.validationValidIcon}`  : `fa-solid fa-x ${style.validationInvalidlIcon}`}`}`}/>
                        <p id="number" className={`${ isPasswordEmpty ? style.normal: `${haveNumber ? style.valid : style.invalid}`}`}>A <b>number</b></p>
                    </div>
                    <div className={`${style.validationTextWrapper} ${haveLength ? '' : `${isPasswordEmpty ? '' : `${swing ? '' : style.swing}`}`}`}>
                        <i className={`${isPasswordEmpty ? style.transparentIcon : `${haveLength ? `fa-solid fa-check ${style.validationValidIcon}`  : `fa-solid fa-x ${style.validationInvalidlIcon}`}`}`}/>
                        <p id="length" className={`${ isPasswordEmpty ? style.normal: `${haveLength ? style.valid : style.invalid}`}`}>Minimum <b>8 characters</b></p>
                    </div>
                </div>    
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
                <div className={isDisable ? style.mask : style.hide} onClick={event => handleSwing(event)}></div>
            </div>
            <WaveDown />
            </div>
        </div>
        </>
    );
}

export default SignupModal



