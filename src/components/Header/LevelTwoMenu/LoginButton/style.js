import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  userBtn: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  enterBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 42,
    gap: 15,
    background: "none",
    border: "2px solid black",
    borderRadius: 10,
    cursor: "pointer", // Делаем курсор "ручкой" при наведении
  },
  userGreeting: {
    fontWeight: "600",
    color: "#1a1a1a",
  },
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
  settingsBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    cursor: "pointer",
    background: "none",
    border: "2px solid black",
    borderRadius: 10,
  },
  logoutBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    cursor: "pointer",
    background: "none",
    border: "2px solid black",
    borderRadius: 10,
  },
});
