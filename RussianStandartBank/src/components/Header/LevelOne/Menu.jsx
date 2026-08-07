import { useStyles } from "./style";

export default function LevelOne({ activeTab, setActiveTab, setActiveMenu }) {
  const classes = useStyles();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveMenu(null);
  };

  return (
    <>
      <nav className={classes.topNav}>
        <button
          className={`${classes.navButton} ${activeTab === "individuals" ? classes.active : ""}`}
          onClick={() => handleTabChange("individuals")}
        >
          Частным клиентам
        </button>
        <button
          className={`${classes.navButton} ${activeTab === "business" ? classes.active : ""}`}
          onClick={() => handleTabChange("business")}
        >
          Для бизнеса
        </button>
        <button
          className={`${classes.navButton} ${activeTab === "private" ? classes.active : ""}`}
          onClick={() => handleTabChange("private")}
        >
          Private Banking
        </button>
      </nav>
    </>
  );
}
