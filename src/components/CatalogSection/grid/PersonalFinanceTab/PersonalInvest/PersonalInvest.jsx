import CardConstructor from "../../CardConstructor";
import CardRow from "../../CardRow";
import CardColumn from "../../CardColumn";
import investmentsIcon from "../../icons/investments.png";

export default function PersonalInvest({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={investmentsIcon}
        cardTitle={"Инвестиции"}
      >
        <CardRow value={"0"} suffix={"₽"} text={"открытие и обслуживание"} />
        <CardColumn topText={"акция в подарок"} botText={"за открытие счета"} />
      </CardConstructor>
    </>
  );
}
