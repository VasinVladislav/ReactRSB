import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./style";
import enter from "./icons/enter.png";
import close from "./icons/close.png";
import settings from "./icons/settings.png";

export default function LoginButton({ setIsAuthOpen }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(() => {
    return Boolean(
      localStorage.getItem("token") && localStorage.getItem("userName"),
    );
  });
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });

  // Функция для выхода из аккаунта
  const handleLogout = () => {
    localStorage.clear(); // Стираем токен и имя
    setIsAuth(false);
    setUserName("");
    navigate("/"); // Возвращаем на главную
  };

  return (
    <>
      {isAuth ? (
        <div className={classes.userBtn}>
          {/* Имя пользователя */}
          <button
            className={classes.enterBtn}
            onClick={() => navigate("/dashboard")}
          >
            <span className={classes.userGreeting}>{userName}</span>
          </button>
          {/* Кнопка настроек */}
          <button onClick={() => alert("Раздел настроек профиля находится в разработке")} className={classes.settingsBtn}>
            <img src={settings} alt="Настройки" />
          </button>

          {/* Кнопка выхода */}
          <button onClick={handleLogout} className={classes.logoutBtn}>
            <img src={close} alt="Выйти" />
          </button>
        </div>
      ) : (
        <button
          className={classes.loginBtn}
          onClick={() => setIsAuthOpen(true)}
        >
          <img src={enter} alt="Вход" /> Интернет-банк
        </button>
      )}
    </>
  );
}
