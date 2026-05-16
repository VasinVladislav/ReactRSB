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
    gap: 40
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "200px 200px",
    gap: 40,
    width: "66%"
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
    fontSize: 17,
  },
  icon: {
    width: 50,
    height: 50,
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    '& .cardRow': {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      maxWidth: "50%",
    },
    '& .cardColumn': {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      maxWidth: 185,
      maxHeight: 70
    },
    '& .card-number-row': {
      display: 'flex',
      alignItems: 'baseline',
      gap: '4px',
      maxWidth: 100
    },
    '& .digit': {
      fontSize: 40,
    },
    '& .sign': {
      fontSize: 18,
    },
    '& .text': {
      fontSize: 14,
    },
  },

  quizCard: {
    width: "33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
  },
  quizFooter: {
    display: "flex",
  },
  circle: {
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
  quizBtn: {
    height: 50,
    borderRadius: 30,
    // Белая рамка создает эффект выреза (цвет должен совпадать с фоном баннера)
    border: 'none',
    backgroundColor: "#EDF860",
    // Наложение: сдвигаем каждый следующий круг влево
    marginLeft: '-15px',
    position: 'relative',
    zIndex: 5,
    display: 'flex',
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
    cursor: "pointer",
  },
  quizCounter: {
    fontSize: 36,
    fontFamily: "Inter Regular"
  },
  quizText: {
    fontSize: 12,
    fontFamily: "Inter Regular",
    width: 90
  },

})

