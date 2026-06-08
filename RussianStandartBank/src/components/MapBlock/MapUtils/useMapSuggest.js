import { useRef, useEffect } from 'react';
import { useMapGeolocation } from './useMapGeolocation';

// Выпадающее меню подсказок для быстрого набора адресов

export function useMapSuggest() {
    const mapRef = useRef(null);
    const suggestRef = useRef(null); // Храним инстанс саджеста для его очистки
    const { userCoords, fetchUserLocation } = useMapGeolocation(); // Подключаем логику геолокации
    const ymapsRef = useRef(null); // Храним инстанс Яндекса для доступа из useEffect

    const handleMapLoad = (ymapsInstance) => {

        // Сохраняем инстанс Яндекса в ref
        ymapsRef.current = ymapsInstance;

        // 1. Запускаем поиск пользователя через изолированную логику
        fetchUserLocation(ymapsInstance, mapRef);

        // 2. Инициализируем логику подсказок
        ymapsInstance.modules.require(['SuggestView'], (SuggestView) => {

            suggestRef.current = new SuggestView('suggest'); // Инициализируем и сохраняем в ref

            // Подписываемся на событие выбора адреса
            suggestRef.current.events.add('select', (e) => {
                const selectedAddress = e.get('item').value;

                ymapsInstance.geocode(selectedAddress).then((res) => {
                    const coords = res.geoObjects.get(0).geometry.getCoordinates();
                    if (mapRef.current) {
                        mapRef.current.setCenter(coords, 10, { duration: 300 });
                    }
                });
            });
        });
    };
    
    // Слушаем клики по регионам из хедера
    useEffect(() => {
        const handleRegionChange = (event) => {
            const regionText = event.detail; // Получаем текст, например "Тюменская область"

            // Если карта и API Яндекса готовы
            if (ymapsRef.current && mapRef.current) {
                // Используем встроенный геокодер Яндекса, чтобы найти координаты региона по названию
                ymapsRef.current.geocode(regionText, { results: 1 }).then((res) => {
                    const firstGeoObject = res.geoObjects.get(0);
                    if (firstGeoObject) {
                        const coords = firstGeoObject.geometry.getCoordinates();

                        // Для областей и краев zoom лучше поставить чуть меньше (например, 6 или 7),
                        // чтобы регион был виден целиком, а не только одна точка
                        const isBigRegion = regionText.includes('область') || regionText.includes('край') || regionText.includes('Республика');
                        const targetZoom = isBigRegion ? 6 : 10;

                        // Плавно перемещаем камеру карты на выбранный регион
                        mapRef.current.setCenter(coords, targetZoom, { duration: 1000 });
                    }
                }).catch((err) => {
                    console.error("Ошибка геокодирования региона:", err);
                });
            }
        };

        window.addEventListener('region-selected-manually', handleRegionChange);

        return () => {
            window.removeEventListener('region-selected-manually', handleRegionChange);
        };
    }, []);

    // Очищаем саджест при размонтировании компонента карты
    useEffect(() => {
        return () => {
            if (suggestRef.current && typeof suggestRef.current.destroy === 'function') {
                suggestRef.current.destroy();
            }
        };
    }, []);

    return { mapRef, handleMapLoad, userCoords };
}
