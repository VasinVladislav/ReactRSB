import { useState } from "react";
import { formatPhoneNumber } from "./formatPhoneNumber";

export default function StepOne({
  classes,
  handlePhoneSubmit,
  isLoading,
  register,
  errors,
  clearErrors,
}) {
  // Локальный стейт исключительно для разблокировки кнопки
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      <form onSubmit={handlePhoneSubmit} className={classes.form}>
        <div className={classes.inputGroup}>
          <label className={classes.label}>Номер телефона</label>
          <input
            type="tel"
            maxLength={18}
            className={`${classes.input} ${errors.phone ? classes.inputError : ""}`}
            placeholder="+7 (999) 000-00-00"
            disabled={isLoading}
            {...register("phone", {
              onChange: (e) => {
                // 1. Сначала отрабатывает маска
                e.target.value = formatPhoneNumber(e.target.value);
                // 2. Затем стирается красная ошибка, так как юзер начал вводить новые цифры
                clearErrors("phone");
                // 3. Считаем количество символов нативного инпута
                // Если строка достигла длины маски (18 символов), активируем кнопку
                if (e.target.value.length === 18) {
                  setIsReady(true);
                } else {
                  // Если пользователь стер хотя бы один символ, кнопка снова гаснет
                  setIsReady(false);
                }
              },
            })}
          />

          {errors.phone && (
            <span className={classes.errorText}>{errors.phone.message}</span>
          )}
        </div>
        <button
          type="submit"
          className={classes.submitBtn}
          disabled={isLoading || !isReady}
        >
          {isLoading ? <div className={classes.spinner}></div> : "Далее"}
        </button>
      </form>
    </>
  );
}
