import { useState } from 'react';

// Поиск пользователя по геолокации

export function useMapGeolocation() {
    const [userCoords, setUserCoords] = useState(null);
    const [isLocating, setIsLocating] = useState(false);

    const fetchUserLocation = async (ymapsInstance, mapRef) => {
        if (!ymapsInstance.geolocation) {
            console.warn("Модуль geolocation не загружен.");
            return;
        }

        setIsLocating(true);

        try {
            // Ожидаем результат выполнения геокатора Яндекса
            const result = await ymapsInstance.geolocation.get({
                provider: 'auto',
                mapStateAutoApply: false
            });

            const geoObject = result.geoObjects.get(0);
            const coords = geoObject.geometry.getCoordinates();
            setUserCoords(coords);


            // 1. Сначала берем Административный округ / Область / Республику
            const areas = geoObject.getAdministrativeAreas();
            let regionName = areas.length ? areas[0] : null;

            // 2. Если область не вернулась, берем город (как запасной вариант)
            if (!regionName) {
                const localities = geoObject.getLocalities();
                regionName = localities.length ? localities[0] : null;
            }

            // 3. Отправляем название региона через событие
            if (regionName) {
                const event = new CustomEvent('user-city-detected', { detail: regionName });
                window.dispatchEvent(event);
            }


            if (mapRef && mapRef.current) {
                mapRef.current.setCenter(coords, 10, { duration: 800 });
            }
        } catch (err) {
            console.error("Ошибка при определении геолокации:", err);
        } finally {
            setIsLocating(false);
        }
    };

    return { userCoords, fetchUserLocation, isLocating };
}
