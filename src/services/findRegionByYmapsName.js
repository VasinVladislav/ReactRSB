// Функция поиска региона в REGIONS_MENU_DATA по названию области/республики от Яндекса
export const findRegionByYmapsName = (locationMenuData, ymapsRegionName) => {
  if (!ymapsRegionName) return null;
  const target = ymapsRegionName.toLowerCase();

  // Очищаем регион присланный Яндексом
  const cleanTarget = target
    .replace("ская область", "")
    .replace("ская республика", "")
    .replace("республика ", "")
    .replace(" край", "")
    .trim();

  // Ищем совпадение напрямую в плоском массиве из бэкенда
  const found = locationMenuData.find((item) => {
    const textLow = item.text.toLowerCase();

    // Очищаем текстовое название региона из базы данных
    const cleanText = textLow
      .replace("ская область", "")
      .replace("ская республика", "")
      .replace("республика ", "")
      .replace(" край", "")
      .trim();

    // Проверяем частичное или полное совпадение корней (например, "татарстан" и "татарстан")
    return cleanText.includes(cleanTarget) || cleanTarget.includes(cleanText);
  });

  // Если совпадение найдено, возвращаем объект региона { id, name, text }, иначе null
  return found || null;
};
