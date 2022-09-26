import { SetStateAction } from 'react';
import style from '../Homepage/Homepage.module.scss'
import DeleteSvg from '../Svg/FeaturesSvg/DeleteSvg/DeleteSvg';
import Home from '../Svg/FeaturesSvg/ReadSvg/ReadSvg';
import Features from './Features/Features';
import Hero from './Hero/Hero';

interface Props {
    setSignupModalIsOpen: React.Dispatch<SetStateAction<boolean>>,
}

function Homepage ({setSignupModalIsOpen}:Props) {

    return (
        <div className={style.homepage}>
            <section className={style.hero}>
                <div className={style.heroDiv}></div>
                <Hero               
                    setSignupModalIsOpen={setSignupModalIsOpen}
                />
            </section>
            <section className={style.features}>
                <Features />
            </section>
            <section className={style.about}>
                <DeleteSvg />
            </section>
            <section className={style.contact}>
                <Home />
            </section>
        </div>
    )
}

export default Homepage