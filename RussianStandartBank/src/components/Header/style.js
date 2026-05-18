import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    header: {
        fontFamily: '"Manrope", sans-serif',
        fontSize: 14,
        backgroundColor: "white",
        position: "relative",
        zIndex: 1000,
    },
    topHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 40,
        margin: "0px auto",
        maxWidth: 1580,
    },
    topLeft: {
        display: "flex",
        gap: 20,
        justifyContent: "space-between",
        alignItems: "center",
    },
    logoImg: {
        position: "relative",
        left: -20
    },
    topNav: {
        display: "flex",
        gap: 40,
    },
    navButton: {
        background: 'none',      // Убираем фон
        border: '2px solid #ffffff00',          // Убираем рамку
        padding: 10,
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
        border: "2px solid black",
        borderRadius: 20,
        padding: 10
    },
    line: {
        position: "absolute",
        zIndex: 5000,
        top: 125,
        left: 0,
        right: 0,
        border: "1px solid black"
    }
})