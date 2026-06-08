// Список регионов

export default function Regions({ data, classes, activeTab, activeMenu, setActiveMenu, setSelectedCity }) {

    const handleCityClick = (item) => {
        // 1. Записываем весь объект { id, text, href } в стейт хедера
        setSelectedCity(item);

        // 2. Дублируем в localStorage, чтобы выбор сохранялся при перезагрузке
        localStorage.setItem('user_selected_city', JSON.stringify(item));

        // 3. Отправляем событие для карты, передавая текст региона (например, "Иркутская область")
        const event = new CustomEvent('region-selected-manually', { detail: item.text });
        window.dispatchEvent(event);

        // 4. Закрываем выпадающее меню
        setActiveMenu(null);
    };

    return (
        <>
            {/* Третий уровень */}
            {/* Для Москвы и Петербурга */}
            <div style={{ margin: "0 auto" }}>
                <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", margin: "0 auto" }}>
                    {data[activeTab][activeMenu]?.map((group) => (
                        group.category &&
                        <div key={group.category} style={{ margin: 15 }}>
                            <ul>
                                {group.items.map((item) => (
                                    <li key={item.id} style={{ listStyleType: "none" }}>
                                        <button className={classes.navButton}
                                            onClick={() => handleCityClick(item)}>
                                            {item.text}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Для остальных */}
                <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", maxHeight: 550, margin: "0 auto" }}>
                    {data[activeTab][activeMenu]?.map((group) => (
                        group.letter &&
                        <div key={group.letter} style={{ margin: 15 }}>
                            <p><strong>{group.letter}</strong></p>
                            <ul>
                                {group.items.map((item) => (
                                    <li key={item.id} style={{ listStyleType: "none" }}>
                                        <button className={classes.navButton}
                                            onClick={() => handleCityClick(item)}>
                                            {item.text}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}