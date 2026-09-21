import close from "./icons/close.png";
import { useStyles } from "./style";
import CatalogList from "./LevelThreeContent/CatalogList";
import Regions from "./LevelThreeContent/Regions";


export default function LevelThree({
  levelOneTab,
  levelTwoTab,
  setLevelTwoTab,
  setSelectedCity,
}) {
  const classes = useStyles();

  return (
    <>
      {/* Третий уровень */}
      {levelTwoTab && (
        <div className={classes.dropdown}>
          <div className={classes.dropdownContent}>
            {levelTwoTab !== "cities" && (
              <CatalogList
                classes={classes}
                levelOneTab={levelOneTab}
                levelTwoTab={levelTwoTab}
                setLevelTwoTab={setLevelTwoTab}
              />
            )}
            {levelTwoTab === "cities" && (
              <Regions
                classes={classes}
                setLevelTwoTab={setLevelTwoTab}
                setSelectedCity={setSelectedCity}
              />
            )}

            <button
              className={classes.closeBtn}
              onClick={() => setLevelTwoTab(null)}
            >
              <img src={close} alt="Закрыть" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
