import React, { SetStateAction, useState } from 'react';
import style from '../Navbar/Navbar.module.scss'
import { Route, Link } from 'react-router-dom';
import { User } from '../../types/User';

interface Props {
    setLoginModalIsOpen: React.Dispatch<SetStateAction<boolean>>,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
    setUser: React.Dispatch<SetStateAction<any>>
    user?: User | null
}

function Navbar ({setLoginModalIsOpen, setUser, user} :Props){

    function logoutBtn(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault()
        logout()
    }

    async function logout(){
        setUser(null);
    }

    return (
        <div className={style.navheader}>
            <nav className={style.navigation}>
                <Link className={style.logo} to={"/"}>Hello!</Link>
                <div className={style.navigationWrapper}>
                    <ul className={style.navigationlist}>
                        <li><Link className={style.navLink} to={"/home"}>Home</Link></li>
                        <li><Link className={style.navLink} to={"/about"}>About</Link></li>
                        <li><Link className={style.navLink} to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
                <div className={style.buttonsWrapper}>
                    { user ? (
                        <ul className={style.buttonsList}>
                            <li><Link className={style.signButtons} to={"/home"} onClick={event => logoutBtn(event)}>Logout (<>{user.username}</>)</Link></li>
                        </ul>
                    ) : (
                        <ul className={style.buttonsList}>
                            <li><Link className={style.signButtons} to={""} onClick={() => setLoginModalIsOpen(true)}>Sign up</Link></li>
                            <li><Link className={style.signButtons} to={""} onClick={() => setLoginModalIsOpen(true)}>Sign in </Link></li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar