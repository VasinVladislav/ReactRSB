import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./style";
import enter from "../../icons/enter.png";

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
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {/* Имя пользователя */}
          <span
            className={classes.userGreeting}
            style={{ fontWeight: "600", color: "#1a1a1a" }}
          >
            👤 {userName}
          </span>
          {/* Кнопка выхода */}
          <button
            onClick={handleLogout}
            className={classes.logoutBtn}
          >
            Выйти
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
