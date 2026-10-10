import axios from "axios";

// Функция загрузки данных для всего сайта
export async function siteMenuLoader() {
  try {
    // Явно указываем адрес прямо внутри лоадера, обходя глобальные задержки
    const baseUrl = import.meta.env.VITE_API_URL || '/';

    const headerResponse = await axios.get(`${baseUrl}HeaderMenu`);
    const locationResponse = await axios.get(`${baseUrl}LocationMenu`);

    
    // Защитная проверка на случай, если бэкенд пришлет HTML вместо JSON-массива
    const headerData = Array.isArray(headerResponse.data) ? headerResponse.data : [];
    const locationData = Array.isArray(locationResponse.data) ? locationResponse.data : [];
    
    return {
      headerMenu: headerData,
      locationMenu: locationData
    };
  } catch (error) {
    console.error("Ошибка загрузки меню:", error);
    return { headerMenu: [], locationMenu: [] };
  }
}
