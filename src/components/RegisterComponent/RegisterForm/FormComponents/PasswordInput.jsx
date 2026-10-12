import { useStyles } from "./style";

export default function PasswordInput({
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
          <span>Придумайте пароль (от 8 символов)</span>
          <input
          type="password"
          placeholder="••••••••"
          disabled={isLoading}
          maxLength={20}
          className={
            errors.password ? classes.formInputError : classes.formInput
          }
          
          {...register("password", {
            required: "Пароль обязателен",
            
            onChange: (e) => {
              e.target.value = e.target.value.replace(/[^A-Za-z\d@$!%*?&_-]/g, "");
              clearErrors("password");
            },

            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&_-]{8,20}$/,
              message: "Пароль должен быть от 8 до 20 символов, содержать латинские буквы, цифры и спецсимволы (@$!%*?&_-)",
            },
          })}
        />
        </label>        
          <span className={classes.regMsg}>Пароль должен содержать латинские буквы и цифры</span>       
      </div>
    </>
  );
}
