import { useStyles } from "./style"
import { useState } from "react"
import logo from "../../assets/logo.png"
import { scrollToId } from "../../utils/scroll.js"
import LevelOne from "./LevelOne/Menu.jsx"
import LevelTwo from "./LevelTwo/Menu.jsx"
import LevelThree from "./LevelThree/Menu.jsx"

export default function Header() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('individuals');
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedCity, setSelectedCity] = useState('Москва');

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
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setActiveMenu={setActiveMenu}
              />
          </div>
          <div className={classes.topNav}>
            <button className={classes.navButton}>О банке</button>
            <button className={classes.navButton} onClick={() => scrollToId('map')}>Офисы и банкоматы</button>
            <button className={classes.navButton} onClick={() => setActiveMenu('cities')}>{selectedCity}</button>
            <button className={classes.navButton}>RU</button>
          </div>
        </div>
        {/* Основная навигация */}

        <hr className={classes.line} />
        <LevelTwo
          activeTab={activeTab}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
        <LevelThree
          classes={classes}
          activeTab={activeTab}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          setSelectedCity={setSelectedCity}
        />
      </header>
    </>
  )
}