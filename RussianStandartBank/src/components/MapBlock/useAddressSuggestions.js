import { useState, useEffect } from 'react';

export const useAddressSuggestions = (ymaps, query) => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        // Начинаем поиск только если введено больше 2 символов
        if (!ymaps || !ymaps.suggest || !query || query.length < 3) {
            setSuggestions([]);
            return;
        }

        const fetchSuggestions = async () => {
            try {
                // Используем встроенный метод API
                const items = await ymaps.suggest(query);
                setSuggestions(items);
            } catch (e) {
                console.error("Ошибка при получении подсказок:", e);
            }
        };

        fetchSuggestions();
    }, [query, ymaps]);

    return { suggestions, setSuggestions };
};
