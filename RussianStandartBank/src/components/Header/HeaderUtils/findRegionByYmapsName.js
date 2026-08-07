import { REGIONS_MENU_DATA } from "../LevelThree/Cities";

// Функция поиска региона в REGIONS_MENU_DATA по названию области/республики от Яндекса
export const findRegionByYmapsName = (ymapsRegionName) => {
  if (!ymapsRegionName) return null;
  const target = ymapsRegionName.toLowerCase();

  for (const group of REGIONS_MENU_DATA) {
    const found = group.items.find((item) => {
      const textLow = item.text.toLowerCase();

      // Очищаем от стандартных слов для точного сравнения
      // Например: "новосибирская область" -> "новосибирск", "республика татарстан" -> "татарстан"

      // Очищаем нашу базу с регионами
      const cleanText = textLow
        .replace("ская область", "")
        .replace("ская республика", "")
        .replace("республика ", "")
        .replace(" край", "")
        .trim();

      // Очищаем регион присланный Яндексом
      const cleanTarget = target
        .replace("ская область", "")
        .replace("ская республика", "")
        .replace("республика ", "")
        .replace(" край", "")
        .trim();

      // Проверяем частичное или полное совпадение корней (например, "татарстан" и "татарстан")
      return cleanText.includes(cleanTarget) || cleanTarget.includes(cleanText);
    });

    // Если совпадение есть, то возвращаем название региона из нашей базы
    if (found) return found;
  }

  return null;
};
