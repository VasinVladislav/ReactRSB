import close from "./icons/close.png";
import { useStyles } from "./style";
import CatalogList from "./LevelThreeContent/CatalogList";
import Regions from "./LevelThreeContent/Regions";

export default function LevelThree({
  levelThreeData,
  levelOneTab,
  levelTwoTab,
  locationMenu,
  setSelectedCity,
  handleTabChange,
}) {
  const classes = useStyles();
  // Если шторка не должна быть открыта — сразу выходим, не засоряя DOM
  if (!levelTwoTab) return null;

  return (
    <>
      {/* Третий уровень */}
      <div className={classes.dropdown}>
        <div className={classes.dropdownContent}>
          {levelTwoTab === "regions" ? (
            <Regions
              classes={classes}
              levelOneTab={levelOneTab}
              handleTabChange={handleTabChange}
              locationMenu={locationMenu}
              setSelectedCity={setSelectedCity}
            />
          ) : (
            <CatalogList
              classes={classes}
              levelOneTab={levelOneTab}
              levelTwoTab={levelTwoTab}
              handleTabChange={handleTabChange}
              levelThreeData={levelThreeData}
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
    </>
  );
}
