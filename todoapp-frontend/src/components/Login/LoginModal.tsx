import React, { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../Login/LoginModal.module.scss'
import handleUsername  from '../Login/handlers/handleUsername' 
import handlePassword from './handlers/handlePassword';
import TodoAppDataService from '../../services/TodoAppDataService'
import { User } from '../../types/User';
import WaveDown from '../Svg/WaveDown/WaveDown';
import WaveUp from '../Svg/WaveUp/WaveUp';

interface Props {
    setLoginModalIsOpen: React.Dispatch<SetStateAction<boolean>>,
    setUser: React.Dispatch<SetStateAction<any>>
    setToken: React.Dispatch<SetStateAction<any>>
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void)
    user: User | null
}

function LoginModal ({user, setUser, setToken, setLoginModalIsOpen}: Props){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [usernameLabel, setUsernameLabel] = useState(false)
    const [passwordLabel, setPasswordLabel] = useState(false)

    function loginBtn(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault()
        setLoginModalIsOpen(false)
        user = {username:username,password:password}
        login(user)
    }

    async function login(user:User){
        TodoAppDataService.signin(user)
            .then(response =>{
                setToken(response.data.token);
                const newUser = {...user, userid:response.data.userid}
                setUser(newUser);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(newUser));
                setError('');
                })
            .catch( e =>{
                console.log("ERRRRRRRRRRRRRRRRRRRRRRRROU")
                console.log('login', e);
                setError(e.toString());
                console.log(error)
            });
    }
    

    return (
        <>
        <div className={style.darkBG} onClick={() => setLoginModalIsOpen(false)} />
        <div className={style.centered}>
            <div className={style.modal}>
            <button className={style.closeBtn} onClick={() => setLoginModalIsOpen(false)}>
                X
            </button>
            <WaveUp />
            <div className={style.modalHeader}>
                <h5 className={style.heading}>Login</h5>
            </div>
            <div>
                <p className={style.headingParagraph}>
                    Welcome Back! 
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
                        onChange={event => handleUsername({event, setUsername})}
                        onFocus={() => setUsernameLabel(true)}
                        onBlur={() => setUsernameLabel(false)}
                        autoComplete="off"
                        />
                    <label className={passwordLabel ? style.show: style.hide}>Password</label>
                    <input 
                        type={'password'} 
                        name={'activityInput'} 
                        placeholder={'Password'} 
                        onChange={event => handlePassword({event, setPassword})}
                        onFocus={() => setPasswordLabel(true)}
                        onBlur={() => setPasswordLabel(false)}
                        autoComplete="off"
                        />
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
                <button className={style.deleteBtn} onClick={event => loginBtn(event)}>
                    <Link to={""}>Log in</Link>
                </button>
                </div>
            </div>
            <WaveDown />
            </div>
        </div>
        </>
    );
}

export default LoginModal



