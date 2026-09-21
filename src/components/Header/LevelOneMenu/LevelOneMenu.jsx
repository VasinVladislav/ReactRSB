import { useStyles } from "./style";

export default function LevelOne({ levelOneTab, setLevelOneTab, setLevelTwoTab }) {
  const classes = useStyles();

  const handleTabChange = (tab) => {
    setLevelOneTab(tab); 
    setLevelTwoTab(null);  
  }; 

  return (
    <>
      <nav className={classes.topNav}>
        <button
          className={`${classes.navButton} ${levelOneTab === "individuals" ? classes.active : ""}`}
          onClick={() => handleTabChange("individuals")}
        >
          Частным клиентам
        </button>
        <button
          className={`${classes.navButton} ${levelOneTab === "business" ? classes.active : ""}`}
          onClick={() => handleTabChange("business")}
        >
          Для бизнеса
        </button>
        <button
          className={`${classes.navButton} ${levelOneTab === "private" ? classes.active : ""}`}
          onClick={() => handleTabChange("private")}
        >
          Private Banking
        </button>
      </nav>
    </>
  );
}
