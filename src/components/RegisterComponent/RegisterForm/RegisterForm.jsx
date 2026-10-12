import { useFormContext } from "react-hook-form";
import { useStyles } from "./style";
import PhoneInput from "./FormComponents/PhoneInput";
import FirstNameInput from "./FormComponents/FirstNameInput";
import LastNameInput from "./FormComponents/LastNameInput";
import MiddleNameInput from "./FormComponents/MiddleNameInput";
import PasswordInput from "./FormComponents/PasswordInput";
import PassConfirmInput from "./FormComponents/PassConfirmInput";
import BirthDateInput from "./FormComponents/BirthDateInput";
import EmailInput from "./FormComponents/EmailInput";

export default function FormComponents({ isLoading, onSubmit }) {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useFormContext();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formSubmit}>
        <div className={classes.formBlock}>
          <div className={classes.formBlockItem}>
            {/* Поле телефона (заблокировано для изменения, берется из Шага 1) */}
            <PhoneInput register={register} />

            {/* Поле Имени */}
            <FirstNameInput
              register={register}
              isLoading={isLoading}
              errors={errors}
            />

            {/* Поле Фамилии */}
            <LastNameInput
              register={register}
              isLoading={isLoading}
              errors={errors}
            />

            {/* Поле Отчества */}
            <MiddleNameInput
              register={register}
              isLoading={isLoading}
              errors={errors}
              setValue={setValue}
              clearErrors={clearErrors}
            />
          </div>

          <div className={classes.formBlockItem}>
            {/* Поле Почты */}
            <EmailInput
              register={register}
              isLoading={isLoading}
              errors={errors}
              clearErrors={clearErrors}
            />

            {/* Поле Даты Рождения */}
            <BirthDateInput
              register={register}
              isLoading={isLoading}
              errors={errors}
            />

            {/* Поле Пароля */}
            <PasswordInput
              register={register}
              isLoading={isLoading}
              errors={errors}
              clearErrors={clearErrors}
            />

            {/* Подтверждение Пароля */}
            <PassConfirmInput
              register={register}
              isLoading={isLoading}
              errors={errors}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={classes.submitBtn}
        >
          {isLoading ? "Регистрация..." : "Завершить регистрацию"}
        </button>
      </form>
    </>
  );
}
