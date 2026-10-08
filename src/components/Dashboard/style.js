import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  main: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    margin: "0 auto",
    padding: "170px 50px 50px",
    width: "100%",
    height: "100vh",
  },
  mainContainer: {
    width: "100%",
    maxWidth: 1680,
    padding: "0px 50px",
    display: "flex",
  },
  cardsBlock: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    border: "1px solid black",
    borderRadius: 20,
    width: 500,
    height: "100%",
    padding: "0 50px 50px 50px",
    gap: 50,
  },
});
