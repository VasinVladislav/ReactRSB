import { useState } from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useStyles } from "./style"; // JSS-стили
import { phoneSchema, passwordSchema } from "./validationSchema";
import StepOne from "./AuthComponents/StepOne";
import StepTwo from "./AuthComponents/StepTwo";

export default function AuthModal({ isOpen, onClose }) {
  const classes = useStyles();
  const [step, setStep] = useState(1); // 1 — телефон, 2 — СМС-код
  const [isLoading, setIsLoading] = useState(false);

  // Инициализация React Hook Form
  const {
    register,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: { phone: "", password: "" },
  });

  // ШАГ 1: Проверка телефона
  const handlePhoneSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    setIsLoading(true); // Включаем загрузку

    const phoneValue = getValues("phone");

    try {
      await phoneSchema.validate({ phone: phoneValue });

      // Симулируем POST-запрос проверки телефона на бэкенде
      setTimeout(() => {
        setIsLoading(false);  // Выключаем загрузку
        setStep(2); // Переходим на следующий шаг
      }, 1500);
    } catch (err) {
      setIsLoading(false);
      // Если Yup нашел ошибку, записываем её в стейт React Hook Form
      setError("phone", { type: "manual", message: err.message });
    }
  };

  // ШАГ 2: Проверка пароля
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const passwordValue = getValues("password");

    try {
      await passwordSchema.validate({ password: passwordValue });

      // Симулируем POST-запрос авторизации по Axios на бэкенд
      setTimeout(() => {
        setIsLoading(false);
        alert(
          `Успешный вход через симметричную форму!\nЛогин: ${passwordValue}`,
        );
        onClose();
      }, 1500);
    } catch (err) {
      setIsLoading(false);
      // Если Yup нашел ошибку в пароле, записываем её в стейт
      setError("password", { type: "manual", message: err.message });
    }
  };

  if (!isOpen) return null;

  return (
    <div className={classes.modalOverlay} onClick={onClose}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={classes.closeBtn} onClick={onClose}>
          ×
        </button>
        <h2 className={classes.modalTitle}>Вход в интернет-банк</h2>

        {/* ШАГ 1: ВВОД НОМЕРА ТЕЛЕФОНА */}
        {step === 1 && (
          <StepOne
            classes={classes}
            handlePhoneSubmit={handlePhoneSubmit}
            isLoading={isLoading}
            register={register}
            errors={errors}
            clearErrors={clearErrors}
          />
        )}

        {/* ШАГ 2: ВВОД СМС-КОДА ИЗ УВЕДОМЛЕНИЯ */}
        {step === 2 && (
          <StepTwo
            classes={classes}
            handlePasswordSubmit={handlePasswordSubmit}
            isLoading={isLoading}
            register={register}
            setStep={setStep}
            errors={errors}
            clearErrors={clearErrors}
          />
        )}
      </div>
    </div>
  );
}
