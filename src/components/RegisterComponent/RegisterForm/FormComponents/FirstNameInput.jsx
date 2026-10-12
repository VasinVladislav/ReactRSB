import { useStyles } from "./style";

export default function FirstNameInput({ register, isLoading, errors }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.formContainer}>
        <label className={classes.formLabel}>
          <span>Ваше имя</span>
          <input
            type="text"
            placeholder="Введите имя"
            disabled={isLoading}
            className={
              errors.firstName ? classes.formInputError : classes.formInput
            }
            {...register("firstName", {
              required: "Имя обязательно для заполнения",
            })}
          />
        </label>
        <span className={classes.regMsg}>Укажите имя как в паспорте</span>
      </div>
    </>
  );
}
