import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  header: {
    backgroundColor: "white",
    position: "relative",
    zIndex: 1000,
    "& *": {
      fontFamily: '"Manrope", sans-serif',
      fontSize: 14,
    },
  },
  line: {
    position: "absolute",
    zIndex: 5000,
    top: 125,
    left: 0,
    right: 0,
    border: "1px solid black",
  },
});
