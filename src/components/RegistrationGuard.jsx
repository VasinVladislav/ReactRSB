import { Navigate, Outlet } from "react-router-dom";

export default function RegistrationGuard() {
  // Проверяем, зафиксировал ли пользователь телефон на Шаге 1
  const pendingPhone = localStorage.getItem("pendingPhone");

  // Если телефона в памяти нет — значит, юзер пытается зайти «с улицы». Выкидываем на главную!
  if (!pendingPhone) {
    return <Navigate to="/" replace />;
  }

  // Если телефон есть — пускаем заполнять анкету
  return <Outlet />;
}
