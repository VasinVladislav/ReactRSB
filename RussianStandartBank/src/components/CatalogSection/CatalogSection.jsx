import { useStyles } from "./style"
import { useState } from "react"
import { PERSONAL_DATA, YOUTH_DATA, FAMILY_DATA, ENTERTAINMENT_DATA, PREMIUM_DATA } from "./grid/Data.jsx"
import up from "./grid/icons/up.png"

export default function CatalogSection() {
    const classes = useStyles();

    const [activeTab, setActiveTab] = useState('personal');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const dataMap = {
        personal: PERSONAL_DATA,
        youth: YOUTH_DATA,
        family: FAMILY_DATA,
        entertainment: ENTERTAINMENT_DATA,
        premium: PREMIUM_DATA
    };

    return (
        <section className={classes.section}>
            <h2 className={classes.mainTitle}>
                Мы перезагрузились в новом формате <br />
                и подобрали для Вас много полезного
            </h2>

            {/* Вкладки (Tabs) */}
            <nav className={classes.tabs}>
                <button className={`${classes.tab} ${activeTab === 'personal' ? classes.active : ''}`} onClick={() => handleTabChange('personal')}>Личные финансы</button>
                <button className={`${classes.tab} ${activeTab === 'youth' ? classes.active : ''}`} onClick={() => handleTabChange('youth')}>Молодежи</button>
                <button className={`${classes.tab} ${activeTab === 'family' ? classes.active : ''}`} onClick={() => handleTabChange('family')}>Родителям и детям</button>
                <button className={`${classes.tab} ${activeTab === 'entertainment' ? classes.active : ''}`} onClick={() => handleTabChange('entertainment')}>Развлечения</button>
                <button className={`${classes.tab} ${activeTab === 'premium' ? classes.active : ''}`} onClick={() => handleTabChange('premium')}>Премиум</button>
            </nav>

            {/* Сетка карточек */}
            <div className={classes.main}>
                {/* Обычные карточки */}
                <div className={classes.grid}>
                    {dataMap[activeTab].map((item) => (
                        <div key={item.id} className={classes.card}>
                            <div className={classes.cardHeader}>
                                <img src={item.icon} />
                                <h3>{item.title}</h3>
                            </div>
                            <div className={classes.cardContent}>
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Большая черная карточка (Квиз) */}
                <div className={classes.quizCard}>
                    <div className={classes.quizCardTop}>
                        <h3>Не знаете какой продукт Вам подойдет?</h3>
                        <div className={classes.quizTextBot}>
                            <p>Пройдите интерактивный квиз и узнайте, чего Вы хотите на самом деле </p>
                        <img src={up} alt="" />
                        </div>
                        
                    </div>


                    <div className={classes.quizFooter}>
                        <div className={classes.avatarStack}>
                            {/* Тот самый стек кругов, который мы делали */}
                            <div className={classes.circle}>+158</div>
                        </div>
                        <button className={classes.quizBtn}>Проходят квиз прямо сейчас</button>
                    </div>
                </div>
            </div>



        </section>
    )
}
