import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { points } from '../testMapPoints';
import { useMapSuggest } from '../MapUtils/useMapSuggest';

export default function MapBlockContent({ classes, activeTab }) {

    // Фильтруем точки: показываем только те, что соответствуют выбранной вкладке
    const filteredPoints = points.filter(point => point.type === activeTab);
    // Функция инициализации подсказок и геолокации после загрузки карты
    const { mapRef, handleMapLoad, userCoords } = useMapSuggest();

    return (
        <>
            {/* 2. Слой с картой */}
            <YMaps query={{
                apikey: '894225a5-b09a-4d9a-93ad-997f3702d947',
                suggest_apikey: '5cf44534-3f1f-4c9c-919c-8e139ad2c078',
                load: 'suggest,geocode,geolocation'
            }}>
                <Map
                    className={classes.map}
                    defaultState={{ center: [55.75, 37.62], zoom: 10 }}
                    width="100%"
                    height="100%"
                    instanceRef={mapRef} // Сохраняем инстанс карты в ref
                    onLoad={handleMapLoad} // Вызываем функцию при загрузке карты
                >
                    {filteredPoints.map(point => (
                        <Placemark
                            key={point.id}
                            geometry={point.coords}
                            properties={{
                                balloonContent: point.title, // Текст при клике на метку
                                hintContent: point.title,    // Текст при наведении
                                iconCaption: point.title,
                            }}
                            options={{
                                // Стилизация метки
                                preset: activeTab === 'offices' ? 'islands#blueLeisureIcon' : 'islands#redMoneyIcon',
                            }}
                        />
                    ))}
                    {/* Маркер пользователя (рендерится только если координаты найдены) */}
                    {userCoords && (
                        <Placemark
                            geometry={userCoords}
                            properties={{
                                hintContent: 'Вы здесь',
                                balloonContent: 'Ваше текущее местоположение'
                            }}
                            options={{
                                // Зеленая метка с иконкой дома/человека для отличия
                                preset: 'islands#greenCircleDotIconWithCaption',
                                iconColor: '#28a745'
                            }}
                        />
                    )}
                </Map>
            </YMaps>
        </>
    );
}