import React, { SetStateAction } from 'react';
import style from '../Navbar/Navbar.module.scss'
import { Link } from 'react-router-dom';
import { User } from '../../types/User';

interface Props {
    setLoginModalIsOpen: React.Dispatch<SetStateAction<boolean>>,
    setSignupModalIsOpen: React.Dispatch<SetStateAction<boolean>>,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
    setUser: React.Dispatch<SetStateAction<any>>
    user?: User | null
}

function Navbar ({setLoginModalIsOpen, setUser, user,setSignupModalIsOpen} :Props){

    function logoutBtn(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault()
        logout()
    }

    async function logout(){
        setUser(null);
    }


    return(
        <div className={style.navheader}>
            <nav className={style.navigation}>
                <a className={style.logo} href={"#hero"}>Hello!</a>
                {user ? (
                    <>
                    <div className={style.navigationWrapper}></div>
                    <div className={style.buttonsWrapper}>
                        <ul className={style.buttonsList}>
                            <li><Link className={style.signButtons} to={"/home"} onClick={event => logoutBtn(event)}>Logout (<>{user.username}</>)</Link></li>
                        </ul>
                    </div>
                    </>
                ) : (
                    <>
                    <div className={style.navigationWrapper}>
                        <ul className={style.navigationlist}>
                            <li><a className={style.navLink} href={"#hero"}>Home</a></li>
                            <li><a className={style.navLink} href={"#about"}>About</a></li>
                            <li><a className={style.navLink} href={"#features"}>Features</a></li>
                            <li><a className={style.navLink} href={"#team"}>Team</a></li>
                            <li><a className={style.navLink} href={"#contact"}>Contact</a></li>
                        </ul>
                    </div>
                    <div className={style.buttonsWrapper}>
                        <ul className={style.buttonsList}>
                            <li><Link className={style.loginButton} to={""} onClick={() => setLoginModalIsOpen(true)}>Log in </Link></li>
                            <li><Link className={style.signInButton} to={""} onClick={() => setSignupModalIsOpen(true)}>Sign up</Link></li>
                        </ul>
                    </div>
                    </>
                )}
            </nav>
        </div>
    )
}


/*
    return (
        <div className={style.navheader}>
            <nav className={style.navigation}>
                <Link className={style.logo} to={"/"}>Hello!</Link>
                <div className={style.navigationWrapper}>
                    <ul className={style.navigationlist}>
                        <li><Link className={style.navLink} to={"/home"}>Home</Link></li>
                        <li><Link className={style.navLink} to={"/about"}>About</Link></li>
                        <li><Link className={style.navLink} to={"/features"}>Features</Link></li>
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
                            <li><Link className={style.loginButton} to={""} onClick={() => setLoginModalIsOpen(true)}>Log in </Link></li>
                            <li><Link className={style.signInButton} to={""} onClick={() => setSignupModalIsOpen(true)}>Sign up</Link></li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    )
}
*/




export default Navbar