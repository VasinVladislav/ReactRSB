export default function Regions({
  classes,
  levelOneTab,
  handleTabChange,
  locationMenu,
  setSelectedCity,
}) {
  const handleCityClick = (item) => {
    // 1. Записываем весь объект { id, text, href } в стейт хедера
    setSelectedCity(item);

    // 2. Дублируем в localStorage, чтобы выбор сохранялся при перезагрузке
    localStorage.setItem("user_selected_city", JSON.stringify(item));

    // 3. Отправляем событие для карты, передавая текст региона (например, "Иркутская область")
    const event = new CustomEvent("region-selected-manually", {
      detail: item.text,
    });
    window.dispatchEvent(event);

    // 4. Закрываем выпадающее меню
    handleTabChange(levelOneTab, null);
  };

  const popularCities = [];
  const alphabetGroups = {};

  locationMenu.forEach((item) => {
    // Выделяем Москву и Питер в отдельный список
    if (
      item.name === "moscow_and_region" ||
      item.name === "saint_petersburg_and_region"
    ) {
      popularCities.push(item);
    } else {
      // Для остальных берем первую букву
      const firstLetter = item.text.charAt(0).toUpperCase();
      // Если в объекте нет такого ключа(буквы), то создаём ключ и массив
      if (!alphabetGroups[firstLetter]) {
        alphabetGroups[firstLetter] = [];
      }
      // Добавляем город с firstLetter'ом в массив под такой буквой(ключом)
      alphabetGroups[firstLetter].push(item);
    }
  });

  const sortedLetters = Object.entries(alphabetGroups).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );

  return (
    <>
      {/* Третий уровень */}
      {/* Для Москвы и Петербурга */}
      <div className={classes.regions}>
        <div className={classes.regionsTop}>
          <ul>
            {popularCities.map((item) => (
              <li key={item.id}>
                <button
                  className={classes.navButton}
                  onClick={() => handleCityClick(item)}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Для остальных */}
        <div className={classes.regionsMain}>
          {sortedLetters.map(([letter, items]) => (
            <div key={letter}>
              <p>
                <strong>{letter}</strong>
              </p>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <button
                      className={classes.navButton}
                      onClick={() => handleCityClick(item)}
                    >
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
