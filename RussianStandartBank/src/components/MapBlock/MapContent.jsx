import { useState, useRef } from 'react';
import { useStyles } from './style';
import { Map, Placemark, useYMaps } from '@pbe/react-yandex-maps';
import { useAddressSuggestions } from './useAddressSuggestions';    // Всплывающие подсказки адресов
import { useUserLocation } from './useUserLocation';    // Поиск геолокации пользователя
import { points } from './testMapPoints';   // Тестовые локации объектов на карте

export default function MapContent() {
    const ymaps = useYMaps();
    const mapRef = useRef(null);

    // РАЗДЕЛЯЕМ: inputValue — для текста в инпуте, searchQuery — для запросов в хук
    const [inputValue, setInputValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const { suggestions, setSuggestions } = useAddressSuggestions(ymaps, searchQuery);

    useUserLocation(mapRef, ymaps);

    const classes = useStyles();
    const [activeTab, setActiveTab] = useState('offices');
    const filteredPoints = points.filter(point => point.type === activeTab);

    // Изменение текста пользователем
    const handleInputChange = (e) => {
        const val = e.target.value;
        setInputValue(val);
        setSearchQuery(val); // Отправляем в поиск то, что пишет пользователь
    };

    const handleSelect = async (item) => {
        setSuggestions([]);      // 1. Мгновенно стираем подсказки из стейта
        setSearchQuery('');      // 2. Сбрасываем строку поиска для хука (теперь её длина 0, хук спать ложится)
        setInputValue(item.displayName); // 3. Записываем текст в инпут визуально
        
        // --- Логика плавного перемещения к адресу ---
        if (mapRef.current) {
            try {
                const geocoderApiKey = '339bd702-77f5-4039-85b6-87e420116799'; // <--- Замените на ваш ключ

                // Внимательно проверьте структуру кавычек и знаков $ ниже:
                const domain = "https:/" + "/geocode-maps.yandex.ru/1.x/";
                const params = "?apikey=" + geocoderApiKey + "&geocode=" + encodeURIComponent(item.displayName) + "&format=json";

                const url = domain + params;

                const response = await fetch(url);
                const data = await response.json();

                // Безопасное извлечение строки координат "Долгота Широта"
                const pos = data.response?.GeoObjectCollection?.featureMember?.[0]?.GeoObject?.Point?.pos;

                if (pos) {
                    const [lng, lat] = pos.split(' ').map(Number);
                    const coords = [lat, lng]; // Переводим в формат [Широта, Долгота]

                    mapRef.current.setCenter(coords, 14, {
                        duration: 800,
                        timingFunction: 'ease-in-out'
                    });
                } else {
                    console.warn("Адрес найден, но координаты отсутствуют в ответе Яндекса");
                }
            } catch (error) {
                console.error("Ошибка HTTP-геокодирования:", error);
            }
        }
    };

    return (
        <>
            {/* Слой с фильтрами */}
            <div className={classes.overlay}>
                <div className={classes.overlayMenu}>
                    {/* Левая часть */}
                    <div className={classes.leftSection}>
                        <h2 className={classes.title}>Офисы и банкоматы</h2>
                        <div style={{ position: 'relative' }}>
                            <input
                                className={classes.input}
                                placeholder="Ваш адрес"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            {/* Выпадающий список подсказок */}
                            {suggestions.length > 0 && (
                                <ul style={{
                                    position: 'absolute', top: '100%', left: 0, right: 0,
                                    background: '#fff', border: '1px solid #ccc', zIndex: 1000,
                                    listStyle: 'none', padding: 0, margin: 0, color: '#000'
                                }}>
                                    {suggestions.map((s, i) => (
                                        <li
                                            key={i}
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                handleSelect(s);
                                            }}
                                            style={{ padding: '8px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
                                        >
                                            {s.displayName}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Правая часть с чекбоксами */}
                    <div className={classes.filtersGrid}>
                        <label className={classes.checkboxItem}><input type="checkbox" defaultChecked /> Снятие наличных</label>
                        <label className={classes.checkboxItem}><input type="checkbox" defaultChecked /> Оформление карты</label>
                        <label className={classes.checkboxItem}><input type="checkbox" defaultChecked /> Оформление кредита</label>
                        <label className={classes.checkboxItem}><input type="checkbox" defaultChecked /> Внесение наличных</label>
                    </div>

                    {/* Табы снизу */}
                    <div className={classes.tabSwitcher}>
                        <button
                            className={`${classes.tab} ${activeTab === 'offices' ? classes.activeTab : ''}`}
                            onClick={() => setActiveTab('offices')}
                        >
                            Офисы
                        </button>
                        <button
                            className={`${classes.tab} ${activeTab === 'atms' ? classes.activeTab : ''}`}
                            onClick={() => setActiveTab('atms')}
                        >
                            Банкоматы
                        </button>
                    </div>
                </div>
            </div>

            {/* Слой с картой */}
            <Map
                className={classes.map}
                defaultState={{ center: [55.75, 37.62], zoom: 11 }}
                width="100%"
                height="100%"
                instanceRef={mapRef}
            >
                {filteredPoints.map(point => (
                    <Placemark
                        key={point.id}
                        geometry={point.coords}
                        properties={{
                            balloonContent: point.title,
                            hintContent: point.title,
                            iconCaption: point.title,
                        }}
                        options={{
                            preset: activeTab === 'offices' ? 'islands#blueLeisureIcon' : 'islands#redMoneyIcon',
                        }}
                    />
                ))}
            </Map>
        </>
    );
}
