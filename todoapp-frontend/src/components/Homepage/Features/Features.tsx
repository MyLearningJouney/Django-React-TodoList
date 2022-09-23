import style from '../Features/Features.module.scss'

function Features () {

    return (
        <div className={style.container}>
            <div className={style.cardsWrapper}>
                <ul className={style.cardList}>
                    <li className={style.card}>
                        <div className={style.card1}>
                            <h1> Card 1 </h1>
                        </div>
                    </li>
                    <li className={style.card}>
                        <div className={style.card2}>
                            <h1> Card 2 </h1>
                        </div>
                    </li>
                    <li className={style.card}>
                        <div className={style.card3}>
                            <h1> Card 3 </h1>
                        </div>
                    </li>
                    <li className={style.card}>
                        <div className={style.card4}>
                            <h1> Card 4 </h1>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Features