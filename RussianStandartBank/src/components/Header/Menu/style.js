import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({

    botHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        maxWidth: 1580,
        margin: "0 auto"
    },
    botNav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 40
    },
    navButton: {
        background: 'none',      // Убираем фон
        border: 'none',          // Убираем рамку
        padding: 0,              // Убираем внутренние отступы
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

    // Описываем анимацию 
    '@keyframes slideDown': {
        from: {
            opacity: 0,
            transform: 'translateY(-10px)', // Немного смещено вверх
        },
        to: {
            opacity: 1,
            transform: 'translateY(0)',    // Встает на свое место
        }
    },
    // 3 уровень
    dropdown: {
        position: "absolute",
        fontFamily: '"Manrope", sans-serif',
        fontSize: 14,
        width: "100%",
        height: "300px",
        animation: '$slideDown 0.5s ease-out',        //применяем анимацию
        backgroundColor: "white",
        zIndex: 200,
    },
    dropdownContent: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 35,
        maxWidth: 1580,
        margin: "0px auto",
        height: "100%",
    },
    column: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
    },
    closeBtn: {
        width: 42,
        height: 42,
        background: "none",
        border: "none",
        cursor: 'pointer',       // Делаем курсор "ручкой" при наведении
    },
    '@keyframes fadeIn': {
        from: { opacity: 0 },
        to: { opacity: 1 }
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed', // Фиксируем относительно экрана
        top: 0,            // Растягиваем от верхнего края
        left: 0,           // ...от левого
        right: 0,          // ...до правого
        bottom: 0,         // ...до самого низа
        zIndex: 10,        // Опускаем ПОД контент меню (dropdownContent)
        animation: "$fadeIn 1s ease-out"
    }
})

