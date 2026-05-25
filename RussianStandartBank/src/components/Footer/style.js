import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    footer: {
        display: 'flex',
        flexDirection: "row",
        backgroundColor: "#2B2B2B",
        '& *': {
            color: "#7C7C7C",
            fontFamily: "Lato, Roboto, Helvetica, Arial, Georgia, sans-serif",
            fontSize: 18,
            textDecoration: "none"
        }
    },
    container: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-around",
        maxWidth: "1580px",
        margin: "50px auto",
    },
    column: {
        display: 'flex',
        flexDirection: "column",
        margin: "0 50px",
        width: 300,
        justifyContent: "space-between"
    },
    logo: {
        width: 275,
        height: "auto",
        marginBottom: 50,
        position: "relative",
        left: -15
    },
    nav: {
        display: 'flex',
        flexDirection: "column",
        gap: 10,
    },

    phoneBlock: {
        display: 'flex',
        flexDirection: "column",
    },
    phoneNumber: {
        '& a': {
            fontSize: 36,
            color: "white"
        }
    },

    appBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: "50px 0",
        gap: 20,
        '& *': {
            fontSize: 14,
        }

    },
    appHref: {
        '& a': {
            color: "#77FF70"
        }
    },
    insuranceBlock:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "50px",
        gap: 20,
        '& *': {
            fontSize: 14,
        }
    },


    rates:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    ratesTitle: {
        marginBottom: 50
    },
    ratesGrid:{
        display: "grid",
        gridTemplateColumns: "16px 80px 80px",
        gridTemplateRows: "16px 30px 30px",
        gap: 10,
        justifyItems: "center",
        alignItems: "center",
        '& *':{
            fontSize: "24px"
        }
    },
    exchangeRate: {
        color: "white"
    }
})