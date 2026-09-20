import CardConstructor, {CardRow, CardColumn} from "../../CardConstructor";
import creditIcon from "../../icons/credit.png";

export default function PersonalCredit({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={creditIcon}
        cardTitle={"Кредитная карта"}
      >
        <CardRow value={"0"} suffix={"₽"} text={"обслуживание навсегда"} />
        <CardColumn topText={"до 120 дней"} botText={"без процентов"} />
      </CardConstructor>
    </>
  );
}
