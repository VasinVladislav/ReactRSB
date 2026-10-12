import { scrollToId } from "./scroll";
import { useStyles } from "./style";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function LevelOne({
  headerMenu,
  levelOneTab,
  setLevelTwoTab,
  selectedCity,
  handleTabChange,
}) {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.topHeader}>
        <div className={classes.topLeft}>
          <button className={classes.logoImg} onClick={()=>navigate("/")}>
            <img src={logo} alt="Русский Стандарт Банк" />
          </button>
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
