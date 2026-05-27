import { useState, useEffect } from 'react';

export const useAddressSuggestions = (ymaps, query) => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        // Если API не готово или текста мало — просто выходим, ничего не очищая внутри эффекта
        if (!ymaps || !ymaps.suggest || !query || query.length < 3) {
            return;
        }

        let isMounted = true;

        const fetchSuggestions = async () => {
            try {
                const items = await ymaps.suggest(query);
                if (isMounted) {
                    setSuggestions(items);
                }
            } catch (e) {
                console.error("Ошибка при получении подсказок:", e);
            }
        };

        fetchSuggestions();

        return () => {
            isMounted = false;
        };
    }, [query, ymaps]);

    return { suggestions, setSuggestions };
};
