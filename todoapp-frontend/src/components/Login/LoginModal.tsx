import React, { SetStateAction, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import style from '../Login/LoginModal.module.scss'
import handleUsername  from '../Login/handlers/handleUsername' 
import handlePassword from './handlers/handlePassword';
import TodoAppDataService from '../../services/TodoAppDataService'
import { User } from '../../types/User';



interface Props {
    setLoginModalIsOpen: React.Dispatch<SetStateAction<boolean>>,
    setUser: React.Dispatch<SetStateAction<any>>
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void)
    user: User | null
}

function LoginModal ({user, setUser, setLoginModalIsOpen}: Props){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(null);
    const [error, setError] = useState('');

    function onClick(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault()
        setLoginModalIsOpen(false)
        user = {username:username,password:password}
        login(user)
        //const token = '03e3297c881f767f9f78b4c7e09f7972d915c5d2'
        //console.log(user)
        //test(token)
    }

    async function test(token:string){
        console.log("entrou no teste")
        TodoAppDataService.getAll(token)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log("ERRO")
                console.log(err)
            })
    }

    async function login(user:User){
        TodoAppDataService.signin(user)
            .then(response =>{
                setToken(response.data.token);
                setUser(user);
                console.log(user.username)
                console.log(response.data.token)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(user));
                setError('');
                })
            .catch( e =>{
                console.log("ERRRRRRRRRRRRRRRRRRRRRRRROU")
                console.log('login', e);
                setError(e.toString());
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
            <div className={style.modalHeader}>
                <h5 className={style.heading}>Login</h5>
            </div>
            <div className={style.modalContent}>
            <form className={style.inputForm}>
                <div className={style.formContentWrapper}>
                    <label>Username</label>
                    <input type={'text'} name={'activityInput'} placeholder={'Type your username'} onChange={event => handleUsername({event, setUsername})}/>
                    <label>Password</label>
                    <input type={'password'} name={'activityInput'} placeholder={'Type your password'} onChange={event => handlePassword({event, setPassword})}/>
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
                <button className={style.deleteBtn} onClick={event => onClick(event)}>
                    <Link to={""}>Log in</Link>
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

export default LoginModal



