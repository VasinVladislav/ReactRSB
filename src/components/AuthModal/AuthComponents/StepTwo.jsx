export default function StepTwo({
  classes,
  handlePasswordSubmit,
  isLoading,
  register,
  errors,
  setStep,
  clearErrors,
}) {
  return (
    <>
      <form onSubmit={handlePasswordSubmit} className={classes.form}>
        <div className={classes.inputGroup}>
          <label className={classes.label}>Пароль от интернет-банка</label>
          <input
            type="password"
            maxLength={6}
            className={`${classes.input} ${errors.password ? classes.inputError : ""}`}
            placeholder="••••••••"
            disabled={isLoading}
            {...register("password", {
              onChange: () => {
                // Стираем ошибку пароля, как только юзер нажал любую клавишу в этом инпуте
                clearErrors("password");
              },
            })}
          />

          {errors.password && (
            <span className={classes.errorText}>{errors.password.message}</span>
          )}
        </div>
        <button
          type="submit"
          className={classes.submitBtn}
          disabled={isLoading}
        >
          {isLoading ? <div className={classes.spinner}></div> : "Войти"}
        </button>
        <button
          type="button"
          className={classes.backBtn}
          onClick={() => setStep(1)}
          disabled={isLoading}
        >
          ← Изменить номер телефона
        </button>
      </form>
    </>
  );
}
