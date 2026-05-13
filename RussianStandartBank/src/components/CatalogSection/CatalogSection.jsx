import { useStyles } from "./style"
import cardIcon from "./icons/card.png"

export default function CatalogSection() {
    const classes = useStyles();

    return (
        <section className={classes.section}>
            <h2 className={classes.mainTitle}>
                Мы перезагрузились в новом формате <br />
                и подобрали для Вас много полезного
            </h2>

            {/* Вкладки (Tabs) */}
            <nav className={classes.tabs}>
                <button className={`${classes.tab} ${classes.activeTab}`}>Личные финансы</button>
                <button className={classes.tab}>Молодежи</button>
                <button className={classes.tab}>Родителям и детям</button>
                <button className={classes.tab}>Развлечения</button>
                <button className={classes.tab}>Премиум</button>
            </nav>

            {/* Сетка карточек */}
            <div className={classes.grid}>

                {/* Обычные карточки */}
                <div className={classes.card}>
                    <div className={classes.cardHeader}>
                        <div className={classes.iconCircle}><img src={cardIcon} /></div>
                        <h3>Кредитная карта</h3>
                    </div>
                    <div className={classes.cardContent}>
                        <span><b>0 ₽</b> обслуживание карты</span>
                        <span><b>5 %</b> кэшбэк за все покупки</span>
                    </div>
                </div>

                <div className={classes.card}>
                    {/* Дебетовая карта... аналогично */}
                </div>

                {/* Большая черная карточка (Квиз) */}
                <div className={classes.quizCard}>
                    <h3>Не знаете какой продукт Вам подойдет?</h3>
                    <p>Пройдите интерактивный квиз и узнайте, чего Вы хотите на самом деле 👍</p>

                    <div className={classes.quizFooter}>
                        <div className={classes.avatarStack}>
                            {/* Тот самый стек кругов, который мы делали */}
                            <div className={classes.circle}>+158</div>
                        </div>
                        <button className={classes.quizBtn}>Проходят квиз прямо сейчас</button>
                    </div>
                </div>

                <div className={classes.card}>
                    {/* Кредит на любые цели... */}
                </div>

                <div className={classes.card}>
                    {/* Инвестиции... */}
                </div>
            </div>
        </section>
    )
}
