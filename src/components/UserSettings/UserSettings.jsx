import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import PersonalData from "./UserSettingsComponents/PersonalData";
import ChangePass from "./UserSettingsComponents/ChangePass";
import { useStyles } from "./style";
import ChangeEmail from "./UserSettingsComponents/ChangeEmail";

export default function UserSettings() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [changePassWindow, setChangePassWindow] = useState(false);
  const [changeEmailWindow, setChangeEmailWindow] = useState(false);
  const [error, setError] = useState(""); // Стейт для сетевых ошибок

  const methods = useForm({
    mode: "onTouched",
  });
  // Загружаем данные профиля при открытии страницы
  useEffect(() => {
    authService
      .getProfile()
      .then((data) => setProfile(data))
      .catch((err) => {
        console.error(err);
        setError("Сессия истекла. Перенаправление на главную...");
        // Если токен невалидный, очищаем мусор и через 2 секунды отправляем авторизоваться
        setTimeout(() => {
          localStorage.clear();
          navigate("/");
        }, 2000);
      });
  }, [navigate]);

  if (error) return <div className={classes.errorMsg}>⚠️ {error}</div>;
  if (!profile) return <div>Загрузка настроек...</div>;

  return (
    <div className={classes.main}>
      <div className={classes.mainContainer}>
        {/* БЛОК 1: АНКЕТА КЛИЕНТА (ТОЛЬКО ДЛЯ ЧТЕНИЯ) */}
        <PersonalData classes={classes} profile={profile} />

        {/* БЛОК 2: СМЕНА ПАРОЛЯ */}
        <FormProvider {...methods}>
          {!changePassWindow && !changeEmailWindow && (
            <div className={classes.userInfo}>
              <button
                className={classes.actionBtn}
                onClick={() => setChangePassWindow(true)}
              >
                Изменить пароль
              </button>
              <button
                className={classes.actionBtn}
                onClick={() => setChangeEmailWindow(true)}
              >
                Изменить адрес электронной почты
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className={classes.actionBtn}
              >
                Вернуться в кабинет
              </button>
            </div>
          )}
          {changePassWindow && (
            <ChangePass
              classes={classes}
              setChangePassWindow={setChangePassWindow}
            />
          )}
          {changeEmailWindow && (
            <ChangeEmail
              classes={classes}
              setChangeEmailWindow={setChangeEmailWindow}
            />
          )}
        </FormProvider>
      </div>
    </div>
  );
}
