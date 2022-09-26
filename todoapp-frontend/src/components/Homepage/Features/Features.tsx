import CreateSvg from '../../Svg/FeaturesSvg/CreateSvg/CreateSvg'
import DeleteSvg from '../../Svg/FeaturesSvg/DeleteSvg/DeleteSvg'
import ReadSvg from '../../Svg/FeaturesSvg/ReadSvg/ReadSvg'
import UpdateSvg from '../../Svg/FeaturesSvg/UpdateSvg/UpdateSvg'
import style from '../Features/Features.module.scss'

function Features () {

    return (
        <div className={style.container}>
            <h1 className={style.title}>FEATURES</h1>
            <h4 className={style.description}> Awesome features to boost your productivity!</h4>
            <div className={style.cardsWrapper}>
                <ul className={style.cardList}>
                    <li className={style.card}>
                        <div className={style.cardContainer}>
                            <h1 className={style.cardTitle}> C </h1>
                            <h4 className={style.cardDescription}> Create </h4>
                            <div className={style.svgContainer}>
                                <CreateSvg />
                            </div>
                        </div>
                    </li>
                    <li className={style.card}>
                        <div className={style.cardContainer}>
                            <h1 className={style.cardTitle}> R </h1>
                            <h4 className={style.cardDescription}> Read </h4>
                            <div className={style.svgContainer}>
                                <ReadSvg />
                            </div>
                        </div>
                    </li>
                    <li className={style.card}>
                        <div className={style.cardContainer}>
                            <h1 className={style.cardTitle}> U </h1>
                            <h4 className={style.cardDescription}> Update </h4>
                            <div className={style.svgContainer}>
                                <UpdateSvg />
                            </div>
                        </div>
                    </li>
                    <li className={style.card}>
                        <div className={style.cardContainer}>
                            <h1 className={style.cardTitle}> D </h1>
                            <h4 className={style.cardDescription}> Delete </h4>
                            <div className={style.svgContainer}>
                                <DeleteSvg />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Features