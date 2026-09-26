import { createPortal } from "react-dom";
import enter from "../icons/enter.png";
import search from "../icons/search.png";
import { useStyles } from "./style";
import * as Icons from "./icons";

export default function LevelTwo({
  levelTwoData,
  levelOneTab,
  levelTwoTab,
  setIsAuthOpen,
  handleTabChange,
}) {
  const classes = useStyles();

  return (
    <>
      {/* Второй уровень */}
      <div className={classes.botHeader}>
        {/* Навигация */}
        <nav className={classes.botNav}>
          {levelTwoData?.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(levelOneTab, item.name)}
              className={`${classes.navButton} ${levelTwoTab === item.name ? classes.active : ""}`}
            >
              <img src={Icons[item.icon]} className={classes.icon} alt="" />
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
            onClick={() => handleTabChange(levelOneTab, null)}
          />,
          document.body, // Телепортируем его прямо в body страницы
        )}
    </>
  );
}
