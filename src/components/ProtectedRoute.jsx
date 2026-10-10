import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  // Проверяем наличие токена авторизации в памяти браузера
  const token = localStorage.getItem("token");

  // Если токена нет — перенаправляем на главную страницу (replace сотрет историю переходов)
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Если токен есть — разрешаем роутеру отрендерить вложенный компонент
  return <Outlet />;
}
