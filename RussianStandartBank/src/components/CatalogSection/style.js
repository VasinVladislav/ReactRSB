import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    section: {
        maxWidth: 1480,

        margin: "150px auto",
        '& *': {
            fontFamily: '"Manrope", SemiBold',
        }
    },
    mainTitle: {
        fontSize: 54,
    },
    tabs: {
        display: "flex",
        alignItems: "center",
        gap: 80,
        margin: "50px 0",
    },
    tab: {
        background: "none",
        border: "none",
        borderRadius: 20,
        fontSize: 22,
        cursor: "pointer",
        padding: '10px 20px',
        transition: 'background-color 0.5s ease',
    },
    active: {
    backgroundColor: '#E1CBFE', // Черный фон для активной вкладки
    borderRadius: 20,
  },
  main: {
    display: "flex",
    justifyContent: "space-between"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "410px 410px",
    gridTemplateRows: "200px 200px",
    gap: 40,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 30,
    border: "1px solid black",
    borderRadius: 20
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    fontSize: 24,
  },
  icon: {
    width: 50,
    height: 50,
  },

  quizCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 40,
    padding: "40px 50px 30px",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    borderRadius: 20,
    '& h3': {
        fontSize: 32,
        maxWidth: 420,
        marginBottom: 15
    },
    '& p': {
        fontSize: 14,
        maxWidth: 280,
    }
  },
  quizTextBot: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    '& img': {
        width: 25,
        height: 25
    }
  }
})

