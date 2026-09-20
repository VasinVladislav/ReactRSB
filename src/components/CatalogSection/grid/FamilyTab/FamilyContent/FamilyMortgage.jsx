import CardConstructor, {CardRow, CardColumn} from "../../CardConstructor";
import houseIcon from "../../icons/house.png";

export default function FamilyMortgage({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={houseIcon}
        cardTitle={"Семейная ипотека"}
      >
        <CardRow
          prefix={"от"}
          value={"6"}
          suffix={"%"}
          text={"ставка по программе РФ"}
        />
        <CardColumn topText={"первоначальный взнос"} botText={"маткапиталом"} />
      </CardConstructor>
    </>
  );
}
