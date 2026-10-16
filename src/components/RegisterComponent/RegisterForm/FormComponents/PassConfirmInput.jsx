import { useStyles } from "./style";

export default function PassConfirmInput({ register, isLoading, errors }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.formContainer}>
        <label className={classes.formLabel}>
          <span>Повторите пароль</span>
          <input
            type="password"
            placeholder="••••••••"
            disabled={isLoading}
            className={
              errors.confirmPassword
                ? classes.formInputError
                : classes.formInput
            }
            {...register("confirmPassword", {
              required: "Повторите пароль",
              validate: (value, formValues) =>
                value === formValues.password || "Пароли не совпадают",
            })}
          />
        </label>
        <span className={classes.regMsg}>Повторите пароль</span> 
      </div>
    </>
  );
}
