import { SetStateAction } from 'react';
import style from '../Homepage/Homepage.module.scss'
import About from './About/About';
import Contact from './Contact/Contact';
import Cta from './Cta/Cta';
import Features from './Features/Features';
import Hero from './Hero/Hero';
import Team from './Team/Team';

interface Props {
    setSignupModalIsOpen: React.Dispatch<SetStateAction<boolean>>,
}

function Homepage ({setSignupModalIsOpen}:Props) {

    return (
        <div className={style.homepage}>
            <section className={style.hero} id={'hero'}>
                <div className={style.heroDiv}></div>
                <Hero               
                    setSignupModalIsOpen={setSignupModalIsOpen}
                />
            </section>
            <section className={style.about} id={'about'}>
                <About />
            </section>
            <section className={style.features} id={'features'}>
                <Features />
            </section>
            <section className={style.team} id={'team'}>
                <Team />
            </section>
            <section className={style.cta}>
                <Cta 
                    setSignupModalIsOpen={setSignupModalIsOpen}
                />
            </section>
            <section className={style.contact} id={'contact'}>
                <Contact />
            </section>
        </div>
    )
}

export default Homepage