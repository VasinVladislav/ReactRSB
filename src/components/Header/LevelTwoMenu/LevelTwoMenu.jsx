import { createPortal } from "react-dom";
import enter from "../icons/enter.png";
import search from "../icons/search.png";
import { MENU_DATA } from "../menuData/menuData";
import { useStyles } from "./style";

export default function LevelTwo({
  levelOneTab,
  levelTwoTab,
  setLevelTwoTab,
  setIsAuthOpen,
}) {
  const classes = useStyles();

  // Универсальная функция переключения
  const toggleMenu = (menuName) => {
    setLevelTwoTab(levelTwoTab === menuName ? null : menuName);
  };

  return (
    <>
      {/* Второй уровень */}
      <div className={classes.botHeader}>
        {/* Навигация */}
        <nav className={classes.botNav}>
          {Object.values(MENU_DATA[levelOneTab])?.map((item) => (
            <button
              key={item.id}
              onClick={() => toggleMenu(item.id)}
              className={`${classes.navButton} ${levelTwoTab === item.id ? classes.active : ""}`}
            >
              <img src={item.icon} className={classes.icon} alt="" />
              {item.text}
            </button>
          ))}
        </nav>

        {/* Поиск и Вход */}
        <div className={classes.actions}>
          <button className={classes.searchBtn}>
            <img src={search} alt="Поиск" />
          </button>
          <button
            className={classes.loginBtn}
            onClick={() => setIsAuthOpen(true)}
          >
            <img src={enter} alt="Вход" /> Интернет-банк
          </button>
        </div>
      </div>

      {/* Рендерим оверлей ВНЕ хедера через Портал */}
      {levelTwoTab &&
        createPortal(
          <div
            className={classes.overlay}
            onClick={() => setLevelTwoTab(null)}
          />,
          document.body, // Телепортируем его прямо в body страницы
        )}
    </>
  );
}
