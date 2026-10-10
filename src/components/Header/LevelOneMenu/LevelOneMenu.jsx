import { scrollToId } from "./scroll";
import { useStyles } from "./style";
import logo from "../../../assets/logo.png";

export default function LevelOne({
  headerMenu,
  levelOneTab,
  setLevelTwoTab,
  selectedCity,
  handleTabChange,
}) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.topHeader}>
        <div className={classes.topLeft}>
          <div className={classes.logoImg}>
            <img src={logo} alt="Русский Стандарт Банк" />
          </div>
          <nav className={classes.topNav}>
            {headerMenu?.map((menu) => (
              <button
                key={menu.id}
                className={`${classes.navButton} ${levelOneTab === menu.name ? classes.active : ""}`}
                onClick={() => handleTabChange(menu.name, null)}
              >
                {menu.text}
              </button>
            ))}
          </nav>
        </div>
        <div className={classes.topNav}>
          <button className={classes.navButton}>О банке</button>
          <button
            className={classes.navButton}
            onClick={() => scrollToId("map")}
          >
            Офисы и банкоматы
          </button>
          <button
            className={classes.navButton}
            onClick={() => setLevelTwoTab("regions")}
          >
            {selectedCity.text}
          </button>
          <button className={classes.navButton}>RU</button>
        </div>
      </div>
    </>
  );
}
