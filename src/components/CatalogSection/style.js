import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  section: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 1680,
    width: "100%",
    margin: "150px auto",
    padding: "0 50px",
    '& *': {
      fontFamily: '"Manrope", SemiBold',
    }
  },
  mainTitle: {
    fontSize: 54,
    '@media (max-width: 1580px)': {
      margin: "0 auto"
    },
  },
  tabs: {
    display: "flex",
    alignItems: "center",
    gap: 80,
    margin: "50px 0",
    '@media (max-width: 1580px)': {
      margin: "50px auto",
      justifyContent: "space-between",
      gap: 30
    },
  },
  tab: {
    position: 'relative', // Нужно для позиционирования линии/фона
    overflow: 'hidden',   // Чтобы прогресс не вылезал за границы
    background: "none",
    border: "none",
    borderRadius: 20,
    fontSize: 22,
    cursor: "pointer",
    padding: '10px 20px',
    transition: 'background-color 0.5s ease',
  },
  active: {
    backgroundColor: 'rgba(225, 203, 254, 0.3)', // Черный фон для активной вкладки
    borderRadius: 20,
    '&::before': {
      borderRadius: 20,
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '100%',
      backgroundColor: '#E1CBFE', // Основной цвет заливки
      zIndex: -1,
      transformOrigin: 'left',
      animation: '$progress 5s linear forwards', // Анимация на 5 секунд
    },
  },
  paused: {
    '&::before': {
      animation: 'none !important', // Останавливаем прогресс, если юзер кликнул
      transform: 'scaleX(1)',       // Оставляем вкладку полностью закрашенной
    }
  },
  '@keyframes progress': {
    '0%': {
      transform: 'scaleX(0)',
    },
    '100%': {
      transform: 'scaleX(1)',
    }
  },
  main: {
    display: "flex",
    gap: 40,
    width: "100%",
    '@media (max-width: 1580px)': {
      flexDirection: "column",
      maxWidth: "1000px",
      margin: "0 auto"
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "200px 200px",
    gap: 40,
    width: "66%",
    // Применяем анимацию ко всему гриду
    animation: '$fadeIn 0.5s ease-in-out',
    '@media (max-width: 1580px)': {
      width: "100%"
    },
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(10px)', // Легкий эффект вылета снизу
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    }
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 30,
    border: "1px solid black",
    borderRadius: 20,
    cursor: "pointer",
  },
  cardHref: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textDecoration: "none",
    color: "black"
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
      width: "200px",
    },
    '& .cardColumn': {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      width: "200px",
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

  // Карта квиз
  quizCard: {
    width: "33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "40px 50px 30px",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    borderRadius: 20,
    '@media (max-width: 1580px)': {
      width: "100%",
      flexDirection: "row"
    },
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

