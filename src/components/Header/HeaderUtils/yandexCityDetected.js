import { findRegionByYmapsName } from "./findRegionByYmapsName";

// Слушаем событие поиска города 'user-city-detected'

export const yandexCityDetected = (setSelectedCity) => {
  const handleCityDetected = (event) => {
    const ymapsRegionName = event.detail; // Сюда прилетает строка, например "Татарстан"
    const matchedRegion = findRegionByYmapsName(ymapsRegionName); // Здесь название региона из нашей базы

    if (matchedRegion) {
      setSelectedCity(matchedRegion);
      localStorage.setItem("user_selected_city", JSON.stringify(matchedRegion));
    }
  };

  window.addEventListener("user-city-detected", handleCityDetected);
  return () => {
    window.removeEventListener("user-city-detected", handleCityDetected);
  };
};
