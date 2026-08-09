import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  app: {
    "@media (max-width: 1200px)": {
      /* 1. Жёстко фиксируем ширину контейнера на точке перелома */
      width: "1200px",
      minWidth: "1200px",
      maxWidth: "1200px",

      // Инициализируем CSS-переменную, которая правильно делит vw на число
      "--scale-factor": "calc(100vw / 1200)",

      // Передаем эту переменную в scale без лишних кавычек
      transform: "scale(var(--scale-factor))",

      /* 3. Прижимаем точку трансформации к верхнему левому углу */
      transformOrigin: "top left",
      overflowX: "hidden",
    },
  },
});
