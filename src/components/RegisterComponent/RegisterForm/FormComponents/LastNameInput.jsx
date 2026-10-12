import { useStyles } from "./style";

export default function LastNameInput({ register, isLoading, errors }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.formContainer}>
        <label className={classes.formLabel}>
          <span>Ваша фамилия</span>
          <input
            type="text"
            placeholder="Введите фамилию"
            disabled={isLoading}
            className={
              errors.lastName ? classes.formInputError : classes.formInput
            }
            {...register("lastName", {
              required: "Фамилия обязательна для заполнения",
            })}
          />
        </label>
        <span className={classes.regMsg}>Укажите фамилию как в паспорте</span>
      </div>
    </>
  );
}
