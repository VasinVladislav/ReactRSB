import { useState } from "react";
import { useStyles } from "./style";
import { createPortal } from "react-dom";
import close from "../icons/close.png";
import enter from "../icons/enter.png";
import search from "../icons/search.png";

export default function TabMenu({ navItems, menuData }) {

    const classes = useStyles();

    const [activeMenu, setActiveMenu] = useState(null);

    // Универсальная функция переключения
    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    return (
        <>
            {/* Второй уровень */}
            <div className={classes.botHeader}>
                <nav className={classes.botNav}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => toggleMenu(item.id)}
                            className={classes.navButton}
                        >
                            <img src={item.icon} className={classes.icon} alt="" />
                            {item.text}
                        </button>
                    ))}
                </nav>
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
            {/* Третий уровень */}
            {activeMenu && (
                <div className={classes.dropdown}>
                    <div className={classes.dropdownContent}>
                        <div className={classes.column}>
                            {/* Берем массив по ключу из activeMenu и проходим по нему .map() */}
                            {menuData[activeMenu]?.map((item) => (
                                <button key={item} className={classes.navButton}>
                                    {item}
                                </button>
                            ))}
                        </div>
                        <button className={classes.closeBtn} onClick={() => setActiveMenu(null)}>
                            <img src={close} alt="Закрыть" />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}