import { useStyles } from "./style";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import LoginButton from "../LevelTwoMenu/LoginButton/LoginButton";

export default function LevelOne({
  headerMenu,
  levelOneTab,
  setLevelTwoTab,
  selectedCity,
  handleTabChange,
  setIsAuthOpen
}) {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.topHeader}>
        <div className={classes.topLeft}>
          <button className={classes.logoImg} onClick={() => navigate("/")}>
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
        <div className={classes.topRight}>
          <button className={classes.navButton}>О банке</button>
          <HashLink
            smooth
            to="/#map" // Ведет строго к карте на главной странице
            className={classes.navButton}
          >
            Офисы и банкоматы
          </HashLink>
          <button
            className={classes.navButton}
            onClick={() => setLevelTwoTab("regions")}
          >
            {selectedCity.text}
          </button>
          {/* <button className={classes.navButton}>RU</button> */}
        </div>
        <div className={classes.loginSection}>
          <LoginButton setIsAuthOpen={setIsAuthOpen}/>
        </div>
        
      </div>
    </>
  );
}
