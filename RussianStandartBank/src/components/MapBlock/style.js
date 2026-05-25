import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    mapSection: {
        position: 'relative', // Контейнер для позиционирования оверлея
        width: '1580px',
        height: '600px',
        borderRadius: '20px',
        overflow: 'hidden',
        border: "1px solid black",
        margin: "0 auto 100px",
        scrollMarginTop: "80px" 
    },
    map: {
        height: "100%",
        '& [class*="ground-pane"]': {
            filter: 'grayscale(1) sepia(10%) hue-rotate(180deg) brightness(0.9)',
        }
    },
    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 10, // Чтобы быть поверх карты
    },
    overlayMenu: {
        width: '80%',
        height: 130,
        backgroundColor: '#fff',
        padding: '22px 32px',
        margin: '25px auto',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
        gap: '40px',
    },
    leftSection: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
    },
    title: {
        fontFamily: '"Manrope", bold',
        fontSize: '24px',
        fontWeight: 700,
    },
    input: {
        width: '350px',
        padding: '12px 16px',
        backgroundColor: '#F0F0F0',
        border: 'none',
        borderRadius: '8px',
        fontSize: '14px',
        outline: 'none',
    },
    filtersGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', // Две колонки фильтров
        gap: '22px 80px',
    },
    checkboxItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '13px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        accentColor: "black"
    },
    // Переключатель "Офисы / Банкоматы" под панелью
    tabSwitcher: {
        position: 'absolute',
        bottom: '5px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white',
        borderRadius: '25px',
        padding: '4px',
        display: 'flex',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        zIndex: 110
    },
    tab: {
        padding: '8px 20px',
        borderRadius: '20px',
        fontSize: '14px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'transparent',
        color: '#555',
        transition: 'all 0.3s ease', // Плавная анимация смены цвета
        '&:hover': {
            color: '#000',
        }
    },
    activeTab: {
        backgroundColor: '#000',
        color: '#fff !important',
    }
});