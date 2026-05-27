import { useRef, useEffect } from 'react';

// Выпадающее меню подсказок для быстрого набора адресов

export function useMapSuggest() {
    const mapRef = useRef(null);
    const suggestRef = useRef(null); // Храним инстанс саджеста для его очистки

    const handleMapLoad = (ymapsInstance) => {
        ymapsInstance.modules.require(['SuggestView'], (SuggestView) => {
            // Инициализируем и сохраняем в ref
            suggestRef.current = new SuggestView('suggest');

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

    // Очищаем саджест при размонтировании компонента карты
    useEffect(() => {
        return () => {
            if (suggestRef.current && typeof suggestRef.current.destroy === 'function') {
                suggestRef.current.destroy();
            }
        };
    }, []);

    return { mapRef, handleMapLoad };
}
