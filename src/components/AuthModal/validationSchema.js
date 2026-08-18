import * as yup from "yup";
import "yup-phone-lite"; 

// Схема для Шага 1 (Телефон)
export const phoneSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Номер телефона обязателен для входа")
    .phone("RU", "Введите корректный номер телефона"),
});

// Схема для Шага 2 (Пароль или СМС-код)
export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Введите пароль")
    .min(6, "Пароль должен быть не менее 6 символов"),
});
