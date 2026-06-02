import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    topNav: {
        display: "flex",
        gap: 20,
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
        outlineOffset: "10px" /* Зазор 8px между кнопкой и рамкой */
    },
})