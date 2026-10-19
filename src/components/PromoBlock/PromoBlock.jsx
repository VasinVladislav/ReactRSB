import { useStyles } from "./style";
import Apply from "./assets/ApplyImg.png";
import more from "./assets/more.png";
import ostin from "./assets/ostin.png";
import wb from "./assets/wb.png";
import zolotoe from "./assets/zolotoe-yabloko.png";
import Up from "./assets/Thumbs Up.png";
import Enter from "./assets/Enter.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthModal from "../AuthModal/AuthModal";

export default function PromoBlock() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleAuth = () => {
    const isAuthenticated = Boolean(
      localStorage.getItem("token") && localStorage.getItem("userName"),
    );
    if (isAuthenticated) {
      navigate("/dashboard"); // Авторизован -> летит в личный кабинет
    } else {
      setIsAuthOpen(true); // Гость -> открываем модалку входа
    }
  };

  return (
    <>
      <section className={classes.promoSection}>
        <div className={classes.container}>
          {/* Левая часть: Главный баннер */}
          <div className={classes.banner}>
            <div className={classes.bannerContent}>
              <div className={classes.bannerContentTop}>
                <h1 className={classes.bannerTitle}>
                  <div className={classes.cashback}>Кэшбек 10%</div>
                  на любимые категории по нашей новой карте
                </h1>
                <p className={classes.bannerText}>
                  Успейте оформить карту до 30 октября
                </p>
              </div>
              <div className={classes.bannerContentBot}>
                <button className={classes.bannerBtn}>
                  <div className={classes.bannerBtnInside}>
                    <span>Оформить лучшую карту</span>
                    <img src={Apply} alt="" />
                  </div>
                </button>
                <div className={classes.partnersBlock}>
                  <div className={classes.partnersIcons}>
                    <img className={classes.partnersImg} src={zolotoe} alt="" />
                    <img className={classes.partnersImg} src={wb} alt="" />
                    <img className={classes.partnersImg} src={ostin} alt="" />
                    <img className={classes.partnersImg} src={more} alt="" />
                  </div>
                  <span>
                    <strong>Кэшбек 10%</strong>
                    <br />
                    на все покупки
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть: Вход в личный кабинет */}
          <div className={classes.loginWidget}>
            <div>
              <h2 className={classes.loginTitle}>Личный кабинет</h2>
              <p className={classes.loginText}>
                Мы обновили дизайн и добавили подарки для наших клиентов
                <img src={Up} alt="" />
              </p>
            </div>
            <button className={classes.loginBtn} onClick={() => handleAuth()}>
              <div className={classes.loginBtnInside}>
                <span>В личный кабинет</span>
                <img src={Enter} alt="" />
              </div>
            </button>
          </div>
        </div>
      </section>
      <AuthModal
        key={isAuthOpen}
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </>
  );
}
