import { useStyles } from "./style"
import { useState, useEffect } from "react"
import { PERSONAL_DATA, YOUTH_DATA, FAMILY_DATA, ENTERTAINMENT_DATA, PREMIUM_DATA } from "./grid/Data.jsx"
import up from "./assets/up.png"
import face1 from "./assets/face1.png"
import face2 from "./assets/face2.png"
import face3 from "./assets/face3.png"

// Список ключей для удобного перебора
const TABS_LIST = ['personal', 'youth', 'family', 'entertainment', 'premium'];

export default function CatalogSection() {
    const classes = useStyles();

    const [activeTab, setActiveTab] = useState('personal');
    const [isAutoPlay, setIsAutoPlay] = useState(true); // Флаг автоплея

    // Автоматическое переключение вкладок
    useEffect(() => {
        let interval;

        if (isAutoPlay) {
            interval = setInterval(() => {
                setActiveTab((prev) => {
                    const currentIndex = TABS_LIST.indexOf(prev);
                    const nextIndex = (currentIndex + 1) % TABS_LIST.length;
                    return TABS_LIST[nextIndex];
                });
            }, 5000); // Интервал 5 секунд
        }

        return () => clearInterval(interval); // Очистка при размонтировании
    }, [isAutoPlay]); // Перезапуск только если изменился флаг

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setIsAutoPlay(false);
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
                <button className={`${classes.tab} ${activeTab === 'personal' ? classes.active : ''} ${!isAutoPlay ? classes.paused : ''}`} onClick={() => handleTabChange('personal')}>Личные финансы</button>
                <button className={`${classes.tab} ${activeTab === 'youth' ? classes.active : ''} ${!isAutoPlay ? classes.paused : ''}`} onClick={() => handleTabChange('youth')}>Молодежи</button>
                <button className={`${classes.tab} ${activeTab === 'family' ? classes.active : ''} ${!isAutoPlay ? classes.paused : ''}`} onClick={() => handleTabChange('family')}>Родителям и детям</button>
                <button className={`${classes.tab} ${activeTab === 'entertainment' ? classes.active : ''} ${!isAutoPlay ? classes.paused : ''}`} onClick={() => handleTabChange('entertainment')}>Развлечения</button>
                <button className={`${classes.tab} ${activeTab === 'premium' ? classes.active : ''} ${!isAutoPlay ? classes.paused : ''}`} onClick={() => handleTabChange('premium')}>Премиум</button>
            </nav>

            {/* Сетка карточек */}
            <div key={activeTab} // ВАЖНО: при смене таба key изменится и запустится анимация fadeIn 
                className={classes.main}>
                {/* Обычные карточки */}
                <div className={classes.grid}>
                    {dataMap[activeTab].map((item) => (
                        <div key={item.id} className={classes.card}>
                            <a href={item.href} className={classes.cardHref}>
                                <div className={classes.cardHeader}>
                                    <img src={item.icon} />
                                    <h3>{item.title}</h3>
                                </div>
                                <div className={classes.cardContent}>
                                    {item.content}
                                </div>
                            </a>
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
                            <img src={face1} className={classes.circle} alt="" />
                            <img src={face2} className={classes.circle} alt="" />
                            <img src={face3} className={classes.circle} alt="" />
                        </div>
                        <button className={classes.quizBtn}>
                            <div className={classes.quizCounter}>
                                158+
                            </div>
                            <div className={classes.quizText}>
                                Проходят квиз прямо сейчас
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
