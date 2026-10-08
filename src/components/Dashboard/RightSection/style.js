import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  bankProduct: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-around",
  },
  bankProductContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
  bankProductItem: {
    border: "1px solid black",
    borderRadius: 20,
    width: 200,
    height: 150,
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  productImg: {
    width: 50,
  },
});
