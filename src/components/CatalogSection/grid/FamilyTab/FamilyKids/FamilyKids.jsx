import CardColumn from "../../CardColumn";
import CardConstructor from "../../CardConstructor";
import CardRow from "../../CardRow";
import childIcon from "../../icons/child.png";

export default function FamilyKids({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={childIcon}
        cardTitle={"Детская карта"}
      >
        <CardRow
          value={"0"}
          suffix={"₽"}
          text={"бесплатное SMS-информирование"}
        />
        <CardColumn
          topText={"родительский контроль"}
          botText={"лимитов в приложении"}
        />
      </CardConstructor>
    </>
  );
}
