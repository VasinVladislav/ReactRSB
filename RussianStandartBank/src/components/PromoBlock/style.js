import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    promoSection: {
        display: "flex",
        flexDirection: "column",
        fontFamily: '"Manrope", sans-serif',
        fontSize: 14,
        margin: "60px auto",
        maxWidth: 1580,
        width: "100vw"

    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        gap: 40,
    },
    banner: {
        backgroundColor: "#E1CBFE",
        borderRadius: 30,
        width: 875,
        height: 570,
        padding: "35px 50px",
    },
    bannerContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
    },
    bannerTitle: {
        fontSize: 56,
        margin: 0,
    },
    cashback: {
        position: "relative",
        backgroundColor: "#EFFF8B",
        width: 350,
        textAlign: "center",
        borderRadius: 20,
    },
    bannerText: {
        fontSize: 18,
        margin: "40px 0px",
    },
    bannerContentBot: {
        display: "flex",
        justifyContent: "space-between",
    },
    bannerBtn: {
        width: 330,
        height: 50,
        borderRadius: 30,
        color: "white",
        backgroundColor: "black",
        padding: "0px 2px 0px 25px",
        cursor: "pointer",
    },
    bannerBtnInside: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    partnersBlock: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: 310,
        height: 50,
        fontSize: 18,
    },
    partnersIcons: {
        width: 150,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        // Инвертируем порядок наложения: первый элемент сверху
        flexDirection: 'row',

    },
    partnersImg: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        // Белая рамка создает эффект выреза (цвет должен совпадать с фоном баннера)
        border: '2px solid #fff',
        // Наложение: сдвигаем каждый следующий круг влево
        marginLeft: '-15px',
        position: 'relative',

        '&:first-child': {
            marginLeft: 0,
            zIndex: 1 // Первый (лого) — самый верхний
        },
        '&:nth-child(2)': { zIndex: 2 },
        '&:nth-child(3)': { zIndex: 3 },
        '&:last-child': { zIndex: 4 },
    },
    // *********************************************
    loginWidget: {
        backgroundColor: "#EFFF8B",
        borderRadius: 30,
        width: 665,
        height: 315,
        padding: "35px 50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    loginTitle: {
        fontSize: 41,
        margin: 0,
    },
    loginText: {
        fontSize: 18,
        margin: "18px 0px",
        display: "flex",
        alignItems: "center",
        gap: 7,
    },
    loginBtn: {
        width: 330,
        height: 50,
        border: "none",
        borderRadius: 30,
        backgroundColor: "#B4BD7F",
        padding: "0px 4px 0px 25px",
        cursor: "pointer",
    },
    loginBtnInside: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
})