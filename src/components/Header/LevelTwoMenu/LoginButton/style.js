import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  loginBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 156,
    height: 42,
    gap: 15,
    background: "none",
    border: "2px solid black",
    borderRadius: 10,
    cursor: "pointer", // Делаем курсор "ручкой" при наведении
  },
  logoutBtn: {
    padding: "8px 16px",
    cursor: "pointer",
    background: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
});
