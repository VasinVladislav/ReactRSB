import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useStyles } from './style';
import { useState } from 'react';
import { points } from './testMapPoints';

export default function MapBlock() {
    const classes = useStyles();
    const [activeTab, setActiveTab] = useState('offices');

    // Фильтруем точки: показываем только те, что соответствуют выбранной вкладке
    const filteredPoints = points.filter(point => point.type === activeTab);

    return (
        <div className={classes.mapSection}>
            {/* 1. Слой с фильтрами */}
            <div className={classes.overlay}>
                <div className={classes.overlayMenu}>
                    {/* Левая часть */}
                    <div className={classes.leftSection}>
                        <h2 className={classes.title}>Офисы и банкоматы</h2>
                        <input className={classes.input} placeholder="Ваш адрес" />
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
                        <button className={`${classes.tab} ${activeTab === 'offices' ? classes.activeTab : ''}`} onClick={() => setActiveTab('offices')}>Офисы</button>
                        <button className={`${classes.tab} ${activeTab === 'atms' ? classes.activeTab : ''}`} onClick={() => setActiveTab('atms')}>Банкоматы</button>
                    </div>
                </div>
            </div>

            {/* 2. Слой с картой */}
            <YMaps query={{ apikey: '894225a5-b09a-4d9a-93ad-997f3702d947' }}>
                <Map
                    className={classes.map}
                    defaultState={{ center: [55.75, 37.62], zoom: 11 }}
                    width="100%"
                    height="100%"
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
                </Map>
            </YMaps>
        </div>
    );
};

