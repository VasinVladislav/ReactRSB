import { YMaps, Map, Placemark, useYMaps } from '@pbe/react-yandex-maps';
import { useStyles } from './style';
import { useState } from 'react';
import { points } from './testMapPoints';
import { useAddressSuggestions } from './useAddressSuggestions'; // Импорт хука

// Внутренний компонент-обертка, чтобы иметь доступ к хуку useYMaps
const MapContent = ({ classes, activeTab, filteredPoints }) => {
    const ymaps = useYMaps(); // Доступ к объекту ymaps
    const [inputValue, setInputValue] = useState('');
    const { suggestions, setSuggestions } = useAddressSuggestions(ymaps, inputValue);

    const handleSelect = (item) => {
        setInputValue(item.displayName);
        setSuggestions([]);
        // Здесь можно добавить центрирование карты на выбранный адрес
    };

    return (
        <>
            <div className={classes.overlay}>
                <div className={classes.overlayMenu}>
                    <div className={classes.leftSection}>
                        <h2 className={classes.title}>Офисы и банкоматы</h2>
                        <div style={{ position: 'relative' }}>
                            <input 
                                className={classes.input} 
                                placeholder="Ваш адрес"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
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
                                            onClick={() => handleSelect(s)}
                                            style={{ padding: '8px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
                                        >
                                            {s.displayName}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Ваша правая часть и табы остаются без изменений */}
                    <div className={classes.filtersGrid}>
                        <label className={classes.checkboxItem}><input type="checkbox" defaultChecked /> Снятие наличных</label>
                        <label className={classes.checkboxItem}><input type="checkbox" defaultChecked /> Оформление карты</label>
                        <label className={classes.checkboxItem}><input type="checkbox" defaultChecked /> Оформление кредита</label>
                        <label className={classes.checkboxItem}><input type="checkbox" defaultChecked /> Внесение наличных</label>
                    </div>
                    <div className={classes.tabSwitcher}>
                        <button className={`${classes.tab} ${activeTab === 'offices' ? classes.activeTab : ''}`}>Офисы</button>
                        <button className={`${classes.tab} ${activeTab === 'atms' ? classes.activeTab : ''}`}>Банкоматы</button>
                    </div>
                </div>
            </div>

            <Map
                className={classes.map}
                defaultState={{ center: [55.75, 37.62], zoom: 11 }}
                width="100%" height="100%"
            >
                {filteredPoints.map(point => (
                    <Placemark key={point.id} geometry={point.coords} />
                ))}
            </Map>
        </>
    );
};

export default function MapBlock() {
    const classes = useStyles();
    const [activeTab, setActiveTab] = useState('offices');
    const filteredPoints = points.filter(point => point.type === activeTab);

    return (
        <div id='map' className={classes.mapSection}>
            {/* Добавьте suggest_apikey в query */}
            <YMaps query={{ 
                apikey: '894225a5-b09a-4d9a-93ad-997f3702d947',
                load: 'suggest',
                suggest_apikey: '5cf44534-3f1f-4c9c-919c-8e139ad2c078' 
            }}>
                <MapContent 
                    classes={classes} 
                    activeTab={activeTab} 
                    filteredPoints={filteredPoints} 
                />
            </YMaps>
        </div>
    );
}


