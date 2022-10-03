import { SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import style from '../Cta/Cta.module.scss'

//Undraw Chore//
interface Props {
    setSignupModalIsOpen: React.Dispatch<SetStateAction<boolean>>,
}

function Cta ({setSignupModalIsOpen}:Props) {

    return (
        <div className={style.container}>
            <h1 className={style.title}>Give it a try!</h1>
            <h4 className={style.description}> Register for free and see your productivity reach the space!</h4>
            <a href="/">
                <Link className={style.signUpButton} to={""} onClick={() => setSignupModalIsOpen(true)}>Sign up</Link>
            </a>
        </div>
    )
}

export default Cta