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

            const coords = result.geoObjects.get(0).geometry.getCoordinates();
            setUserCoords(coords);

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
