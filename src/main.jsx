import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";

// базовый префикс (Axios сам подставит /api/ ко всем запросам)
axios.defaults.baseURL = import.meta.env.VITE_API_URL || "/";

// ГЛОБАЛЬНЫЙ ПЕРЕХВАТЧИК ЗАПРОСОВ (AXIOS INTERCEPTOR)
axios.interceptors.request.use(
  (config) => {
    // Перед каждым вызовом заглядываем в память браузера
    const token = localStorage.getItem("token");

    // Если токен сессии (GUID из .NET) существует — прикрепляем его по стандарту Bearer
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
