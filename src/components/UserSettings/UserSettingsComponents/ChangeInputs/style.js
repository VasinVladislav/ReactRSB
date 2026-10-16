import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  formLabel: {
    fontSize: "14px",
    fontWeight: "600",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  formInput: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  formInputError: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid red",
  },
  regMsg: {
    fontSize: "12px",
  },
});
