import mir from "../assets/mir.png";
import { useStyles } from "./style";

export default function Cards() {
  const classes = useStyles();
  return (
    <>
      <div>
        <div className={classes.cardLabel}>
          <span className={classes.cardLabelType}>
            <strong>Карты</strong>
          </span>
          <button className={classes.addBtn}>
            <span>Оформить карту</span>
          </button>
        </div>
        <div className={classes.cardContent}>
          <img className={classes.cardImg} src={mir} alt="" />
          <div className={classes.cardInfo}>
            <div className={classes.cardName}>Мир</div>
            <div className={classes.cash}>
              <strong>153252.0 p</strong>
            </div>
            <div className={classes.cardType}>Дебетовая</div>
          </div>
          <div className={classes.cardNumber}>***1234</div>
        </div>
      </div>
    </>
  );
}
