import DjangoSvg from '../../Svg/AboutSvg/DjangoSvg/DjangoSvg'
import ReactSvg from '../../Svg/AboutSvg/ReactSvg/ReactSvg'
import SqliteSvg from '../../Svg/AboutSvg/SqliteSvg/SqliteSvg'
import TypescriptSvg from '../../Svg/AboutSvg/TypescriptSvg/TypescripSvg'
import style from '../About/About.module.scss'


function About () {

    return (
        <div className={style.container}>
            <h1 className={style.title}>About</h1>
            <h4 className={style.description}> Made with love with fantastic Technologies!</h4>
            <div className={style.listWrapper}>
                <ul className={style.techList}>
                    <li className={style.list}>
                    <div>
                        <div className={style.listContainer}>
                            <div className={style.svgContainer}>
                                <ReactSvg />
                                <h4 className={style.svgDescription}> React </h4>
                            </div>
                        </div>
                    </div>
                    </li>
                    <li className={style.list}>
                        <div className={style.listContainer}>
                            <div className={style.svgContainer}>
                                <TypescriptSvg />
                                <h4 className={style.svgDescription}> Typescript </h4>
                            </div>
                        </div>
                    </li>
                    <li className={style.list}>
                        <div className={style.listContainer}>
                            <div className={style.svgContainer}>
                                <DjangoSvg />
                                <h4 className={style.svgDescription}> Django </h4>
                            </div>
                        </div>
                    </li>
                    <li className={style.list}>
                        <div className={style.listContainer}>
                            <div className={style.svgContainer}>
                                <SqliteSvg />
                                <h4 className={style.svgDescription}> Sqlite </h4>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About