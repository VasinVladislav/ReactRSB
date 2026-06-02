import { createPortal } from "react-dom";
import enter from "./icons/enter.png";
import search from "./icons/search.png";
import { INDIVIDUALS_NAV_ITEMS, BUSINESS_NAV_ITEMS, PRIVATE_NAV_ITEMS } from "./Data"
import { useStyles } from "./style";

export default function LevelTwo({ activeTab, activeMenu, setActiveMenu}) {

    const classes = useStyles();

    const menuDataTwo = {
        individuals: INDIVIDUALS_NAV_ITEMS,
        business: BUSINESS_NAV_ITEMS,
        private: PRIVATE_NAV_ITEMS,
    }

    // Универсальная функция переключения
    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    }

    return (
        <>
            {/* Второй уровень */}
            <div className={classes.botHeader}>

                {/* Навигация */}
                <nav className={classes.botNav}>
                    {menuDataTwo[activeTab].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => toggleMenu(item.id)}
                            className={`${classes.navButton} ${activeMenu === item.id ? classes.active : ""}`}
                        >
                            <img src={item.icon} className={classes.icon} alt="" />
                            {item.text}
                        </button>
                    ))}
                </nav>

                {/* Поиск и Вход */}
                <div className={classes.actions}>
                    <button className={classes.searchBtn}>
                        <img src={search} alt="Поиск" />
                    </button>
                    <button className={classes.loginBtn}><img src={enter} alt="Вход" /> Интернет-банк</button>
                </div>

            </div>

            {/* Рендерим оверлей ВНЕ хедера через Портал */}
            {activeMenu && createPortal(
                <div className={classes.overlay} onClick={() => setActiveMenu(null)} />,
                document.body // Телепортируем его прямо в body страницы
            )}
        </>
    )
}