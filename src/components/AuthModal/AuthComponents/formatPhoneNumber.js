export const formatPhoneNumber = (value) => {
  if (!value) return value;
  
  // Очищаем и сразу обрезаем до 11 цифр, сохраняя переменную в const
  const cleaned = value.replace(/[^\d]/g, "").slice(0, 11);
  const phoneNumberLength = cleaned.length;

  if (phoneNumberLength < 2) return "+7";
  if (phoneNumberLength < 4) return `+7 (${cleaned.slice(1)}`;
  if (phoneNumberLength < 8) return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4)}`;
  if (phoneNumberLength < 10) return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`;
};

