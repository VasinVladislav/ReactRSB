import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  bankProduct: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-around",
    "@media (max-width: 1599px)": {
      flexDirection: "row",
    },
  },
  bankProductContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    "@media (max-width: 1599px)": {
      flexDirection: "column",
    },
  },
  bankProductItem: {
    border: "1px solid black",
    borderRadius: 20,
    width: 200,
    height: 150,
    display: "flex",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#fff",
    boxShadow: "0 8px 24px 0 rgba(0, 0, 0, .05)",
    "@media (max-width: 1599px)": {
      width: 250,
      height: 135,
      flexDirection: "row",
      gap: 10
    },
  },
  productImg: {
    width: 50,
    height: 50,
  },
});
