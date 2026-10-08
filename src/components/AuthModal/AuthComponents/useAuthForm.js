import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { phoneSchema, passwordSchema } from "../validationSchema";
import { authService } from "../../../services/authService";

export function useAuthForm(onClose) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Инициализация React Hook Form под именем methods
  const methods = useForm({
    mode: "onTouched",
    defaultValues: { phone: "", password: "" },
  });

  const { getValues, setError } = methods;

  // Изолированная логика первого шага
  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const phoneValue = getValues("phone");

    try {
      await phoneSchema.validate({ phone: phoneValue });
      const data = await authService.verifyPhone(phoneValue);
      setIsLoading(false);

      if (data.action === "request_password") setStep(2);
      else if (data.action === "register_profile") {
        alert(data.message);
        onClose();
        navigate("/register");
      }
    } catch (err) {
      setIsLoading(false);
      const message = err.response?.data?.message || err.message || "Ошибка сервера";
      setError("phone", { type: "manual", message });
    }
  };

  // Изолированная логика второго шага
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { phone: phoneValue, password: passwordValue } = getValues();

    try {
      await passwordSchema.validate({ password: passwordValue });
      const data = await authService.login(phoneValue, passwordValue);
      setIsLoading(false);

      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.userName);
      onClose();
      navigate("/dashboard");
    } catch (err) {
      setIsLoading(false);
      const message = err.response?.data?.message || "Сервер недоступен.";
      setError("password", { type: "manual", message });
    }
  };

  return {
    step,
    setStep,
    isLoading,
    methods,
    handlePhoneSubmit,
    handlePasswordSubmit
  };
}
