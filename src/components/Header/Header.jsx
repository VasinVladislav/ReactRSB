import { useStyles } from "./style";
import { useState, useEffect } from "react";
import LevelOne from "./LevelOneMenu/LevelOneMenu.jsx";
import LevelTwo from "./LevelTwoMenu/LevelTwoMenu.jsx";
import LevelThree from "./LevelThreeMenu/LevelThreeMenu.jsx";
import { yandexCityDetected } from "../../services/yandexCityDetected.js";
import { getSelectedCity } from "../../services/getSelectedCity.js";
import AuthModal from "../AuthModal/AuthModal.jsx";
import { useLoaderData } from "react-router-dom";

export default function Header() {
  const classes = useStyles();
  const { headerMenu, locationMenu } = useLoaderData();
  const [levelOneTab, setLevelOneTab] = useState(headerMenu[0].name);
  const [levelTwoTab, setLevelTwoTab] = useState(null);
  const [selectedCity, setSelectedCity] = useState(() => getSelectedCity());
  const [cityMenuOpen, setCityMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Слушаем событие автоматического определения региона от ЯндексКарты
  useEffect(
    () => yandexCityDetected(locationMenu, setSelectedCity),
    [locationMenu],
  );
  const levelTwoData = headerMenu?.find(
    (tab) => tab.name === levelOneTab,
  )?.items;
  const levelThreeData = levelTwoData?.find(
    (tab) => tab.name === levelTwoTab,
  )?.items;

  const handleTabChange = (tabOne, tabTwo) => {
    setLevelOneTab(tabOne);
    setLevelTwoTab(levelTwoTab === tabTwo ? null : tabTwo);
  };

  return (
    <>
      <header className={classes.header}>
        {/* Верхняя навигация */}
        <LevelOne
          headerMenu={headerMenu}
          levelOneTab={levelOneTab}
          selectedCity={selectedCity}
          setLevelTwoTab={setLevelTwoTab}
          setCityMenuOpen={setCityMenuOpen}
          handleTabChange={handleTabChange}
        />
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
          locationMenu={locationMenu}
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
