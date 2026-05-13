import { useStyles } from "./style"
import { useState } from "react"
import logo from "../../assets/logo.png"
import { Individuals, Business, PrivateBanking } from "./Menu/Data.jsx"

export default function Header() {
  const classes = useStyles();

  const [activeTab, setActiveTab] = useState('individuals');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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
            <nav className={classes.topNav}>
              <button className={`${classes.navButton} ${activeTab === 'individuals' ? classes.active : ''}`} onClick={() => handleTabChange('individuals')}>Частным клиентам</button>
              <button className={`${classes.navButton} ${activeTab === 'business' ? classes.active : ''}`} onClick={() => handleTabChange('business')}>Для бизнеса</button>
              <button className={`${classes.navButton} ${activeTab === 'private' ? classes.active : ''}`} onClick={() => handleTabChange('private')}>Private Banking</button>
            </nav>
          </div>
          <div className={classes.topNav}>
            <button className={classes.navButton}>О банке</button>
            <button className={classes.navButton}>Офисы и банкоматы</button>
            <button className={classes.navButton}>Москва</button>
            <button className={classes.navButton}>RU</button>
          </div>
        </div>
        {/* Основная навигация */}
        {/* Условный рендер для выбранной вкладки */}
        <hr className={classes.line}/>
          {activeTab === 'individuals' && <Individuals />}
          {activeTab === 'business' && <Business />}
          {activeTab === 'private' && <PrivateBanking />}
      </header>
    </>
  )
}