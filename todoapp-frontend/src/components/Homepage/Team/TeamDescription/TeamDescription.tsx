import style from '../TeamDescription/TeamDescription.module.scss'
import ceoPhoto from '../../../../assets/img/CEO.png'
import ctoPhoto from '../../../../assets/img/CTO.png'
import cmoPhoto from '../../../../assets/img/CMO.png'
import TeamSvg from '../../../Svg/TeamSvg/TeamSvg'
import { SetStateAction} from 'react'


interface Props {
    slider: number
    setMoveSlider: React.Dispatch<SetStateAction<number>>

}

function TeamDescription ({slider}:Props) {
    
    switch(slider){
        case 1:
        return (
            <div className={style.mainSection} onAnimationEnd={() => {}}>
                <div className={style.imgContainer}>
                    <div className={style.imgWrapper}>
                        <TeamSvg />
                        <img src={cmoPhoto} width="100%" height="100%" alt="ceo" />
                    </div>
                </div>
                <div className={style.teamDescription}>
                    <h1 className={style.name}>Danilo K. Packer</h1>
                    <h4 className={style.position}>Chief Marketing Officer</h4>
                    <div className={style.social}>
                        <a href="https://github.com/MyLearningJouney/Django-React-TodoList">
                            <i className={`fa-brands fa-linkedin fa-2xl ${style.icons}`}></i>
                        </a>
                        <a href="https://www.linkedin.com/in/danilopacker/">
                            <i className={`fa-brands fa-github fa-2xl ${style.icons}`}></i>
                        </a>
                    </div>
                </div>
            </div>
        )
        case 2:
            return (
                <div className={style.mainSection}>
                    <div className={style.imgContainer}>
                        <div className={style.imgWrapper}>
                            <TeamSvg />
                            <img src={ceoPhoto} width="100%" height="100%" alt="ceo" />
                        </div>
                    </div>
                    <div className={style.teamDescription}>
                        <h1 className={style.name}>Danilo K. P.</h1>
                        <h4 className={style.position}>Chief Executive Officer</h4>
                        <div className={style.social}>
                            <a href="https://github.com/MyLearningJouney/Django-React-TodoList">
                                <i className={`fa-brands fa-linkedin fa-2xl ${style.icons}`}></i>
                            </a>
                            <a href="https://www.linkedin.com/in/danilopacker/">
                                <i className={`fa-brands fa-github fa-2xl ${style.icons}`}></i>
                            </a>
                        </div>
                    </div>
                </div>
            )
        default:
        return  (            
            <div className={style.mainSection}>
                <div className={style.imgContainer}>
                    <div className={style.imgWrapper}>
                        <TeamSvg />
                        <img src={ctoPhoto} width="100%" height="100%" alt="ceo" />
                    </div>
                </div>
                <div className={style.teamDescription}>
                    <h1 className={style.name}>Danilo Packer</h1>
                    <h4 className={style.position}>Chief Technical Officer</h4>
                    <div className={style.social}>
                        <a href="https://github.com/MyLearningJouney/Django-React-TodoList">
                            <i className={`fa-brands fa-linkedin fa-2xl ${style.icons}`}></i>
                        </a>
                        <a href="https://www.linkedin.com/in/danilopacker/">
                            <i className={`fa-brands fa-github fa-2xl ${style.icons}`}></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }   

}
    
export default TeamDescription

