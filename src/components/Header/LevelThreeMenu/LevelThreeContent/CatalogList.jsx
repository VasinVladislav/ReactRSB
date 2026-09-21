// Список с предложениями банка

import { MENU_DATA } from "../../menuData/menuData";

export default function CatalogList({
  classes,
  levelOneTab,
  levelTwoTab,
  setLevelTwoTab,
}) {
  return (
    <>
      {/* Третий уровень */}
      <div className={classes.column}>
        {MENU_DATA[levelOneTab][levelTwoTab].items?.map((item) => (
          <button
            key={item.id}
            className={classes.navButton}
            onClick={() => (
              window.open(item.href, "_blank"),
              setLevelTwoTab(null)
            )}
          >
            {item.text}
          </button>
        ))}
      </div>
    </>
  );
}
