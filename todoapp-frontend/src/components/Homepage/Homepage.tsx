import style from '../Homepage/Homepage.module.scss'
import Home from '../Svg/Home/Home';

function Homepage () {

    return (
        <>
            <section className={style.hero}>
                <Home />
            </section>
            <section className={style.hero}>
                <Home />
            </section>
            <section className={style.hero}>
                <Home />
            </section>
            <section className={style.hero}>
                <Home />
            </section>
        </>
    )
}

export default Homepage