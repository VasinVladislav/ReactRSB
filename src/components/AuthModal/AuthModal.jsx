import { FormProvider } from "react-hook-form";
import { useStyles } from "./style";
import StepOne from "./AuthComponents/StepOne";
import StepTwo from "./AuthComponents/StepTwo";
import { useAuthForm } from "./AuthComponents/useAuthForm";

export default function AuthModal({ isOpen, onClose }) {
  const classes = useStyles();

  // Инициализация React Hook Form под именем methods

    const {
    step,
    setStep,
    isLoading,
    methods,
    handlePhoneSubmit,
    handlePasswordSubmit
  } = useAuthForm(onClose);

  if (!isOpen) return null;

  return (
    <div className={classes.modalOverlay} onClick={onClose}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={classes.closeBtn} onClick={onClose}>
          ×
        </button>
        <h2 className={classes.modalTitle}>Вход в интернет-банк</h2>
        <FormProvider {...methods}>
          {/* ШАГ 1: ВВОД НОМЕРА ТЕЛЕФОНА */}
          {step === 1 && (
            <StepOne
              classes={classes}
              handlePhoneSubmit={handlePhoneSubmit}
              isLoading={isLoading}
            />
          )}

          {/* ШАГ 2: ВВОД ПАРОЛЯ */}
          {step === 2 && (
            <StepTwo
              classes={classes}
              handlePasswordSubmit={handlePasswordSubmit}
              isLoading={isLoading}
              setStep={setStep}
            />
          )}
        </FormProvider>
      </div>
    </div>
  );
}
