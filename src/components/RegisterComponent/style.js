import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  main: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: 0,
    padding: "150px 0 0",
    backgroundColor: "#f7f9f9"
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "sans-serif",
    width: "80%",
    margin: "auto",
    padding: "50px 0",
    backgroundColor: "#fff",
    boxShadow: "0 8px 24px 0 rgba(0, 0, 0, .05)",
    borderRadius: 30,
  },
  serverError: {
    color: "red",
    fontWeight: "600",
  },
});
