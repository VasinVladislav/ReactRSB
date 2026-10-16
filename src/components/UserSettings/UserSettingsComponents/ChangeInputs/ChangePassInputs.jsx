import { useStyles } from "./style";

export default function ChangePassInputs({
  register,
  errors,
  isLoading,
  clearErrors,
}) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.formContainer}>
        <label className={classes.formLabel}>
          <span>Введите действующий пароль</span>
          <input
            type="password"
            placeholder="••••••••"
            className={
              errors.oldPassword ? classes.formInputError : classes.formInput
            }
            {...register("oldPassword", {
              required: "Введите действующий пароль",
            })}
            onFocus={() => clearErrors("oldPassword")}
          />
        </label>
        {errors.oldPassword && (
          <span className={classes.errorMsg}>{errors.oldPassword.message}</span>
        )}
      </div>
      <div className={classes.formContainer}>
        <label className={classes.formLabel}>
          <span>Придумайте новый пароль (от 8 символов)</span>
          <input
            type="password"
            placeholder="••••••••"
            disabled={isLoading}
            maxLength={20}
            className={
              errors.newPassword ? classes.formInputError : classes.formInput
            }
            {...register("newPassword", {
              required: "Пароль обязателен",

              onChange: (e) => {
                e.target.value = e.target.value.replace(
                  /[^A-Za-z\d@$!%*?&_-]/g,
                  "",
                );
                clearErrors("newPassword");
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&_-]{8,20}$/,
                message:
                  "Пароль должен быть от 8 до 20 символов, содержать латинские буквы, цифры и спецсимволы (@$!%*?&_-)",
              },
            })}
            onFocus={() => clearErrors("newPassword")}
          />
        </label>
        <span className={classes.regMsg}>
          Пароль должен содержать латинские буквы и цифры
        </span>
      </div>
    </>
  );
}
