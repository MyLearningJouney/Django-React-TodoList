import { useState } from 'react'
import CreateSvg from '../../Svg/FeaturesSvg/CreateSvg/CreateSvg'
import DeleteSvg from '../../Svg/FeaturesSvg/DeleteSvg/DeleteSvg'
import ReadSvg from '../../Svg/FeaturesSvg/ReadSvg/ReadSvg'
import SquareSvg from '../../Svg/FeaturesSvg/SquareSvg/SquareSvg'
import UpdateSvg from '../../Svg/FeaturesSvg/UpdateSvg/UpdateSvg'
import style from '../Features/Features.module.scss'


interface Props {
    event: React.MouseEvent<HTMLDivElement, MouseEvent>;
    position:number
}

function Features () {

    const [position,setPosition] = useState(1)

    function handleClick ({event,position}:Props) {
        event.preventDefault()
        setPosition(position)
    }

    const svgRender = (position:Number) => {
        switch(position){
            default:
                return <CreateSvg />
            case 2:
                return <ReadSvg/>
            case 3:
                return <UpdateSvg />
            case 4:
                return <DeleteSvg/>
        }
    }
    return (
        <div className={style.container}>
            <h1 className={style.title}>Features</h1>
            <h4 className={style.description}> Awesome features to boost your productivity!</h4>
            <div className={style.mainContainer}>
                <div className={style.leftColumn}>
                    <div className={style.featuresContainer} onClick={event => handleClick({event,position:1})}>
                        <h1 className={`${style.featuresNumber} ${position === 1 ? style.active : ''}`}>1</h1>
                        <h1 className={style.featuresTitle}>Create</h1>
                        <p className={style.featuresDescription}>Create your tasks to keep your productivity up!</p>
                    </div>
                    <div className={style.featuresContainer} onClick={event => handleClick({event,position:2})}>
                        <h1 className={`${style.featuresNumber} ${position === 2 ? style.active : ''}`}>2</h1>
                        <h1 className={style.featuresTitle}>Read</h1>
                        <p className={style.featuresDescription}>Retrieve your tasks from our database!</p>
                    </div>
                </div>
                <div className={style.centerColumn}>
                    <div className={style.svgContainer} key={position}>
                        <SquareSvg />
                        <div className={style.animatedSvg}>
                            {svgRender(position)}
                        </div>
                    </div>
                </div>
                <div className={style.rightColumn}>
                    <div className={style.featuresContainer} onClick={event => handleClick({event,position:3})}>
                        <h1 className={`${style.featuresNumber} ${position === 3 ? style.active : ''}`}>3</h1>
                        <h1 className={style.featuresTitle}>Update</h1>
                        <p className={style.featuresDescription}>Edit your tasks whenever you need!</p>
                    </div>
                    <div className={style.featuresContainer} onClick={event => handleClick({event,position:4})}>
                        <h1 className={`${style.featuresNumber} ${position === 4 ? style.active : ''}`}>4</h1>
                        <h1 className={style.featuresTitle}>Delete</h1>
                        <p className={style.featuresDescription}>Delete your tasks every time you want it!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
