import { useStyles } from "./style";

export default function ChangeEmailInputs({
  register,
  errors,
  clearErrors,
  isLoading,
}) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.formContainer}>
        <label className={classes.formLabel}>
          <span>Электронная почта</span>
          <input
            type="email"
            placeholder="example@mail.com"
            disabled={isLoading}
            // Убираем автозаполнение старых адресов для чистоты консоли
            autoComplete="off"
            className={
              errors.newEmail ? classes.formInputError : classes.formInput
            }
            {...register("newEmail", {
              required: "Электронная почта обязательна для заполнения",
              // Встроенная валидация корректности формата email
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Некорректный формат адреса электронной почты",
              },
            })}
            onFocus={() => clearErrors("newEmail")}
          />
        </label>
        <span className={classes.regMsg}>Укажите адрес электронной почты</span>
      </div>
    </>
  );
}
