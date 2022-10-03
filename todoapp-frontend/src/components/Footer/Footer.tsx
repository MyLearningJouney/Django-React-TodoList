import React from 'react';
import style from '../Footer/Footer.module.scss'
import { Link } from 'react-router-dom';

function Footer (){
    return (
        <footer>
            <div className={style.footerWrapper}>
                <div className={style.firstColumn}>
                    <div className={style.logo}>
                        <p>Logo</p>
                    </div>
                </div>
                <div className={style.secondColumn}>
                    <nav className={style.navigation}>
                        <Link className={style.navigationTitle} to={"/"}>Navigation</Link>
                        <div className={style.navigationWrapper}>
                            <ul className={style.navigationlist}>
                                <li><Link className={style.navLink} to={"/home"}>Home</Link></li>
                                <li><Link className={style.navLink} to={"/about"}>About</Link></li>
                                <li><Link className={style.navLink} to={"/features"}>Features</Link></li>
                                <li><Link className={style.navLink} to={"/contact"}>Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className={style.thirdColumn}>
                    <nav className={style.navigationTitle}>
                        <Link className={style.logo} to={"/"}>Navigation</Link>
                        <div className={style.navigationWrapper}>
                            <ul className={style.navigationlist}>
                                <li><Link className={style.navLink} to={"/home"}>Home</Link></li>
                                <li><Link className={style.navLink} to={"/about"}>About</Link></li>
                                <li><Link className={style.navLink} to={"/features"}>Features</Link></li>
                                <li><Link className={style.navLink} to={"/contact"}>Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <hr />
            <div className={style.footerInfos}>
                <p>This is not an official app. Developed only for coding practice propuse.</p>
                <p>Please feel free to give feedbacks! I will definitely appreciate it</p>
            </div>
        </footer>
    )
}

export default Footer