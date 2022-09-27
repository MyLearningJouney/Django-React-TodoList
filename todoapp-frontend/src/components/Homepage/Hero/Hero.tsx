import { SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import HeroSvg from '../../Svg/HeroSvg/HeroSvg'
import style from '../Hero/Hero.module.scss'

//Undraw Chore//
interface Props {
    setSignupModalIsOpen: React.Dispatch<SetStateAction<boolean>>,
}

function Hero ({setSignupModalIsOpen}:Props) {

    return (
        <div className={style.container}>
            <div className={style.textWrapper}>
                <div className={style.titleAnimated}>
                    <div className={style.message}>
                        <div className={style.word1}>AWESOME</div>
                        <div className={style.word2}>FANTASTIC</div>
                        <div className={style.word3}>GORGEOUS</div>
                    </div>
                </div>
                <div className={style.titleFixed}>
                    <h1>to do list.</h1>
                    <h3>keep track of your objectives!</h3>
                </div>
                <a href="/">
                    <Link className={style.signUpButton} to={""} onClick={() => setSignupModalIsOpen(true)}>Sign up</Link>
                </a>
            </div>
            <div className={style.svgWrapper}>
                <HeroSvg />
            </div>
        </div>
    )
}

export default Hero