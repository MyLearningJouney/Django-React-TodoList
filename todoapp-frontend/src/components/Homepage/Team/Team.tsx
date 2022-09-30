import { useState } from 'react';
import style from '../Team/Team.module.scss'
import TeamDescription from './TeamDescription/TeamDescription'


interface Props {
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
    slider: number
}

function Team () {

    const [slider, setSlider] = useState(0);
    const [moveSlider, setMoveSlider] = useState(0)


    function handleBack({event,slider}: Props) {
        event.preventDefault()
        if(slider > 0){
            setSlider(slider - 1)
            setMoveSlider(-1)
            setTimeout(() => {
                setMoveSlider(0)
            },
            1000)

        }else{
            setSlider(2)
            setMoveSlider(-1)
            setTimeout(() => {
                setMoveSlider(0)
            },
            1000)
        }
    }

    function handleFoward({event,slider}: Props) {
        event.preventDefault()
        if(slider < 2){
            setSlider(slider + 1)
            setMoveSlider(1)
            setTimeout(() => {
                setMoveSlider(0)
            },
            1000)
        }else{
            setSlider(0)
            setMoveSlider(1)
            setTimeout(() => {
                setMoveSlider(0)
            },
            1000)
        }
    }
    console.log(moveSlider)
    return (
        <div className={style.container}>
            <div className={style.sectionHeader}>
                <h1 className={style.title}>Our Team</h1>
                <h4 className={style.description}> Meet our Gorgeous Team!</h4>
            </div>
            <div className={style.mainWrapper}>
                <div className={moveSlider === 0 ? style.sliderButton : style.sliderButtonDisable} onClick={event => handleBack({event,slider})}> 
                    <i className={`fa-solid fa-chevron-left`} id={style.icon}/>  
                </div>
                <div className={moveSlider === 0 ? style.sliderContent : `${moveSlider > 0 ? style.sliderContentFoward : style.sliderContentBack}`}>
                    <TeamDescription slider={slider} setMoveSlider={setMoveSlider}/>
                </div>
                <div className={moveSlider === 0 ? style.sliderButton : style.sliderButtonDisable} onClick={event => handleFoward({event,slider})}> 
                    <i className={`fa-solid fa-chevron-right`} id={style.icon}/> 
                </div>
            </div>
        </div>
    )
}

export default Team