import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({

    // 3 уровень
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
    dropdown: {
        position: "absolute",
        fontFamily: '"Manrope", sans-serif',
        fontSize: 14,
        width: "100%",
        minHeight: "350px",
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
        paddingBottom: 35,
        height: "100%",
    },
    column: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: 12,
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
    closeBtn: {
        width: 42,
        height: 42,
        background: "none",
        border: "none",
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
    }
})