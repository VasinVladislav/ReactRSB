import { useStyles } from "./style";
import { useState, useEffect } from "react";
import PersonalFinanceTab from "./grid/PersonalFinanceTab/PersonalFinanceTab.jsx";
import YouthTab from "./grid/YouthTab/YouthTab.jsx";
import FamilyTab from "./grid/FamilyTab/FamilyTab.jsx";
import EntertainmentTab from "./grid/EntertainmentTab/EntertainmentTab.jsx";
import PremiumTab from "./grid/PremiumTab/PremiumTab.jsx";
import QuizCard from "./QuizCard/QuizCard.jsx";

// Список ключей для удобного перебора
const TABS_LIST = [
  { id: "personal", label: "Личные финансы" },
  { id: "youth", label: "Молодежи" },
  { id: "family", label: "Родителям и детям" },
  { id: "entertainment", label: "Развлечения" },
  { id: "premium", label: "Премиум" },
];

export default function CatalogSection() {
  const classes = useStyles();

  const [activeTab, setActiveTab] = useState("personal");
  const [isAutoPlay, setIsAutoPlay] = useState(true); // Флаг автоплея

  // Автоматическое переключение вкладок
  useEffect(() => {
    let interval;

    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveTab((prev) => {
          const currentIndex = TABS_LIST.findIndex((item) => item.id === prev);
          const nextIndex = (currentIndex + 1) % TABS_LIST.length;
          return TABS_LIST[nextIndex].id;
        });
      }, 5000); // Интервал 5 секунд
    }

    return () => clearInterval(interval); // Очистка при размонтировании
  }, [isAutoPlay]); // Перезапуск только если изменился флаг

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsAutoPlay(false);
  };

  return (
    <>
      <section className={classes.section}>
        <h2 className={classes.mainTitle}>
          Мы перезагрузились в новом формате <br />и подобрали для Вас много
          полезного
        </h2>

        {/* Вкладки (Tabs) */}
        <nav className={classes.tabs}>
          {TABS_LIST.map((item) => (
            <button
              key={item.id}
              className={`${classes.tab} ${activeTab === item.id ? classes.active : ""} ${!isAutoPlay ? classes.paused : ""}`}
              onClick={() => handleTabChange(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Сетка карточек */}
        <div
          key={activeTab} // ВАЖНО: при смене таба key изменится и запустится анимация fadeIn
          className={classes.main}
        >
          {/* Обычные карточки */}
          <div className={classes.grid}>
            {activeTab === "personal" && (
              <PersonalFinanceTab classes={classes} />
            )}
            {activeTab === "youth" && <YouthTab classes={classes} />}
            {activeTab === "family" && <FamilyTab classes={classes} />}
            {activeTab === "entertainment" && (
              <EntertainmentTab classes={classes} />
            )}
            {activeTab === "premium" && <PremiumTab classes={classes} />}
          </div>

          {/* Большая карточка (Квиз) */}
          <QuizCard classes={classes} />
        </div>
      </section>
    </>
  );
}
