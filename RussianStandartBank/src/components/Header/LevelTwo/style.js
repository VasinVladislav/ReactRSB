import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({

    botHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        maxWidth: 1680,
        margin: "0 auto",
        padding: "0 50px"
    },
    botNav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20
    },
    navButton: {
        background: 'none',      // Убираем фон
        border: 'none',          // Убираем рамку
        padding: '0px',
        borderRadius: 20,
        cursor: 'pointer',       // Делаем курсор "ручкой" при наведении
        color: '#000',         // Цвет текста (можно поменять)
        outline: 'none',         // Убираем синюю обводку при клике
        display: 'flex',         // Если внутри есть иконка и текст
        alignItems: 'center',
        gap: '8px',              // Отступ между иконкой и текстом

        '&:hover': {
            color: '#828282',      // Цвет при наведении (например, красный)
        }
    },
    active: {
        border: "none",
        outline: "2px solid black",
        outlineOffset: "8px" /* Зазор 8px между кнопкой и рамкой */
    },
    icon: {
        width: 22,
        height: 22
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 30
    },
    searchBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 42,
        height: 42,
        background: "none",
        border: "2px solid black",
        borderRadius: 10,
        cursor: 'pointer',       // Делаем курсор "ручкой" при наведении
    },
    loginBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 156,
        height: 42,
        gap: 15,
        background: "none",
        border: "2px solid black",
        borderRadius: 10,
        cursor: 'pointer',       // Делаем курсор "ручкой" при наведении
    },

    '@keyframes fadeInWithBlur': {
        from: {
            opacity: 0,
            backdropFilter: 'blur(0px)' // Начинаем без размытия
        },
        to: {
            opacity: 1,
            backdropFilter: 'blur(4px)' // Плавно размываем до 4px
        }
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed', // Фиксируем относительно экрана
        top: 0,            // Растягиваем от верхнего края
        left: 0,           // ...от левого
        right: 0,          // ...до правого
        bottom: 0,         // ...до самого низа
        zIndex: 10,        // Опускаем ПОД контент меню (dropdownContent)
        // Поддержка для Safari (обязательно через префикс)
        '-webkit-backdrop-filter': 'blur(4px)',
        backdropFilter: 'blur(4px)',
        animation: '$fadeInWithBlur 0.4s ease-out',
    }
})

