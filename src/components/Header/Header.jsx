import { useStyles } from "./style";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { scrollToId } from "../../utils/scroll.js";
import LevelOne from "./LevelOneMenu/LevelOneMenu.jsx";
import LevelTwo from "./LevelTwoMenu/LevelTwoMenu.jsx";
import LevelThree from "./LevelThreeMenu/LevelThreeMenu.jsx";
import { yandexCityDetected } from "./HeaderUtils/yandexCityDetected.js";
import { getSelectedCity } from "./HeaderUtils/getSelectedCity.js";
import AuthModal from "../AuthModal/AuthModal.jsx";
import axios from "axios";

export default function Header() {
  const classes = useStyles();
  const [levelOneData, setLevelOneData] = useState([]);
  const [levelOneTab, setLevelOneTab] = useState(null);
  const [levelTwoTab, setLevelTwoTab] = useState(null);
  const [selectedCity, setSelectedCity] = useState(() => getSelectedCity());
  const [cityMenuOpen, setCityMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const url = "http://localhost:5000/api/HeaderMenu";

  // Слушаем событие автоматического определения региона от ЯндексКарты
  useEffect(() => yandexCityDetected(setSelectedCity), []);

  useEffect(() => {
    axios.get(url).then((res) => {
      setLevelOneData(res.data);
      setLevelOneTab(res.data[0].name);
    });
  }, []);

  const levelTwoData = levelOneData?.find(
    (tab) => tab.name === levelOneTab,
  )?.items;
  const levelThreeData = levelTwoData?.find(
    (tab) => tab.name === levelTwoTab,
  )?.items;

  const handleTabChange = (tabOne, tabTwo) => {
    setLevelOneTab(tabOne);
    setLevelTwoTab(levelTwoTab === tabTwo ? null : tabTwo);
    setCityMenuOpen(false);
  };

  return (
    <>
      <header className={classes.header}>
        {/* Верхняя навигация */}
        <div className={classes.topHeader}>
          <div className={classes.topLeft}>
            <div className={classes.logoImg}>
              <img src={logo} alt="Русский Стандарт Банк" />
            </div>
            <LevelOne
              levelOneData={levelOneData}
              levelOneTab={levelOneTab}
              handleTabChange={handleTabChange}
            />
          </div>
          <div className={classes.topNav}>
            <button className={classes.navButton}>О банке</button>
            <button
              className={classes.navButton}
              onClick={() => scrollToId("map")}
            >
              Офисы и банкоматы
            </button>
            <button
              className={classes.navButton}
              onClick={() => {setCityMenuOpen(true); setLevelTwoTab(true);}}
            >
              {selectedCity.text}
            </button>
            <button className={classes.navButton}>RU</button>
          </div>
        </div>
        {/* Основная навигация */}

        <hr className={classes.line} />
        <LevelTwo
          levelTwoData={levelTwoData}
          levelOneTab={levelOneTab}
          levelTwoTab={levelTwoTab}
          setIsAuthOpen={setIsAuthOpen}
          handleTabChange={handleTabChange}
        />
        <LevelThree
          levelThreeData={levelThreeData}
          levelOneTab={levelOneTab}
          levelTwoTab={levelTwoTab}
          cityMenuOpen={cityMenuOpen}
          setSelectedCity={setSelectedCity}
          handleTabChange={handleTabChange}
        />
      </header>
      <AuthModal
        key={isAuthOpen}
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </>
  );
}
