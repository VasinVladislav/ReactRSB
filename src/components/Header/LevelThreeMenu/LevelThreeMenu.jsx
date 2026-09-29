import close from "./icons/close.png";
import { useStyles } from "./style";
import CatalogList from "./LevelThreeContent/CatalogList";
import Regions from "./LevelThreeContent/Regions";

export default function LevelThree({
  levelThreeData,
  levelOneTab,
  levelTwoTab,
  cityMenuOpen,
  locationMenuData,
  setSelectedCity,
  handleTabChange,
}) {
  const classes = useStyles();

  return (
    <>
      {/* Третий уровень */}
      {levelTwoTab && (
        <div className={classes.dropdown}>
          <div className={classes.dropdownContent}>
            {levelTwoTab && (
              <CatalogList
                classes={classes}
                levelOneTab={levelOneTab}
                levelTwoTab={levelTwoTab}
                handleTabChange={handleTabChange}
                levelThreeData={levelThreeData}
              />
            )}
            {cityMenuOpen && (
              <Regions
                classes={classes}
                levelOneTab={levelOneTab}
                handleTabChange={handleTabChange}
                locationMenuData={locationMenuData}
                setSelectedCity={setSelectedCity}
              />
            )}

            <button
              className={classes.closeBtn}
              onClick={() => handleTabChange(levelOneTab, null)}
            >
              <img src={close} alt="Закрыть" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
