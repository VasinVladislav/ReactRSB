import CardConstructor, {CardRow, CardColumn} from "../../CardConstructor";
import familyIcon from "../../icons/family.png";

export default function FamilyDeposit({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={familyIcon}
        cardTitle={"Семейный счет"}
      >
        <CardRow
          prefix={"до"}
          value={"16"}
          suffix={"%"}
          text={"годовых на накопительный счет"}
        />
        <CardColumn topText={"общий доступ"} botText={"для супругов"} />
      </CardConstructor>
    </>
  );
}
