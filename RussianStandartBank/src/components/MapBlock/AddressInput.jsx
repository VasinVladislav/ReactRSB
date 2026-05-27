import { useState } from 'react';
import { useAddressSuggestions } from './useAddressSuggestions';

export default function AddressInput({ classes, ymaps, onSelectAddress }) {
    const [inputValue, setInputValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const { suggestions, setSuggestions } = useAddressSuggestions(ymaps, searchQuery);

    const handleInputChange = (e) => {
        const val = e.target.value;
        setInputValue(val);
        setSearchQuery(val);
    };

    const handleSelect = (item) => {
        setSuggestions([]);
        setSearchQuery('');
        setInputValue(item.displayName);
        // Передаем выбранный адрес наверх для центрирования карты
        onSelectAddress(item.displayName); 
    };

    return (
        <div style={{ position: 'relative' }}>
            <input
                className={classes.input}
                placeholder="Ваш адрес"
                value={inputValue}
                onChange={handleInputChange}
            />
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
    );
}
