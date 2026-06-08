import close from "./icons/close.png";
import { INDIVIDUALS_MENU_DATA, BUSINESS_MENU_DATA, PRIVATE_MENU_DATA } from "./Data"
import { useStyles } from "./style";
import CatalogList from "./LevelThreeContent/CatalogList";
import Regions from "./LevelThreeContent/Regions";

export default function LevelThree({ activeTab, activeMenu, setActiveMenu, setSelectedCity }) {

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

                        {activeMenu !== 'cities' &&
                            <CatalogList
                                data={menuDataThree}
                                classes={classes}
                                activeTab={activeTab}
                                activeMenu={activeMenu}
                                setActiveMenu={setActiveMenu}
                            />
                        }
                        {activeMenu === 'cities' &&
                            <Regions
                                data={menuDataThree}
                                classes={classes}
                                activeTab={activeTab}
                                activeMenu={activeMenu}
                                setActiveMenu={setActiveMenu}
                                setSelectedCity={setSelectedCity}
                            />
                        }

                        <button className={classes.closeBtn} onClick={() => setActiveMenu(null)}>
                            <img src={close} alt="Закрыть" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}