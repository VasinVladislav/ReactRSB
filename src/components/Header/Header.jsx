import { useStyles } from "./style";
import { useState, useEffect } from "react";
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
  const [locationMenuData, setLocationMenuData] = useState([]);
  const [levelOneTab, setLevelOneTab] = useState(null);
  const [levelTwoTab, setLevelTwoTab] = useState(null);
  const [selectedCity, setSelectedCity] = useState(() => getSelectedCity());
  const [cityMenuOpen, setCityMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const url = "http://localhost:5000/api/";

  useEffect(() => {
    axios.get(`${url}HeaderMenu`).then((res) => {
      setLevelOneData(res.data);
      setLevelOneTab(res.data[0].name);
    });
    axios.get(`${url}LocationMenu`).then((res) => {
      setLocationMenuData(res.data);
    });
  }, []);

  // Слушаем событие автоматического определения региона от ЯндексКарты
  useEffect(
    () => yandexCityDetected(locationMenuData, setSelectedCity),
    [locationMenuData],
  );

  const levelTwoData = levelOneData?.find(
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
          levelOneData={levelOneData}
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
          locationMenuData={locationMenuData}
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
