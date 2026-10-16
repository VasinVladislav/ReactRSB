import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { authService } from "../../../services/authService";
import ChangeEmailInputs from "./ChangeInputs/ChangeEmailInputs";

export default function ChangeEmail({ classes, setChangeEmailWindow }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useFormContext();

  const onEmailSubmit = async (data) => {
    setIsLoading(true);

    try {
      const res = await authService.changeEmail(data.newEmail);
      setIsLoading(false);
      setChangeEmailWindow(false);
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
    setChangeEmailWindow(false);
  };

  return (
    <>
      <section className={classes.userInfo}>
        <h3>Изменить адрес электронной почты</h3>

        <form
          onSubmit={handleSubmit(onEmailSubmit)}
          className={classes.changeForm}
        >
          <ChangeEmailInputs
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
            {isLoading ? "Сохранение..." : "Обновить e-mail"}
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
