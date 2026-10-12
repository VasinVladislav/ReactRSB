import { useState } from "react";
import { useStyles } from "./style";

export default function MiddleNameInput({
  register,
  isLoading,
  errors,
  setValue,
  clearErrors,
}) {
  const classes = useStyles();
  const [noMiddleName, setNoMiddleName] = useState(false);
  return (
    <>
      <div className={classes.formContainer}>
        <label className={classes.formLabel}>
          <span>Ваше отчество</span>
          <input
            type="text"
            placeholder={
              noMiddleName ? "Отчество отсутствует" : "Введите отчество"
            }
            disabled={isLoading || noMiddleName}
            className={
              errors.middleName ? classes.formInputError : classes.formInput
            }
            {...register("middleName", {
              required: !noMiddleName && "Отчество обязательно для заполнения",
            })}
          />
        </label>

        <span className={classes.regMsg}>Укажите отчество как в паспорте</span>

        {/* Чекбокс отсутствия отчества */}
        <label className={classes.checkboxLabel}>
          <input
            type="checkbox"
            disabled={isLoading}
            checked={noMiddleName}
            onChange={(e) => {
              const isChecked = e.target.checked;
              setNoMiddleName(isChecked); // Меняем локальный стейт
              setValue("hasNoMiddleName", isChecked); // Синхронизируем значение для отправки в форму

              if (isChecked) {
                setValue("middleName", ""); // Очищаем поле отчества
                clearErrors("middleName"); // Стираем красные ошибки
              }
            }}
          />
          У меня нет отчества
        </label>
      </div>
    </>
  );
}
