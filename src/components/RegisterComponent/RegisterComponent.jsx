import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStyles } from "./style";
import FormComponents from "./RegisterForm/RegisterForm";

export default function RegisterComponent() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  // Достаем из localStorage сохраненный на первом шаге телефон,
  const savedPhone = localStorage.getItem("pendingPhone") || "";

  const methods = useForm({
    mode: "onTouched",
    defaultValues: {
      phone: savedPhone,
      lastName: "",
      firstName: "",
      middleName: "",
      hasNoMiddleName: false,
      birthDate: "",
      password: "",
      email: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (data) => {
    setIsLoading(true);
    setServerError("");

    try {
      // Отправляем данные на регистрацию в .NET бэкенд
      const baseUrl = import.meta.env.VITE_API_URL || "/";
      const response = await axios.post(`${baseUrl}user/register-profile`, {
        phone: data.phone,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        middleName: data.hasNoMiddleName ? null : data.middleName,
        hasNoMiddleName: data.hasNoMiddleName,
        email: data.email,
        birthDate: data.birthDate,
      });
      setIsLoading(false);

      // Сохраняем выданные данные сессии
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userName", response.data.userName);

      alert(
        `Регистрация успешна! Добро пожаловать, ${response.data.userName}!`,
      );

      // Перенаправляем клиента в личный кабинет
      navigate("/dashboard");
    } catch (err) {
      setIsLoading(false);
      setServerError(
        err.response?.data?.message ||
          "Ошибка при регистрации. Сервер недоступен.",
      );
    }
  };

  return (
    <FormProvider {...methods}>
      <div className={classes.main}>
        <div className={classes.mainContainer}>
          <h2>Создание профиля интернет-банка</h2>
          <p>Заполните данные для завершения регистрации</p>
          {serverError && (
            <p className={classes.serverError}>⚠️ {serverError}</p>
          )}
          <FormComponents isLoading={isLoading} onSubmit={onSubmit} />
        </div>
      </div>
    </FormProvider>
  );
}
