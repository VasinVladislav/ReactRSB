import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  formSubmit: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    margin: "50px 0 0",
  },
  formBlock: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
  formBlockItem: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    width: 300,
  },
  submitBtn: {
    padding: "12px",
    background: "#8a38f7",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
    width: 200,
    margin: "50px 0 0",
  },
});
