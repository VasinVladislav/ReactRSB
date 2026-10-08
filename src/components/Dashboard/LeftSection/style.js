import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  
  cardLabel: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0",
  },
  cardLabelType: {
    padding: "0 20px"
  },
  addBtn: {
    width: 150,
    height: 30,
    border: "none",
    borderRadius: 30,
    backgroundColor: "#B4BD7F",
    cursor: "pointer",
  },

  cardContent: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    border: "1px solid black",
    borderRadius: 20,
    height: 100,
    margin: "0px 0px 20px"
  },
  cardImg: {
    margin: 15,
  },
  cardInfo: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    padding: 15
  },
  cardName: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cash: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: 20,
    fontFamily: "Manrope",
    whiteSpace: "nowrap",
  },
  cardType: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardNumber: {
    display: "flex",
    justifyContent: "center",
    padding: 15
  }
});