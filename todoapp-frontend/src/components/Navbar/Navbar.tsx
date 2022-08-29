import React, { SetStateAction, useState } from 'react';
import style from '../Navbar/Navbar.module.scss'
import { Route, Link } from 'react-router-dom';

interface Props {
    setLoginModalIsOpen: React.Dispatch<SetStateAction<boolean>>,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

function Navbar ({setLoginModalIsOpen, onClick} :Props){
    
    const user = null;
        return (
            <header className={style.navheader}>
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
                                <li><Link className={style.signButtons} to={"/home"}>Log out {(user)}</Link></li>
                            </ul>
                        ) : (
                            <ul className={style.buttonsList}>
                                <li><Link className={style.signButtons} to={"/signup"} onClick={() => setLoginModalIsOpen(true)}>Sign up</Link></li>
                                <li><Link className={style.signButtons} to={"/signin"}> Sign in </Link></li>
                            </ul>
                        )}
                    </div>
                </nav>
            </header>
        )
    }

export default Navbar

//onClick={event => ({event,handleLogin})}

//function handleLogin(event: React.FormEvent<HTMLFormElement>){
//    event.preventDefault(),
//    setLoginModalIsOpen(true)
//}