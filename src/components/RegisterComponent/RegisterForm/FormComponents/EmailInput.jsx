import { useStyles } from "./style";

export default function EmailInput({
  register,
  isLoading,
  errors,
  clearErrors,
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
              errors.email ? classes.formInputError : classes.formInput
            }
            {...register("email", {
              required: "Электронная почта обязательна для заполнения",
              // Встроенная валидация корректности формата email
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Некорректный формат адреса электронной почты",
              },
              onChange: () => {
                clearErrors("email"); // Мгновенно стираем ошибку при вводе
              },
            })}
          />
        </label>
        <span className={classes.regMsg}>Укажите адрес электронной почты</span>
      </div>
    </>
  );
}
