import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  wrapper: {
    width: ({ isScaled }) => isScaled ? '1200px' : '100%',
    transform: ({ scale }) => `scale(${scale})`, // Динамический масштаб
    transformOrigin: 'top left', // Сжимаем по центру
    margin: '0 auto',
    
    // Стили для компенсации пустого пространства снизу после scale
    height: ({ scale }) => `calc(100% * ${scale})`, 
  },
});
