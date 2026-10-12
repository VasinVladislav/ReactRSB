import { useStyles } from "./style";

export default function PhoneInput({ register }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.formContainer}>
        <label className={classes.formLabel}>
          <span>Номер телефона</span>
          <input
            type="text"
            disabled
            autoComplete="off" // ДЛЯ ЧИСТОТЫ КОНСОЛИ
            className={classes.formInputPhone}
            {...register("phone")}
          />
        </label>
      </div>
    </>
  );
}
