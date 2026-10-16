import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { authService } from "../../../services/authService";
import ChangePassInputs from "./ChangeInputs/ChangePassInputs";

export default function ChangePass({ classes, setChangePassWindow }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useFormContext();

  const onPasswordSubmit = async (data) => {
    setIsLoading(true);

    try {
      const res = await authService.changePassword(
        data.oldPassword,
        data.newPassword,
      );
      setIsLoading(false);
      setChangePassWindow(false);
      alert(res.message);
      reset();
    } catch (err) {
      setIsLoading(false);
      const errorMessage =
        err.response?.data?.message || "Произошла непредвиденная ошибка";
      alert(errorMessage);
    }
  };

  // Функция для безопасного закрытия окна без триггера сабмита
  const handleCloseWindow = () => {
    reset(); // Очищаем текст и стираем красные ошибки RHF перед уходом
    setChangePassWindow(false);
  };

  return (
    <>
      <section className={classes.userInfo}>
        <h3>Изменить пароль</h3>

        <form
          onSubmit={handleSubmit(onPasswordSubmit)}
          className={classes.changeForm}
        >
          <ChangePassInputs
            register={register}
            errors={errors}
            isLoading={isLoading}
            clearErrors={clearErrors}
          />
          <button
            type="submit"
            disabled={isLoading}
            className={classes.actionBtn}
          >
            {isLoading ? "Сохранение..." : "Обновить пароль"}
          </button>
          <button
            type="button"
            className={classes.backBtn}
            onClick={handleCloseWindow}
          >
            Назад
          </button>
        </form>
      </section>
    </>
  );
}
