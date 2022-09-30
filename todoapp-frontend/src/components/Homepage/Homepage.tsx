import { SetStateAction } from 'react';
import style from '../Homepage/Homepage.module.scss'
import About from './About/About';
import Features from './Features/Features';
import Hero from './Hero/Hero';
import Team from './Team/Team';

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
            <section className={style.about}>
                <About />
            </section>
            <section className={style.features}>
                <Features />
            </section>
            <section className={style.team}>
                <Team />
            </section>
            <section className={style.team}>
                <div>
                    <h1> Diiiiiiiiiv</h1>
                </div>
            </section>
        </div>
    )
}

export default Homepage