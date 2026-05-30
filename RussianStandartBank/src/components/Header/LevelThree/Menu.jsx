import close from "./icons/close.png";
import { INDIVIDUALS_MENU_DATA, BUSINESS_MENU_DATA, PRIVATE_MENU_DATA } from "./Data"
import { useStyles } from "./style";

export default function LevelThree({ activeTab, activeMenu, setActiveMenu }) {

    const classes = useStyles();

    const menuDataThree = {
        individuals: INDIVIDUALS_MENU_DATA,
        business: BUSINESS_MENU_DATA,
        private: PRIVATE_MENU_DATA,
    }

    return (
        <>
            {/* Третий уровень */}
            {activeMenu && (
                <div className={classes.dropdown}>
                    <div className={classes.dropdownContent}>
                        <div className={classes.column}>

                            {/* Берем массив по ключу из activeMenu и проходим по нему .map() */}
                            {menuDataThree[activeTab][activeMenu]?.map((item) => (
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
    );
}