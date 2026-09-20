import CardColumn from "../../CardColumn";
import CardConstructor from "../../CardConstructor";
import CardRow from "../../CardRow";
import percentIcon from "../../icons/percent.png";

export default function PersonalLoan({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={percentIcon}
        cardTitle={"Кредит на любые цели"}
      >
        <CardRow
          prefix={"от"}
          value={"4.9"}
          suffix={"%"}
          text={"выгодная ставка"}
        />
        <CardColumn
          topText={"до 5 млн ₽"}
          botText={"без справок и поручителей"}
        />
      </CardConstructor>
    </>
  );
}
