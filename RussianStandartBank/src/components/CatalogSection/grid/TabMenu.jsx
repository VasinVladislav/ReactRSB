import { useState } from "react";
import { useStyles } from "./style";
import cardIcon from "./icons/card.png"

export default function TabMenu({ navItems }) {

    const classes = useStyles();

    const [activeMenu, setActiveMenu] = useState(null);

    // Универсальная функция переключения
    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    return (
        <>
            <div className={classes.card}>
                {navItems.map((item) => (
                    <button
                            key={item.id}
                            onClick={() => toggleMenu(item.id)}
                            className={classes.navButton}
                        >
                            {item.text}
                        </button>
                ))}
            </div>
            {activeMenu && (
                <div className={classes.cardContent}>
                    <span><b>0 ₽</b> обслуживание карты</span>
                    <span><b>5 %</b> кэшбэк за все покупки</span>
                </div>
            )}
        </>
    );
}

{/* <div className={classes.card}>
                    <div className={classes.cardHeader}>
                        <div className={classes.iconCircle}><img src="" /></div>
                        <h3>Кредитная карта</h3>
                    </div>
                    <div className={classes.cardContent}>
                        <span><b>0 ₽</b> обслуживание карты</span>
                        <span><b>5 %</b> кэшбэк за все покупки</span>
                    </div>
                </div> */}