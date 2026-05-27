import { useState, useRef } from 'react';
import { useStyles } from './style';
import { Map, Placemark, useYMaps } from '@pbe/react-yandex-maps';
import { useUserLocation } from './useUserLocation';    // Поиск геолокации пользователя
import { points } from './testMapPoints';   // Тестовые локации объектов на карте
import  AddressInput from "./AddressInput.jsx";
import {handleSelectAddress} from "./handleSelectAddress.js"

export default function MapContent() {
    const ymaps = useYMaps();
    const mapRef = useRef(null);

    useUserLocation(mapRef, ymaps);

    const classes = useStyles();
    const [activeTab, setActiveTab] = useState('offices');
    const filteredPoints = points.filter(point => point.type === activeTab);

    return (
        <>
            {/* Слой с фильтрами */}
            <div className={classes.overlay}>
                <div className={classes.overlayMenu}>
                    {/* Левая часть */}
                    <div className={classes.leftSection}>
                        <h2 className={classes.title}>Офисы и банкоматы</h2>

                        <AddressInput 
                        classes={classes} 
                        ymaps={ymaps} 
                        onSelectAddress={(addressName) => handleSelectAddress(addressName, mapRef)}
                        />
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
                defaultState={{ center: [55.75, 37.62], zoom: 10 }}
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
