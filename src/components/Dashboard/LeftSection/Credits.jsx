import { useStyles } from "./style";

export default function Credits() {
  const classes = useStyles();
  return (
    <>
      <div>
        <div className={classes.cardLabel}>
          <span className={classes.cardLabelType}>
            <strong>Кредиты</strong>
          </span>
          <button className={classes.addBtn}>
            <span>Оформить кредит</span>
          </button>
        </div>
        <div className={classes.cardContent}>
          <div className={classes.cardInfo}>
            <div className={classes.cardName}>У вас нет кредитов</div>
          </div>
        </div>
      </div>
    </>
  );
}
