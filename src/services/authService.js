import axios from "axios";

export const authService = {
  // Запрос Шага 1: Проверка и фиксация телефона
  verifyPhone: async (phone) => {
    const response = await axios.post("user/verify-phone", { phone });
    return response.data; // Возвращаем только полезную нагрузку (action, message)
  },

  // Запрос Шага 2А: Логин пользователя
  login: async (phone, password) => {
    const response = await axios.post("user/login", { phone, password });
    return response.data; // Возвращает token и userName
  },

  // Запрос Шага 2Б: Регистрация нового профиля
  registerProfile: async (phone, password, firstName) => {
    const response = await axios.post("user/register-profile", { phone, password, firstName });
    return response.data;
  },
  // Получить данные профиля (Безлично! Токен прикрепится автоматически перехватчиком)
  getProfile: async () => {
    const response = await axios.get("user/profile-info");
    return response.data; // Возвращает { lastName, firstName, middleName, email, birthDate }
  },

  // Сменить пароль (Тоже безлично)
  changePassword: async (oldPassword, newPassword) => {
    const response = await axios.post("user/change-password", { oldPassword, newPassword });
    return response.data;
  },

    // Сменить электронную почту
  changeEmail: async (newEmail) => {
    const response = await axios.post("user/change-email", { newEmail });
    return response.data;
  }

};
