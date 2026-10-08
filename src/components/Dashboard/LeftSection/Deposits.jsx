import { useStyles } from "./style";
import deposit from "../assets/deposit.png"

export default function Deposit() {
  const classes = useStyles();
  return (
    <>
      <div>
        <div className={classes.cardLabel}>
          <span className={classes.cardLabelType}>
            <strong>Вклады</strong>
          </span>
          <button className={classes.addBtn}>
            <span>Оформить вклад</span>
          </button>
        </div>
        <div className={classes.cardContent}>
          <img className={classes.cardImg} src={deposit} alt="" />
          <div className={classes.cardInfo}>
            <div className={classes.cardName}>Новый доход</div>
            <div className={classes.cash}>
              <strong>1854300.0 p</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}