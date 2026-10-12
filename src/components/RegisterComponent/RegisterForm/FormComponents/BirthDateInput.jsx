import { useStyles } from "./style";

export default function BirthDateInput({ register, isLoading, errors }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.formContainer}>
        <label className={classes.formLabel}>
          <span>Дата рождения</span>
          <input
            type="date"
            disabled={isLoading}
            className={
              errors.birthDate ? classes.formInputError : classes.formInput
            }
            {...register("birthDate", {
              required: "Дата рождения обязательна",
            })}
          />
        </label>
        <span className={classes.regMsg}>Укажите дату рождения</span>
      </div>
    </>
  );
}
