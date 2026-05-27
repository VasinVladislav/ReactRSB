import { useEffect } from 'react';

export const useUserLocation = (mapRef, ymaps) => {
    useEffect(() => {
        if (!navigator.geolocation || !mapRef.current) return;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                
                mapRef.current.setCenter([latitude, longitude], 13, {
                    duration: 1000,
                    timingFunction: 'ease-in-out'
                });
            },
            (error) => {
                console.warn("Геопозиция недоступна:", error.message);
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    }, [mapRef, ymaps]); // Сработает, как только карта и API будут готовы
};
