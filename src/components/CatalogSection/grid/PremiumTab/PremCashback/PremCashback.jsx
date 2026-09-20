import CardColumn from "../../CardColumn";
import CardConstructor from "../../CardConstructor";
import CardRow from "../../CardRow";
import premiumIcon from "../../icons/premium.png";

export default function PremCashback({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={premiumIcon}
        cardTitle={"Премиум Кэшбэк"}
      >
        <CardRow value={"3"} suffix={"%"} text={"на абсолютно все покупки"} />
        <CardColumn
          topText={"без ограничений"}
          botText={"по максимальной сумме"}
        />
      </CardConstructor>
    </>
  );
}
